"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const calc = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      const ratio = scrollable > 0 ? h.scrollTop / scrollable : 0;
      setPct(Math.round(Math.min(Math.max(ratio, 0), 1) * 100));
    };
    calc();
    window.addEventListener("scroll", calc, { passive: true });
    window.addEventListener("resize", calc);
    return () => {
      window.removeEventListener("scroll", calc);
      window.removeEventListener("resize", calc);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 bottom-0 h-px bg-hairline"
      >
        <div
          className="h-full bg-acid"
          style={{ width: `${pct}%`, transition: "width 80ms linear" }}
        />
      </div>
      <span
        aria-hidden="true"
        className="mono-meta tabular-nums hidden md:inline"
      >
        {String(pct).padStart(3, "0")}
      </span>
    </>
  );
}
