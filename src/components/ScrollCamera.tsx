import { useEffect, useRef } from "react";
import {
  motion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { heroData } from "../data/mockData";

const COLS = 8;
const TOTAL_FRAMES = 151;
const TILE_W = 864;
const TILE_H = 496;
const SPRITE_SRC = "/camera-spritesheet.jpg";
const FALLBACK_BG = "#111111";

interface ScrollCameraProps {
  readonly scrollProgress: MotionValue<number>;
}

export function ScrollCamera({ scrollProgress }: ScrollCameraProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const frameRef = useRef(0);
  const rafRef = useRef(0);
  const layoutRef = useRef({ cssW: 0, cssH: 0, dpr: 1 });

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { cssW, cssH, dpr } = layoutRef.current;
    if (cssW <= 0 || cssH <= 0) return;

    const col = index % COLS;
    const row = Math.floor(index / COLS);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = FALLBACK_BG;
    ctx.fillRect(0, 0, cssW, cssH);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "medium";

    const scale = Math.min(cssW / TILE_W, cssH / TILE_H);
    const drawW = TILE_W * scale;
    const drawH = TILE_H * scale;
    const dx = (cssW - drawW) / 2;
    const dy = (cssH - drawH) / 2;

    ctx.drawImage(
      img,
      col * TILE_W,
      row * TILE_H,
      TILE_W,
      TILE_H,
      dx,
      dy,
      drawW,
      drawH,
    );
  };

  const render = (index: number) => {
    frameRef.current = index;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawFrame(index));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cssW = container.clientWidth;
      const cssH = container.clientHeight;
      if (cssW <= 0 || cssH <= 0) return;

      layoutRef.current = { cssW, cssH, dpr };
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      drawFrame(frameRef.current);
    };

    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(container);
    resizeCanvas();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = SPRITE_SRC;
    img.decode?.().catch(() => {});
    img.onload = () => {
      imgRef.current = img;
      drawFrame(frameRef.current);
    };
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const update = (latest: number) => {
      const index = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(latest * (TOTAL_FRAMES - 1))),
      );
      render(index);
    };
    const unsub = scrollProgress.on("change", update);
    update(scrollProgress.get());
    return unsub;
  }, [scrollProgress]);

  const titleOpacity = useTransform(scrollProgress, [0, 0.12], [1, 0]);
  const scrollHintOpacity = useTransform(scrollProgress, [0, 0.06], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: FALLBACK_BG }}
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
        role="img"
        aria-label={heroData.cameraAlt}
      />

      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 flex flex-col items-center px-5 pt-16 text-center md:pt-20"
        style={{ opacity: titleOpacity }}
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-[0.25em] text-accent-strong">
            {heroData.serialStamp}
          </span>
        </div>
        <h1 className="font-serif uppercase leading-none tracking-tight text-paper [text-shadow:0_2px_24px_rgba(0,0,0,0.6)]">
          {heroData.name}
        </h1>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
          {heroData.subtitle} — {heroData.role}
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-paper/80"
        style={{ opacity: scrollHintOpacity }}
        aria-hidden="true"
      >
        <span className="[text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
          Scroll to animate
        </span>
        <svg
          className="h-5 w-5 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 13l-7 7-7-7M19 5l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </div>
  );
}
