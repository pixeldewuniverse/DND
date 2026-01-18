"use client";

import { useEffect, useMemo, useState } from "react";

type PortfolioItem = {
  id: string;
  src: string;
  title: string;
  tag: "Sticker" | "Banner" | "Signage" | "Event" | "Corporate";
  size: string;
  material: string;
  finishing: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: "sticker-1",
    src: "https://picsum.photos/seed/dnd-sticker/1200/900",
    title: "Sticker Label Produk",
    tag: "Sticker",
    size: "10×10 cm",
    material: "Vinyl",
    finishing: "Laminasi doff",
  },
  {
    id: "banner-1",
    src: "https://picsum.photos/seed/dnd-banner/1200/900",
    title: "Banner Promo",
    tag: "Banner",
    size: "60×160 cm",
    material: "Flexi",
    finishing: "Eyelet",
  },
  {
    id: "signage-1",
    src: "https://picsum.photos/seed/dnd-signage/1200/900",
    title: "Signage Toko",
    tag: "Signage",
    size: "120×40 cm",
    material: "ACP / Sticker",
    finishing: "Mounting",
  },
  {
    id: "event-1",
    src: "https://picsum.photos/seed/dnd-event/1200/900",
    title: "Backdrop Event",
    tag: "Event",
    size: "3×2 m",
    material: "Albatros",
    finishing: "Rangka + pasang",
  },
  {
    id: "corporate-1",
    src: "https://picsum.photos/seed/dnd-corporate/1200/900",
    title: "Kartu Nama",
    tag: "Corporate",
    size: "9×5.5 cm",
    material: "Art Carton",
    finishing: "Laminasi glossy",
  },
  {
    id: "sticker-2",
    src: "https://picsum.photos/seed/dnd-sticker2/1200/900",
    title: "Wobbler / Display",
    tag: "Sticker",
    size: "A5",
    material: "Art Paper",
    finishing: "Cutting",
  },
];

const filterOptions = ["Semua", "Sticker", "Banner", "Signage", "Event", "Corporate"] as const;
type FilterOption = (typeof filterOptions)[number];

const buildWhatsAppLink = (item: PortfolioItem) => {
  const message =
    `Hallo DND, saya mau request seperti portofolio: ${item.title} (${item.tag}). ` +
    `Size: ${item.size}. Material: ${item.material}. Finishing: ${item.finishing}. ` +
    "Mohon estimasi & rekomendasi material terbaik ya.";
  return `https://wa.me/6287862691363?text=${encodeURIComponent(message)}`;
};

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("Semua");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "Semua") {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.tag === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };
    if (activeItem) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem]);

  useEffect(() => {
    document.body.style.overflow = activeItem ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  const handleRequestQuote = () => {
    setActiveItem(null);
    const target = document.getElementById("kontak");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-2">
        {filterOptions.map((option) => {
          const isActive = option === activeFilter;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setActiveFilter(option)}
              className={[
                "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition",
                isActive
                  ? "bg-[#231F20] text-white"
                  : "border border-black/10 bg-white text-[#231F20] hover:bg-black/5",
              ].join(" ")}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveItem(item)}
            className="group text-left"
          >
            <div className="rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
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
                <div className="mt-3 space-y-1 text-xs text-[#58595B]">
                  <p>Size: {item.size}</p>
                  <p>Material: {item.material}</p>
                  <p>Finishing: {item.finishing}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-5 py-8">
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setActiveItem(null)}
            className="absolute inset-0"
          />
          <div className="relative w-full max-w-3xl rounded-3xl border border-black/10 bg-white p-5 shadow-md md:p-7">
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute right-4 top-4 rounded-full border border-black/10 px-3 py-2 text-sm font-semibold text-[#231F20] transition hover:bg-black/5"
            >
              ✕
            </button>
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-black/5">
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#58595B]">
                  {activeItem.tag}
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-[#231F20]">{activeItem.title}</h3>
                <div className="mt-4 space-y-2 text-sm text-[#58595B]">
                  <p>
                    <span className="font-semibold text-[#231F20]">Size:</span> {activeItem.size}
                  </p>
                  <p>
                    <span className="font-semibold text-[#231F20]">Material:</span> {activeItem.material}
                  </p>
                  <p>
                    <span className="font-semibold text-[#231F20]">Finishing:</span> {activeItem.finishing}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleRequestQuote}
                    className="rounded-full bg-[#231F20] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Minta Penawaran
                  </button>
                  <a
                    href={buildWhatsAppLink(activeItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#231F20] transition hover:bg-black/5"
                  >
                    Chat WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
