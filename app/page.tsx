import MobileStickyCTA from "../components/MobileStickyCTA";
import PaperFold from "../components/PaperFold";
import FAQAccordion from "../components/FAQAccordion";
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
            className="hidden rounded-full bg-[#231F20] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 hover:shadow-md md:inline-flex"
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
                className="rounded-full bg-[#231F20] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 hover:shadow-md"
              >
                Chat WhatsApp
              </a>
              <a
                href="#portofolio"
                className="rounded-full border border-[#231F20] px-6 py-3 text-sm font-semibold text-[#231F20] transition hover:bg-black/5"
              >
                Lihat Portofolio
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md">
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
              className="relative rounded-3xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
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
          <div className="mt-6 flex flex-wrap gap-2 text-sm text-[#58595B]">
            {["Semua", "Sticker", "Banner", "Signage", "Event", "Corporate"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-[#231F20]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#231F20]"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                src: "https://picsum.photos/seed/dnd-sticker/1200/900",
                title: "Sticker Label",
                tag: "Sticker",
              },
              {
                src: "https://picsum.photos/seed/dnd-banner/1200/900",
                title: "Banner Premium",
                tag: "Banner",
              },
              {
                src: "https://picsum.photos/seed/dnd-signage/1200/900",
                title: "Signage Hotel",
                tag: "Signage",
              },
              {
                src: "https://picsum.photos/seed/dnd-event/1200/900",
                title: "Backdrop Event",
                tag: "Event",
              },
              {
                src: "https://picsum.photos/seed/dnd-corporate/1200/900",
                title: "Corporate Kit",
                tag: "Corporate",
              },
              {
                src: "https://picsum.photos/seed/dnd-retail/1200/900",
                title: "Branding Retail",
                tag: "Sticker",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-black/5">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#58595B]">{item.tag}</div>
                  <h3 className="mt-2 text-base font-semibold text-[#231F20]">{item.title}</h3>
                </div>
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
              className="list-none relative rounded-3xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
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
          <div className="mt-8">
            <FAQAccordion
              items={[
                {
                  q: "Minimal order?",
                  a: "Tidak ada minimal order yang kaku. Kami bisa menyesuaikan mulai dari kebutuhan kecil hingga volume besar, sesuai spesifikasi bahan dan finishing.",
                },
                {
                  q: "Estimasi pengerjaan?",
                  a: "Rata-rata 2–5 hari kerja setelah proof disetujui. Durasi bisa lebih cepat untuk kebutuhan express, tergantung jenis produk dan antrean.",
                },
                {
                  q: "Format file yang aman?",
                  a: "PDF/X, AI, atau PSD dengan teks sudah di-outline, ukuran sesuai final, dan resolusi minimal 300 DPI untuk hasil tajam.",
                },
                {
                  q: "Bisa bantu desain?",
                  a: "Bisa. Tim kami dapat membantu layout atau finalisasi desain agar siap produksi dengan warna yang aman untuk cetak.",
                },
                {
                  q: "Pengiriman luar kota?",
                  a: "Kami melayani pengiriman luar kota via ekspedisi pilihan, dengan packing aman dan update resi setelah pengiriman.",
                },
                {
                  q: "Garansi jika cacat/misprint?",
                  a: "Ada. Jika ditemukan cacat produksi atau misprint, kami akan evaluasi dan lakukan cetak ulang sesuai ketentuan QC.",
                },
              ]}
            />
          </div>
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
