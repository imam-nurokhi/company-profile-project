"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

function useNetworkCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const nodes: Node[] = [];
    const NODE_COUNT = 80;
    const MAX_DISTANCE = 130;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, 0.7)";
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [canvasRef]);
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useNetworkCanvas(canvasRef);
  const { t } = useLanguage();
  const trustItems = t.hero.trustItems;

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "#0A0F1E" }}
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Radial gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 80%, rgba(16,185,129,0.06) 0%, transparent 60%)",
        }}
      />
      {/* Bottom fade to section below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(10,15,30,0.9))",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "rgba(0, 212, 255, 0.1)",
                border: "1px solid rgba(0, 212, 255, 0.3)",
                color: "#00D4FF",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "#00D4FF" }}
              />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
            style={{ maxWidth: "900px" }}
          >
            <span className="gradient-text-hero">{t.hero.headline1}</span>
            <br />
            <span style={{ color: "#F1F5F9" }}>{t.hero.headline2}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl leading-relaxed max-w-2xl"
            style={{ color: "#94A3B8" }}
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 items-center mt-2"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,212,255,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
              style={{
                background:
                  "linear-gradient(135deg, #00D4FF 0%, #10B981 100%)",
                color: "#0A0F1E",
                boxShadow: "0 4px 20px rgba(0,212,255,0.25)",
              }}
            >
              {t.hero.ctaPrimary}
            </motion.a>
            <motion.a
              href="#case-studies"
              whileHover={{ scale: 1.04, borderColor: "#00D4FF", color: "#00D4FF" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
              style={{
                border: "1px solid rgba(0,212,255,0.4)",
                color: "#F1F5F9",
                backgroundColor: "transparent",
              }}
            >
              {t.hero.ctaSecondary}
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={item}
            className="flex items-center gap-6 sm:gap-10 mt-4"
          >
            {trustItems.map((ti, i) => (
              <div key={i} className="flex flex-col items-center">
                <span
                  className="text-2xl sm:text-3xl font-black"
                  style={{ color: "#00D4FF" }}
                >
                  {ti.value}
                </span>
                <span className="text-xs font-medium mt-0.5" style={{ color: "#64748B" }}>
                  {ti.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-medium" style={{ color: "#64748B" }}>
          {t.hero.scrollLabel}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg
            className="w-5 h-5"
            style={{ color: "#00D4FF" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
