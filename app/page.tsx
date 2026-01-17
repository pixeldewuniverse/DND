import MobileStickyCTA from "../components/MobileStickyCTA";
import QuoteForm from "../components/QuoteForm";

export default function Home() {
  return (
    <main className="bg-white">
      <header className="sticky top-0 z-40 border-b border-[#231F20]/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
          <div className="text-lg font-semibold tracking-wide">DND Digital Printing</div>
          <nav className="hidden items-center gap-6 text-sm text-[#58595B] md:flex">
            <a href="#layanan" className="hover:text-[#231F20]">Layanan</a>
            <a href="#portofolio" className="hover:text-[#231F20]">Portofolio</a>
            <a href="#proses" className="hover:text-[#231F20]">Proses</a>
            <a href="#faq" className="hover:text-[#231F20]">FAQ</a>
            <a href="#kontak" className="hover:text-[#231F20]">Kontak</a>
          </nav>
          <a
            href="https://wa.me/62812XXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#231F20] px-5 py-2 text-sm font-semibold text-white md:inline-flex"
          >
            Chat WhatsApp
          </a>
        </div>
      </header>

      <section className="border-b border-[#231F20]/10 bg-[#F4F4F4]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#58595B]">DND Printing</p>
            <h1 className="mt-4 text-4xl font-semibold text-[#231F20] md:text-5xl">
              Cetak Cepat. Hasil Presisi. Branding Naik Kelas.
            </h1>
            <p className="mt-5 text-[#58595B]">
              Partner cetak dan advertising untuk bisnis yang membutuhkan kualitas rapi, konsisten, dan siap dikirim tepat waktu.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/62812XXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#231F20] px-5 py-3 text-sm font-semibold text-white"
              >
                Chat WhatsApp
              </a>
              <a
                href="#portofolio"
                className="rounded-full border border-[#231F20] px-5 py-3 text-sm font-semibold text-[#231F20]"
              >
                Lihat Portofolio
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-[#231F20]/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Partner Produksi yang Terukur</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#58595B]">
              <li>QC ketat sebelum kirim.</li>
              <li>Rekomendasi material sesuai kebutuhan brand.</li>
              <li>Update progres produksi yang transparan.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="layanan" className="mx-auto w-full max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-semibold text-[#231F20]">Layanan Utama</h2>
        <p className="mt-3 text-[#58595B]">Digital printing, signage, hingga kebutuhan event dalam satu partner produksi.</p>
      </section>

      <section id="portofolio" className="bg-[#F4F4F4]">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-semibold text-[#231F20]">Portofolio</h2>
          <p className="mt-3 text-[#58595B]">Contoh hasil kerja untuk berbagai kebutuhan bisnis.</p>
        </div>
      </section>

      <section id="proses" className="mx-auto w-full max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-semibold text-[#231F20]">Proses Kerja</h2>
        <p className="mt-3 text-[#58595B]">Konsultasi, cek file, proof, produksi, QC, dan pengiriman.</p>
      </section>

      <section id="faq" className="bg-[#F4F4F4]">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-semibold text-[#231F20]">FAQ</h2>
          <p className="mt-3 text-[#58595B]">Pertanyaan umum seputar proses cetak dan deadline.</p>
        </div>
      </section>

      <QuoteForm />
      <MobileStickyCTA />
    </main>
  );
}
