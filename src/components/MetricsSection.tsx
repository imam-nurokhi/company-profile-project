"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const metricsData = [
  { value: 50, suffix: "+", accent: "#00D4FF", icon: "🚀" },
  { value: 99.9, suffix: "%", accent: "#10B981", icon: "⚡" },
  { value: 30, suffix: "+", accent: "#8B5CF6", icon: "🤝" },
  { value: 5, suffix: " Yrs", accent: "#F59E0B", icon: "🏆" },
  { value: 24, suffix: "/7", accent: "#EF4444", icon: "🛡️" },
];

function AnimatedCounter({
  value,
  suffix,
  accent,
  isInView,
}: {
  value: number;
  suffix: string;
  accent: string;
  isInView: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    startRef.current = null;

    const animate = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(parseFloat((eased * value).toFixed(value % 1 !== 0 ? 1 : 0)));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [isInView, value]);

  return (
    <span
      className="text-4xl sm:text-5xl font-black tabular-nums"
      style={{ color: accent }}
    >
      {display}
      {suffix}
    </span>
  );
}

function MetricCard({
  value,
  suffix,
  accent,
  icon,
  label,
  description,
  index,
  isInView,
}: {
  value: number;
  suffix: string;
  accent: string;
  icon: string;
  label: string;
  description: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl p-6 flex flex-col gap-3 overflow-hidden group"
      style={{
        background: "rgba(30, 42, 59, 0.4)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.border = `1px solid ${accent}35`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${accent}18`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.border =
          "1px solid rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Background glow */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{ backgroundColor: `${accent}12` }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{ backgroundColor: `${accent}15` }}
      >
        {icon}
      </div>

      {/* Counter */}
      <AnimatedCounter
        value={value}
        suffix={suffix}
        accent={accent}
        isInView={isInView}
      />

      {/* Label & description */}
      <div>
        <p className="font-bold text-base" style={{ color: "#F1F5F9" }}>
          {label}
        </p>
        <p className="text-sm mt-0.5" style={{ color: "#64748B" }}>
          {description}
        </p>
      </div>

      {/* Accent bottom bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${accent}, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section
      id="metrics"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#080D1A" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial gradient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div
              className="h-px w-8"
              style={{
                background: "linear-gradient(90deg, transparent, #00D4FF)",
              }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#00D4FF" }}
            >
              {t.metrics.sectionLabel}
            </span>
            <div
              className="h-px w-8"
              style={{
                background: "linear-gradient(90deg, #00D4FF, transparent)",
              }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black"
            style={{ color: "#F1F5F9" }}
          >
            {t.metrics.heading1}{" "}
            <span className="gradient-text">{t.metrics.heading2}</span>
          </motion.h2>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {metricsData.map((m, i) => (
            <MetricCard
              key={i}
              value={m.value}
              suffix={m.suffix}
              accent={m.accent}
              icon={m.icon}
              label={t.metrics.items[i].label}
              description={t.metrics.items[i].description}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
