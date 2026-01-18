import MobileStickyCTA from "../components/MobileStickyCTA";
import PaperFold from "../components/PaperFold";
import QuoteForm from "../components/QuoteForm";

export default function Page() {
  return (
    <main className="bg-white pb-24 md:pb-0">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
           <img
            src="/dnd-logo-01.png"
            alt="DND Digital Printing & Advertising"
            className="h-8 w-auto md:h-10 drop-shadow-sm"
            />
           </div>

          <nav className="hidden items-center gap-6 text-sm text-[#58595B] md:flex">
            <a href="#layanan" className="hover:text-[#231F20]">Layanan</a>
            <a href="#portofolio" className="hover:text-[#231F20]">Portofolio</a>
            <a href="#proses" className="hover:text-[#231F20]">Proses</a>
            <a href="#faq" className="hover:text-[#231F20]">FAQ</a>
            <a href="#kontak" className="hover:text-[#231F20]">Kontak</a>
          </nav>
          <a
            href="https://wa.me/6287862691363"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#231F20] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:inline-flex"
          >
            Chat WhatsApp
          </a>
        </div>
      </header>

      <section className="border-b border-black/10 bg-[#F4F4F4]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#58595B]">
              DND Digital Printing & Advertising
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#231F20] md:text-5xl md:leading-tight">
              Cetak Cepat. Hasil Presisi. Branding Naik Kelas.
            </h1>
            <p className="mt-5 max-w-xl text-[#58595B]">
              Partner cetak dan advertising untuk bisnis yang membutuhkan kualitas rapi, konsisten, dan siap dikirim tepat waktu.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/6287862691363"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#231F20] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Chat WhatsApp
              </a>
              <a
                href="#portofolio"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#231F20] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Lihat Portofolio
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <PaperFold size="md" />
            <div className="mb-4 h-px w-full bg-black/10" />
            <h3 className="text-lg font-semibold text-[#231F20]">Partner Produksi yang Terukur</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#58595B]">
              <li>QC ketat sebelum kirim.</li>
              <li>Rekomendasi material sesuai kebutuhan brand.</li>
              <li>Update progres produksi yang transparan.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="layanan" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-14 md:py-16">
        <h2 className="text-2xl font-semibold text-[#231F20]">Layanan Utama</h2>
        <p className="mt-3 text-[#58595B]">
          Digital printing, signage, hingga kebutuhan event dalam satu partner produksi yang siap menyesuaikan ukuran,
          bahan, dan finishing sesuai kebutuhan brand Anda.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Digital Printing",
              desc: "Sticker label, brosur, flyer, dan poster dengan warna konsisten.",
            },
            {
              title: "Signage & Outdoor",
              desc: "Spanduk, banner roll-up, neon box, dan rambu arah.",
            },
            {
              title: "Event & Branding",
              desc: "Backdrop panggung, booth, photobooth, dan display promosi.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 h-px w-full bg-black/10" />
              <h3 className="text-base font-semibold text-[#231F20]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#58595B]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portofolio" className="bg-[#F4F4F4] scroll-mt-24">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 md:py-16">
          <h2 className="text-2xl font-semibold text-[#231F20]">Portofolio</h2>
          <p className="mt-3 text-[#58595B]">
            Contoh hasil kerja untuk berbagai kebutuhan bisnis, mulai dari UMKM hingga korporat lokal.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Branding Retail",
                desc: "Sticker label produk, display rak, dan wobblers promo.",
              },
              {
                title: "Hospitality & Travel",
                desc: "Signage hotel, menu board, dan signage area publik.",
              },
              {
                title: "Event Lokal",
                desc: "Backdrop sponsor, spanduk panggung, dan ID card panitia.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-3 h-px w-full bg-black/10" />
                <h3 className="text-base font-semibold text-[#231F20]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#58595B]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proses" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-14 md:py-16">
        <h2 className="text-2xl font-semibold text-[#231F20]">Proses Kerja</h2>
        <p className="mt-3 text-[#58595B]">
          Alur kerja jelas agar produksi aman: konsultasi kebutuhan, cek file, proof, produksi, QC, hingga pengiriman.
        </p>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            {
              title: "1. Konsultasi",
              desc: "Diskusi kebutuhan, ukuran, jumlah, dan deadline.",
            },
            {
              title: "2. Cek & Proof",
              desc: "Cek file desain dan kirim proof sebelum produksi.",
            },
            {
              title: "3. Produksi",
              desc: "Cetak dan finishing sesuai spesifikasi yang disepakati.",
            },
            {
              title: "4. QC & Kirim",
              desc: "Quality control, packing aman, lalu pengiriman.",
            },
          ].map((step) => (
            <li
              key={step.title}
              className="list-none rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 h-px w-full bg-black/10" />
              <h3 className="text-base font-semibold text-[#231F20]">{step.title}</h3>
              <p className="mt-2 text-sm text-[#58595B]">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="faq" className="bg-[#F4F4F4] scroll-mt-24">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 md:py-16">
          <h2 className="text-2xl font-semibold text-[#231F20]">FAQ</h2>
          <p className="mt-3 text-[#58595B]">Pertanyaan umum seputar proses cetak dan deadline.</p>
        </div>
      </section>

      <section id="kontak" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-14 md:py-16">
        <h2 className="text-2xl font-semibold text-[#231F20]">Kontak & Penawaran</h2>
        <p className="mt-3 text-[#58595B]">
          Isi detail kebutuhanmu, tim DND akan bantu estimasi & rekomendasi material.
        </p>
        <div className="mt-8">
          <QuoteForm />
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 text-sm text-[#58595B]">
          <div className="space-y-2">
            <p className="text-base font-semibold text-[#231F20]">Edy Siswanto · Operations Manager</p>
            <p>WhatsApp: 087-862-691-363</p>
            <p>Email: edysiswanto61@gmail.com</p>
            <p>Alamat: Jl. Yohanes Sahadun (Depan Bandara Komodo), Kec. Komodo, Kab. Manggarai Barat, NTT</p>
            <p>Website: dndadvertising.com</p>
          </div>
        </div>
      </footer>
      <MobileStickyCTA />
    </main>
  );
}
