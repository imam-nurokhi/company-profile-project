"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const solutions = [
  {
    label: "Web App Development",
    description: "Scalable, performant web applications",
    icon: "⚡",
  },
  {
    label: "ERP Solutions",
    description: "End-to-end enterprise resource planning",
    icon: "🏗️",
  },
  {
    label: "System Architecture",
    description: "Future-proof infrastructure design",
    icon: "🔧",
  },
  {
    label: "UI/UX Design",
    description: "Human-centred digital experiences",
    icon: "🎨",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(e.target as Node)
      )
        setSolutionsOpen(false);
      if (
        companyRef.current &&
        !companyRef.current.contains(e.target as Node)
      )
        setCompanyOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -8, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.18, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.97,
      transition: { duration: 0.12, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(10, 15, 30, 0.95)"
          : "rgba(10, 15, 30, 0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(0, 212, 255, 0.15)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 group">
            <span
              className="text-2xl font-black tracking-wider"
              style={{ color: "#F1F5F9" }}
            >
              bisadibicarakan.com
            </span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full mb-3 ml-0.5"
              style={{ backgroundColor: "#00D4FF" }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Solutions Dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                style={{ color: "#94A3B8" }}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                onClick={() => setSolutionsOpen((v) => !v)}
              >
                Solutions
                <motion.svg
                  animate={{ rotate: solutionsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4"
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
                </motion.svg>
              </button>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl p-2 shadow-2xl"
                    style={{
                      background: "rgba(10, 15, 30, 0.98)",
                      border: "1px solid rgba(0, 212, 255, 0.2)",
                      backdropFilter: "blur(20px)",
                    }}
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    {solutions.map((item) => (
                      <a
                        key={item.label}
                        href="#services"
                        className="flex items-start gap-3 px-4 py-3 rounded-xl transition-colors duration-150 group/item"
                        style={{ color: "#94A3B8" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor =
                            "rgba(0, 212, 255, 0.08)";
                          (e.currentTarget as HTMLElement).style.color =
                            "#F1F5F9";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor =
                            "transparent";
                          (e.currentTarget as HTMLElement).style.color =
                            "#94A3B8";
                        }}
                      >
                        <span className="text-xl mt-0.5">{item.icon}</span>
                        <div>
                          <p className="text-sm font-semibold">{item.label}</p>
                          <p
                            className="text-xs mt-0.5"
                            style={{ color: "#64748B" }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative" ref={companyRef}>
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                style={{ color: "#94A3B8" }}
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
                onClick={() => setCompanyOpen((v) => !v)}
              >
                Company
                <motion.svg
                  animate={{ rotate: companyOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4"
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
                </motion.svg>
              </button>
              <AnimatePresence>
                {companyOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 rounded-2xl p-2 shadow-2xl"
                    style={{
                      background: "rgba(10, 15, 30, 0.98)",
                      border: "1px solid rgba(0, 212, 255, 0.2)",
                      backdropFilter: "blur(20px)",
                    }}
                    onMouseEnter={() => setCompanyOpen(true)}
                    onMouseLeave={() => setCompanyOpen(false)}
                  >
                    {["About Us", "Careers", "Blog"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150"
                        style={{ color: "#94A3B8" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor =
                            "rgba(0, 212, 255, 0.08)";
                          (e.currentTarget as HTMLElement).style.color =
                            "#F1F5F9";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor =
                            "transparent";
                          (e.currentTarget as HTMLElement).style.color =
                            "#94A3B8";
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#"
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "#94A3B8" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#F1F5F9")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#94A3B8")
              }
            >
              Resources
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #00D4FF 0%, #10B981 100%)",
                color: "#0A0F1E",
                boxShadow: "0 4px 20px rgba(0, 212, 255, 0.25)",
              }}
            >
              Get a Consultation
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 rounded-full transition-all"
              style={{ backgroundColor: "#F1F5F9" }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 rounded-full"
              style={{ backgroundColor: "#F1F5F9" }}
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
              className="block w-6 h-0.5 rounded-full transition-all"
              style={{ backgroundColor: "#F1F5F9" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden"
            style={{
              borderTop: "1px solid rgba(0, 212, 255, 0.1)",
              backgroundColor: "rgba(10, 15, 30, 0.98)",
            }}
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              <p
                className="text-xs font-semibold uppercase tracking-wider px-4 pb-2"
                style={{ color: "#64748B" }}
              >
                Solutions
              </p>
              {solutions.map((item) => (
                <a
                  key={item.label}
                  href="#services"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium"
                  style={{ color: "#94A3B8" }}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </a>
              ))}
              <div
                className="my-2"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              />
              {["About Us", "Careers", "Blog", "Resources"].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium"
                  style={{ color: "#94A3B8" }}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 rounded-full text-sm font-semibold"
                  style={{
                    background:
                      "linear-gradient(135deg, #00D4FF 0%, #10B981 100%)",
                    color: "#0A0F1E",
                  }}
                >
                  Get a Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
