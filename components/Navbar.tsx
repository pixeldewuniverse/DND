"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#proses", label: "Proses" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="relative">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/dnd-logo-01.png" alt="DND Digital Printing & Advertising" className="h-9 w-auto" />
            <span className="text-lg font-semibold tracking-wide text-[#231F20]">
              DND Digital Printing & Advertising
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#58595B] md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[#231F20]">
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-full border border-black/10 px-3 py-2 text-sm font-semibold text-[#231F20] transition hover:bg-black/5 md:hidden"
          >
            {isOpen ? "Tutup" : "Menu"}
          </button>
        </div>

        {isOpen && (
          <>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={handleClose}
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
            />
            <div className="absolute left-0 right-0 top-full z-50 px-5 md:hidden">
              <div
                id="mobile-nav"
                className="rounded-3xl border border-black/10 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-col gap-3 text-sm text-[#58595B]">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="hover:text-[#231F20]"
                      onClick={handleClose}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
