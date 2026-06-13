"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canRun =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canRun) return;

    document.documentElement.classList.add("has-custom-cursor");
    setEnabled(true);

    const target = { x: -50, y: -50 };
    const pos = { x: -50, y: -50 };
    const ringPos = { x: -50, y: -50 };
    let raf = 0;
    let scale = 1;
    let targetScale = 1;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const hot = t.closest(
        'a, button, [role="button"], input, textarea, [data-interactive]'
      );
      targetScale = hot ? 2.6 : 1;
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.45;
      pos.y += (target.y - pos.y) * 0.45;
      ringPos.x += (target.x - ringPos.x) * 0.18;
      ringPos.y += (target.y - ringPos.y) * 0.18;
      scale += (targetScale - scale) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.x - 15}px, ${ringPos.y - 15}px, 0) scale(${scale})`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 30,
          height: 30,
          borderRadius: 999,
          border: "1.5px solid var(--accent)",
          opacity: 0.65,
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: 999,
          background: "var(--accent)",
          pointerEvents: "none",
          zIndex: 10000,
          willChange: "transform",
        }}
      />
    </>
  );
}
