"use client";

import { useMemo } from "react";

const BUSINESS_NUMBER = "6287862691363";

const buildWhatsAppLink = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_NUMBER}?text=${encoded}`;
};

export default function MobileStickyCTA() {
  const waLink = useMemo(() => {
    const template = "Halo DND, saya ingin konsultasi cetak.";
    return buildWhatsAppLink(template);
  }, []);

  const handleScroll = () => {
    const target = document.getElementById("kontak");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] md:hidden">
      <div className="border-t border-black/10 bg-white/95 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-[#231F20] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-90 hover:shadow-md"
          >
            Chat WhatsApp
          </a>
          <button
            type="button"
            onClick={handleScroll}
            className="flex-1 rounded-full border border-[#231F20] px-6 py-3 text-center text-sm font-semibold text-[#231F20] transition hover:bg-black/5"
          >
            Minta Penawaran
          </button>
        </div>
      </div>
    </div>
  );
}
