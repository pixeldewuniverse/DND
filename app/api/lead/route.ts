import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis.com";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;
const rateLimiter = new Map<string, { count: number; start: number }>();

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const entry = rateLimiter.get(ip);
  if (!entry || now - entry.start > RATE_LIMIT_WINDOW_MS) {
    rateLimiter.set(ip, { count: 1, start: now });
    return false;
  }
  entry.count += 1;
  rateLimiter.set(ip, entry);
  return entry.count > RATE_LIMIT_MAX;
};

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ message: "Terlalu banyak permintaan." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ message: "Payload kosong." }, { status: 400 });
  }

  const { name, whatsapp, product, qty, deadline, notes = "", fileLink = "" } = body;

  if (!name || !whatsapp || !product || !qty || !deadline) {
    return NextResponse.json({ message: "Data belum lengkap." }, { status: 400 });
  }

  const sheetsId = process.env.GOOGLE_SHEETS_ID;
  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!sheetsId || !serviceEmail || !privateKey) {
    return NextResponse.json({ message: "Konfigurasi server belum lengkap." }, { status: 500 });
  }

  try {
    const auth = new google.auth.JWT({
      email: serviceEmail,
      key: privateKey,
      scopes: ["https://accounts.google.com/o/oauth2/auth"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetsId,
      range: "Leads!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            name,
            whatsapp,
            product,
            qty,
            deadline,
            notes,
            fileLink,
            ip,
          ],
        ],
      },
    });

    return NextResponse.json({ message: "Sukses" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Gagal menyimpan data." }, { status: 500 });
  }
}
