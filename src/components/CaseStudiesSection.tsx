"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const clientLogos = [
  "FinTechPro",
  "AquaLogic",
  "NovaMed",
  "SkyBuild",
  "DataSphere",
  "ClearOps",
  "UrbanFlow",
  "GridCore",
  "PeakSync",
  "HorizonAI",
];

const projects = [
  {
    id: 1,
    name: "FinTechPro Banking Platform",
    description:
      "End-to-end digital banking platform handling 2M+ daily transactions with real-time fraud detection and multi-currency support.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    accent: "#00D4FF",
    gradient: "from-[#0A0F1E] via-[#00D4FF]/20 to-[#10B981]/20",
    size: "large",
  },
  {
    id: 2,
    name: "NovaMed ERP System",
    description:
      "Unified ERP for a 500-bed hospital chain covering patient management, pharmacy, billing, and compliance reporting.",
    tags: ["Next.js", "TypeScript", "MySQL", "Docker"],
    accent: "#10B981",
    gradient: "from-[#0A0F1E] via-[#10B981]/20 to-[#8B5CF6]/20",
    size: "small",
  },
  {
    id: 3,
    name: "SkyBuild Construction Suite",
    description:
      "Project management and supply-chain platform for a $2B construction firm, integrating on-site IoT sensors.",
    tags: ["Vue.js", "Python", "GraphQL", "Kubernetes"],
    accent: "#8B5CF6",
    gradient: "from-[#0A0F1E] via-[#8B5CF6]/20 to-[#F59E0B]/15",
    size: "small",
  },
  {
    id: 4,
    name: "DataSphere Analytics Dashboard",
    description:
      "Real-time business intelligence dashboard processing 50GB daily data streams with predictive analytics.",
    tags: ["React", "D3.js", "Apache Kafka", "ClickHouse"],
    accent: "#F59E0B",
    gradient: "from-[#0A0F1E] via-[#F59E0B]/20 to-[#00D4FF]/15",
    size: "large",
  },
];

const testimonials = [
  {
    quote:
      "Nexus transformed our legacy infrastructure into a modern, cloud-native platform. Delivery was on time, on budget, and the quality exceeded every benchmark we set.",
    name: "Sarah Chen",
    role: "CTO",
    company: "FinTechPro",
    stars: 5,
  },
  {
    quote:
      "The ERP system they built for us reduced operational overhead by 40% in the first quarter. The team's domain knowledge in healthcare workflows is unmatched.",
    name: "Dr. James Okafor",
    role: "Director of Operations",
    company: "NovaMed Group",
    stars: 5,
  },
  {
    quote:
      "Working with Nexus felt like having a senior engineering team embedded inside our company. Their architecture audit identified risks we didn't even know existed.",
    name: "Mark Lewinski",
    role: "VP Engineering",
    company: "DataSphere Inc.",
    stars: 5,
  },
  {
    quote:
      "From first call to go-live was 12 weeks. The UI/UX work alone generated a 28% improvement in user retention. Absolutely world-class output.",
    name: "Priya Mehta",
    role: "Product Lead",
    company: "ClearOps",
    stars: 5,
  },
];

function LogoMarquee() {
  const doubled = [...clientLogos, ...clientLogos];
  return (
    <div className="overflow-hidden py-8 relative">
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #0A0F1E, transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, #0A0F1E, transparent)",
        }}
      />
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((name, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center mx-8 px-6 py-3 rounded-xl text-sm font-bold tracking-wide shrink-0"
            style={{
              background: "rgba(30, 42, 59, 0.5)",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "#64748B",
              minWidth: "120px",
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

function BentoGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto"
    >
      {projects.map((project, i) => {
        const isLarge = project.size === "large";
        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
              isLarge ? "lg:col-span-2" : ""
            }`}
            style={{
              minHeight: isLarge ? "260px" : "220px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            {/* Gradient image placeholder */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
            />

            {/* Noise overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E\")",
              }}
            />

            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#F1F5F9" }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#94A3B8" }}
                >
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${project.accent}15`,
                      color: project.accent,
                      border: `1px solid ${project.accent}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <motion.span
                  className="inline-flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: project.accent }}
                >
                  View Case Study
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </div>
            </div>

            {/* Bottom border glow */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <div className="mt-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-2xl font-bold mb-10"
        style={{ color: "#F1F5F9" }}
      >
        What Our <span className="gradient-text">Clients Say</span>
      </motion.h3>

      <div
        className="relative max-w-3xl mx-auto rounded-2xl p-8 sm:p-10 overflow-hidden"
        style={{
          background: "rgba(30, 42, 59, 0.4)",
          border: "1px solid rgba(0,212,255,0.12)",
        }}
      >
        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="#F59E0B"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <blockquote
              className="text-lg sm:text-xl leading-relaxed mb-6 italic"
              style={{ color: "#CBD5E1" }}
            >
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, #00D4FF20, #10B98120)",
                  border: "1px solid rgba(0,212,255,0.3)",
                  color: "#00D4FF",
                }}
              >
                {current.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "#F1F5F9" }}>
                  {current.name}
                </p>
                <p className="text-xs" style={{ color: "#64748B" }}>
                  {current.role}, {current.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex gap-2 mt-8 justify-center">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? "24px" : "8px",
                height: "8px",
                backgroundColor:
                  i === activeIndex
                    ? "#00D4FF"
                    : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="section-padding"
      style={{ backgroundColor: "#0A0F1E" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              Trust & Case Studies
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
            style={{ color: "#F1F5F9" }}
          >
            Proven at{" "}
            <span className="gradient-text">Scale</span>
          </motion.h2>
        </div>

        {/* Client logo marquee */}
        <LogoMarquee />

        {/* Bento grid */}
        <div className="mt-12">
          <BentoGrid />
        </div>

        {/* Testimonials */}
        <TestimonialCarousel />
      </div>
    </section>
  );
}
