"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface PortfolioImageSliderProps {
  images?: string | string[];
  alt: string;
}

export default function ImageSider({ images, alt }: PortfolioImageSliderProps) {
  const list = images ? (Array.isArray(images) ? images : [images]) : [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (list.length === 0) {
    return (
      <div className="absolute inset-0 bg-linear-to-br from-[#00B4DB] to-indigo dark:bg-linear-to-r dark:from-[#22D3EE] dark:to-[#818CF8]" />
    );
  }

  const handleImageTap = (e: React.MouseEvent) => {
    if (list.length <= 1) return;
    e.preventDefault(); // cegah navigasi <a> parent saat tap gambar
    setActiveIndex((prev) => (prev + 1) % list.length);
  };

  const handleDotClick = (e: React.MouseEvent, targetIndex: number) => {
    e.preventDefault();
    e.stopPropagation(); // cegah bubble ke handleImageTap
    setActiveIndex(targetIndex);
  };

  return (
    <div className="absolute inset-0 overflow-hidden" onClick={handleImageTap}>
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{
          width: `${list.length * 100}%`,
          transform: `translateX(-${activeIndex * (100 / list.length)}%)`,
        }}
      >
        {list.map((path, i) => (
          <div key={i} className="relative h-full shrink-0" style={{ width: `${100 / list.length}%` }}>
            <Image unoptimized fill src={`/images/projects/${path}`} alt={`${alt}-${i}`} className="object-cover" />
          </div>
        ))}
      </div>

      {list.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {list.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Lihat gambar ${i + 1}`}
              onClick={(e) => handleDotClick(e, i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex
                  ? "w-5 bg-linear-to-r from-[#00B4DB] to-[#5B86E5] dark:from-[#22D3EE] dark:to-[#818CF8]"
                  : "w-1.5 bg-black/60 hover:bg-black/80"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}