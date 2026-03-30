"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: "⚡",
    title: "Custom Web Application Development",
    description:
      "We craft high-performance, scalable web applications tailored to your business processes. From SPAs to complex multi-tenant platforms, we engineer solutions that grow with you.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    accent: "#00D4FF",
  },
  {
    icon: "🏗️",
    title: "Enterprise ERP Solutions",
    description:
      "Streamline operations with custom ERP systems that unify finance, HR, inventory, and CRM into a single, intelligent platform designed for your industry.",
    tags: ["SAP Integration", "REST APIs", "Microservices", "Docker", "Redis"],
    accent: "#10B981",
  },
  {
    icon: "🔧",
    title: "System Architecture & Audit",
    description:
      "We assess your existing infrastructure and architect resilient, cloud-native solutions. Our audits identify bottlenecks and deliver actionable roadmaps.",
    tags: ["AWS", "GCP", "Kubernetes", "CI/CD", "Security Audit"],
    accent: "#8B5CF6",
  },
  {
    icon: "🎨",
    title: "UI/UX & Digital Product Design",
    description:
      "Human-centred design that converts. We deliver complete design systems, interactive prototypes, and pixel-perfect interfaces that delight users.",
    tags: ["Figma", "Design Systems", "Prototyping", "A/B Testing", "WCAG"],
    accent: "#F59E0B",
  },
];

const workflowSteps = [
  {
    num: "01",
    icon: "🔍",
    title: "Discovery",
    description: "Deep-dive into your goals, constraints, and user needs.",
  },
  {
    num: "02",
    icon: "📐",
    title: "Architecture",
    description: "Design scalable systems and technical blueprints.",
  },
  {
    num: "03",
    icon: "💻",
    title: "Development",
    description: "Agile sprints with weekly demos and continuous delivery.",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Deployment",
    description: "Zero-downtime launches with full monitoring setup.",
  },
  {
    num: "05",
    icon: "🛡️",
    title: "Maintenance",
    description: "24/7 monitoring, updates, and ongoing optimisation.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl p-6 flex flex-col gap-4 cursor-default"
      style={{
        background: "rgba(30, 42, 59, 0.4)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.border = `1px solid ${service.accent}40`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${service.accent}20`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.border =
          "1px solid rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 24px rgba(0,0,0,0.2)";
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{ backgroundColor: `${service.accent}18` }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold leading-snug"
        style={{ color: "#F1F5F9" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "#94A3B8" }}>
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `${service.accent}12`,
              color: service.accent,
              border: `1px solid ${service.accent}25`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Learn More */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        className="flex items-center gap-1 text-sm font-semibold group-hover:opacity-100 opacity-0 transition-opacity duration-200"
        style={{ color: service.accent }}
      >
        Learn More
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          →
        </motion.span>
      </motion.div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
        }}
      />
    </motion.div>
  );
}

function WorkflowTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mt-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-2xl font-bold mb-12"
        style={{ color: "#F1F5F9" }}
      >
        How We{" "}
        <span className="gradient-text">Work</span>
      </motion.h3>

      <div className="relative">
        {/* Animated connecting line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 hidden lg:block"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #00D4FF, #10B981)",
              transformOrigin: "left center",
            }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {workflowSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
              className="flex flex-col items-center text-center gap-3 relative"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl relative z-10"
                style={{
                  background: "rgba(30, 42, 59, 0.8)",
                  border: "2px solid rgba(0, 212, 255, 0.3)",
                  boxShadow: "0 0 20px rgba(0,212,255,0.15)",
                }}
              >
                {step.icon}
              </div>
              <div>
                <span
                  className="text-xs font-bold tracking-widest block mb-1"
                  style={{ color: "#00D4FF" }}
                >
                  {step.num}
                </span>
                <p className="text-sm font-bold" style={{ color: "#F1F5F9" }}>
                  {step.title}
                </p>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: "#64748B" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ backgroundColor: "#0A0F1E" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
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
              Solutions & Services
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
            What We{" "}
            <span className="gradient-text">Build</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#94A3B8" }}
          >
            From concept to deployment, we deliver enterprise software that
            performs at scale and adapts to your evolving business needs.
          </motion.p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* How We Work timeline */}
        <WorkflowTimeline />
      </div>
    </section>
  );
}
