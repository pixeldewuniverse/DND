"use client";

const WHATSAPP_NUMBER = "62812XXXXXXX";

function buildWaLink(text: string) {
  const url = new URL(`https://wa.me/${WHATSAPP_NUMBER}`);
  url.searchParams.set("text", text);
  return url.toString();
}

export default function MobileStickyCTA() {
  const waText = "Halo DND, saya mau minta penawaran cetak.";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[999] border-t border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-3 px-4 py-3">
        <a
          href={buildWaLink(waText)}
          className="flex-1 rounded-full bg-[#231F20] px-4 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
        >
          Chat WhatsApp
        </a>

        <a
          href="#kontak"
          className="flex-1 rounded-full border border-[#231F20] px-4 py-3 text-center text-sm font-semibold text-[#231F20] hover:bg-black/5"
        >
          Minta Penawaran
        </a>
      </div>
    </div>
  );
}
