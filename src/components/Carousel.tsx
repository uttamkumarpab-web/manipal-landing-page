"use client";

import { useState, useRef } from "react";

export default function Carousel({ children, itemsPerView = { sm: 1, md: 2, lg: 4 } }: {
  children: React.ReactNode[];
  itemsPerView?: { sm: number; md: number; lg: number };
}) {
  const [current, setCurrent] = useState(0);
  const max = Math.max(0, children.length - 1);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {children.map((child, i) => (
            <div key={i} className="min-w-full md:min-w-[50%] lg:min-w-[25%] flex-shrink-0 px-2">
              {child}
            </div>
          ))}
        </div>
      </div>
      {current > 0 && (
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#ff6b35] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:opacity-90 -ml-4">
          &#8249;
        </button>
      )}
      {current < max && (
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#ff6b35] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:opacity-90 -mr-4">
          &#8250;
        </button>
      )}
    </div>
  );
}
