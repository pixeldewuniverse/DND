"use client";

import { useMemo, useState } from "react";

const BUSINESS_NUMBER = "087862691363";

const buildWhatsAppLink = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_NUMBER}?text=${encoded}`;
};

const normalizeWhatsApp = (value: string) => {
  const trimmed = value.replace(/\s+/g, "");
  const digits = trimmed.replace(/[^0-9+]/g, "");
  if (digits.startsWith("+")) {
    return digits.slice(1);
  }
  if (digits.startsWith("0")) {
    return `62${digits.slice(1)}`;
  }
  return digits;
};

const isValidWhatsApp = (value: string) => {
  const normalized = normalizeWhatsApp(value);
  return /^62\d{8,14}$/.test(normalized);
};

export type QuoteFormData = {
  name: string;
  whatsapp: string;
  product: string;
  qty: string;
  deadline: string;
  notes?: string;
  fileLink?: string;
};

export default function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    whatsapp: "",
    product: "",
    qty: "",
    deadline: "",
    notes: "",
    fileLink: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const waTemplate = useMemo(() => {
    const message = `Halo DND, saya ${formData.name}. Saya mau cetak ${formData.product}, qty ${formData.qty}, deadline ${formData.deadline}. Catatan: ${formData.notes || "-"}. Link desain: ${formData.fileLink || "-"}.`;
    return buildWhatsAppLink(message);
  }, [formData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!isValidWhatsApp(formData.whatsapp)) {
      setError("Nomor WhatsApp tidak valid. Gunakan format 08xx atau +62xxx.");
      return;
    }

    if (!/^\d+$/.test(formData.qty)) {
      setError("Jumlah/QTY harus berupa angka.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          whatsapp: normalizeWhatsApp(formData.whatsapp),
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal mengirim data. Silakan coba lagi.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Terjadi kesalahan.");
    }
  };

  return (
    <section id="kontak" className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#58595B]">Quote Form</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#231F20] md:text-4xl">
              Minta Penawaran Cepat
            </h2>
            <p className="mt-4 text-[#58595B]">
              Beri kami detail kebutuhan Anda. Tim DND akan menghubungi dengan estimasi harga dan rekomendasi material terbaik.
            </p>
            <div className="mt-6 rounded-2xl border border-[#231F20]/10 bg-[#F4F4F4] p-5 text-sm text-[#231F20]">
              Respons WhatsApp cepat pada jam kerja. Kami bantu dari file check sampai produksi.
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#231F20]/10 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-[#231F20]">Nama</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-[#231F20]/15 px-4 py-3 text-sm focus:border-[#231F20] focus:outline-none"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#231F20]">No WhatsApp</label>
                <input
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-[#231F20]/15 px-4 py-3 text-sm focus:border-[#231F20] focus:outline-none"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#231F20]">Produk</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-[#231F20]/15 px-4 py-3 text-sm focus:border-[#231F20] focus:outline-none"
                >
                  <option value="">Pilih produk</option>
                  <option>Sticker</option>
                  <option>Banner</option>
                  <option>Brosur</option>
                  <option>Spanduk</option>
                  <option>Signage</option>
                  <option>Event Backdrop</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-[#231F20]">Jumlah / QTY</label>
                  <input
                    name="qty"
                    value={formData.qty}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-[#231F20]/15 px-4 py-3 text-sm focus:border-[#231F20] focus:outline-none"
                    placeholder="Contoh: 500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#231F20]">Deadline</label>
                  <input
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-[#231F20]/15 px-4 py-3 text-sm focus:border-[#231F20] focus:outline-none"
                    placeholder="Misal: 24 Okt 2026"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-[#231F20]">Catatan (Opsional)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="mt-2 w-full rounded-xl border border-[#231F20]/15 px-4 py-3 text-sm focus:border-[#231F20] focus:outline-none"
                  placeholder="Finishing, material, atau detail lainnya"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#231F20]">Link Desain (Opsional)</label>
                <input
                  name="fileLink"
                  value={formData.fileLink}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-[#231F20]/15 px-4 py-3 text-sm focus:border-[#231F20] focus:outline-none"
                  placeholder="Link Google Drive/Canva"
                />
              </div>
            </div>

            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

            {status === "success" ? (
              <div className="mt-5 rounded-2xl border border-[#231F20]/10 bg-[#F4F4F4] p-4 text-sm text-[#231F20]">
                <p>Terima kasih! Data sudah terkirim.</p>
                <a
                  href={waTemplate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#231F20] px-4 py-3 text-sm font-semibold text-white"
                >
                  Kirim Detail ke WhatsApp
                </a>
              </div>
            ) : (
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-5 w-full rounded-full bg-[#231F20] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2f2b2c] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Mengirim..." : "Kirim Permintaan"}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
