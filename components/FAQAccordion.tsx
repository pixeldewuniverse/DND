"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.q}
            className="rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-[#231F20]">{item.q}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#231F20]">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-[#58595B]">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
