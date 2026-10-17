"use client";

import { useEffect, useRef } from "react";

type Props = { className?: string; intensity?: number };

/** Animated underwater caustics, inspired by the supplied turquoise reference.
 * No dependencies, no network assets. Respects reduced motion. */
export default function TurquoiseWaterBackground({ className = "", intensity = 1 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let raf = 0;
    let width = 0, height = 0, dpr = 1;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, r.width); height = Math.max(1, r.height);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render(0);
    };
    const render = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const base = ctx.createLinearGradient(width, 0, 0, height);
      base.addColorStop(0, "#03262c");
      base.addColorStop(.35, "#07534f");
      base.addColorStop(.72, "#198e8c");
      base.addColorStop(1, "#a7e2dc");
      ctx.fillStyle = base; ctx.fillRect(0, 0, width, height);
      // Wide refracted patches of underwater light.
      ctx.globalCompositeOperation = "screen";
      for (let i = 0; i < 12; i++) {
        const x = width * (-.1 + (i * .191) % 1.25) + Math.sin(t * .15 + i * 2.7) * width * .075;
        const y = height * (.12 + (i * .273) % .95) + Math.cos(t * .11 + i) * height * .07;
        const radius = Math.max(width, height) * (.19 + (i % 4) * .035);
        const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
        g.addColorStop(0, `rgba(165,255,240,${(.095 + (i % 3) * .028) * intensity})`);
        g.addColorStop(.5, "rgba(85,214,203,.055)");
        g.addColorStop(1, "rgba(85,214,203,0)");
        ctx.fillStyle = g; ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
      }
      // Multiple softly blurred wavefronts, rather than obvious horizontal stripes.
      ctx.save();
      ctx.filter = `blur(${Math.max(9, width * .011)}px)`;
      ctx.lineCap = "round";
      for (let layer = 0; layer < 3; layer++) {
        for (let i = 0; i < 12; i++) {
          ctx.beginPath();
          const startY = height * (-.25 + i * .126 + layer * .043);
          for (let step = 0; step <= 85; step++) {
            const x = (step / 85) * width;
            const xn = x / Math.max(1, width);
            const y = startY + xn * height * (.42 + layer * .09)
              + Math.sin(xn * (9 + layer * 2) + i * 1.55 + t * (.20 + layer * .05)) * height * .055
              + Math.sin(xn * 23 - i * .72 - t * .13) * height * .017;
            if (step === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(178,255,244,${(.095 - layer * .018) * intensity})`;
          ctx.lineWidth = Math.max(13, width * (.022 + layer * .007));
          ctx.stroke();
        }
      }
      ctx.restore();
      ctx.globalCompositeOperation = "source-over";
      // Very subtle edge shading, as in the supplied photograph.
      const shade = ctx.createRadialGradient(width * .3, height * .75, width * .12, width * .55, height * .5, width * .85);
      shade.addColorStop(0, "rgba(0,0,0,0)");
      shade.addColorStop(1, "rgba(0,25,28,.36)");
      ctx.fillStyle = shade; ctx.fillRect(0, 0, width, height);
    };
    const tick = () => { frame += 1; render(frame / 60); raf = requestAnimationFrame(tick); };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    if (!motion.matches) raf = requestAnimationFrame(tick);
    const onMotion = () => { cancelAnimationFrame(raf); if (!motion.matches) raf = requestAnimationFrame(tick); else render(0); };
    motion.addEventListener("change", onMotion);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); motion.removeEventListener("change", onMotion); };
  }, [intensity]);
  return <canvas ref={canvasRef} aria-hidden="true" className={className} style={{ display: "block", width: "100%", height: "100%" }} />;
}
