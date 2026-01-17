"use client";

import { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "62812XXXXXXX";

type FormState = {
  name: string;
  whatsapp: string;
  product: string;
  qty: string;
  deadline: string;
  notes: string;
  fileLink: string;
};

const initialState: FormState = {
  name: "",
  whatsapp: "",
  product: "Sticker",
  qty: "",
  deadline: "",
  notes: "",
  fileLink: "",
};

function normalizeWhatsApp(input: string) {
  // Keep digits and plus, then normalize common Indonesian formats
  let v = input.trim().replace(/[^\d+]/g, "");
  if (v.startsWith("+")) v = v.slice(1);
  if (v.startsWith("08")) v = "62" + v.slice(1);
  if (v.startsWith("8")) v = "62" + v;
  return v;
}

function buildWaLink(text: string) {
  const url = new URL(`https://wa.me/${WHATSAPP_NUMBER}`);
  url.searchParams.set("text", text);
  return url.toString();
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);

  const waMessage = useMemo(() => {
    const w = normalizeWhatsApp(form.whatsapp);
    return `Halo DND, saya ${form.name}.
Produk: ${form.product}
Qty: ${form.qty}
Deadline: ${form.deadline}
Link desain: ${form.fileLink || "-"}
Catatan: ${form.notes || "-"}

No WA saya: ${w || form.whatsapp}

Mohon estimasi harga & rekomendasi material terbaik ya. Terima kasih 🙏`;
  }, [form]);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const w = normalizeWhatsApp(form.whatsapp);
    if (!form.name || !form.product || !form.qty || !form.deadline || !form.whatsapp) {
      setError("Lengkapi data wajib dulu ya.");
      return;
    }
    if (!/^\d+$/.test(form.qty)) {
      setError("QTY harus angka.");
      return;
    }
    if (!/^62\d{8,15}$/.test(w)) {
      setError("Nomor WhatsApp tidak valid. Gunakan format 08xxx atau +62xxx.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          whatsapp: w,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data?.message || "Gagal mengirim data.");
        return;
      }

      setSuccess(true);
      // optional: reset form
      // setForm(initialState);
    } catch {
      setError("Terjadi error jaringan. Coba lagi ya.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-[#231F20]">Minta Penawaran</h2>
      <p className="mt-2 text-sm text-[#58595B]">
        Isi detail singkat. Tim DND akan cek kebutuhan & rekomendasi material terbaik.
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Nama *</label>
            <input
              value={form.name}
              onChange={onChange("name")}
              className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Nama kamu"
              required
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">No WhatsApp *</label>
            <input
              value={form.whatsapp}
              onChange={onChange("whatsapp")}
              className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="08xxxx / +62xxxx"
              required
            />
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-3">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Produk *</label>
            <select
              value={form.product}
              onChange={onChange("product")}
              className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
            >
              <option>Sticker</option>
              <option>Banner</option>
              <option>Brosur</option>
              <option>Spanduk</option>
              <option>Signage</option>
              <option>Event Backdrop</option>
              <option>Lainnya</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">QTY *</label>
            <input
              value={form.qty}
              onChange={onChange("qty")}
              className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="contoh: 2"
              required
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">Deadline *</label>
            <input
              value={form.deadline}
              onChange={onChange("deadline")}
              className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="contoh: 20 Jan 2026"
              required
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium">Link Desain (opsional)</label>
          <input
            value={form.fileLink}
            onChange={onChange("fileLink")}
            className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
            placeholder="Link Canva/Drive"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium">Catatan (opsional)</label>
          <textarea
            value={form.notes}
            onChange={onChange("notes")}
            className="min-h-[110px] rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
            placeholder="Finishing doff/glossy, ukuran, dll..."
          />
        </div>

        {error && (
          <div className="rounded-xl border border-black/10 bg-black/5 p-3 text-sm text-[#231F20]">
            ⚠️ {error}
          </div>
        )}

        {success && (
          <div className="rounded-xl border border-black/10 bg-black/5 p-3 text-sm text-[#231F20]">
            ✅ Data berhasil terkirim.
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <a
                href={buildWaLink(waMessage)}
                className="inline-flex items-center justify-center rounded-full bg-[#231F20] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Kirim Detail ke WhatsApp
              </a>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(waMessage)}
                className="inline-flex items-center justify-center rounded-full border border-[#231F20] px-5 py-3 text-sm font-semibold text-[#231F20] hover:bg-black/5"
              >
                Copy Pesan
              </button>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[#231F20] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Mengirim..." : "Minta Penawaran"}
        </button>
      </form>
    </div>
  );
}
