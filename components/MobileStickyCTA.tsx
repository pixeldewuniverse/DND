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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[999] ...">
      <div className="bg-white/95 backdrop-blur border-t border-[#231F20]/10 px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
        <div className="flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-[#231F20] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#2f2b2c]"
          >
            Chat WhatsApp
          </a>
          <button
            type="button"
            onClick={handleScroll}
            className="flex-1 rounded-full border border-[#231F20] px-4 py-3 text-center text-sm font-semibold text-[#231F20] transition hover:bg-[#231F20] hover:text-white"
          >
            Minta Penawaran
          </button>
        </div>
      </div>
    </div>
  );
}
