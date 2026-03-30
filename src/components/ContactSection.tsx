"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  projectInterest: z.enum(
    [
      "Web Application",
      "ERP Implementation",
      "System Architecture",
      "UI/UX Design",
      "IT Audit",
      "Other",
    ],
    { error: "Please select a project type" }
  ),
  estimatedBudget: z.enum(
    ["Under $10k", "$10k-$50k", "$50k-$100k", "$100k+"],
    { error: "Please select a budget range" }
  ),
  description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const valueProps = [
  {
    icon: "⚡",
    title: "Fast Turnaround",
    description: "MVP in 6–12 weeks with agile delivery",
  },
  {
    icon: "🔒",
    title: "NDA Protected",
    description: "Your IP stays yours, always",
  },
  {
    icon: "🏆",
    title: "Dedicated Team",
    description: "Senior engineers assigned to your project",
  },
  {
    icon: "📊",
    title: "Transparent Pricing",
    description: "No surprises — fixed or T&M contracts",
  },
];

function FloatingInput({
  id,
  label,
  error,
  type = "text",
  ...props
}: {
  id: string;
  label: string;
  error?: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);
  const hasValue = Boolean(props.value || props.defaultValue);

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        className="peer w-full rounded-xl px-4 pt-6 pb-2 text-sm outline-none transition-all duration-200"
        style={{
          backgroundColor: "rgba(30, 42, 59, 0.5)",
          border: `1px solid ${
            error
              ? "#EF4444"
              : focused
              ? "rgba(0,212,255,0.5)"
              : "rgba(255,255,255,0.08)"
          }`,
          color: "#F1F5F9",
          boxShadow: focused ? "0 0 0 3px rgba(0,212,255,0.08)" : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-4 transition-all duration-200 pointer-events-none"
        style={{
          top: focused || hasValue ? "8px" : "50%",
          transform: focused || hasValue ? "translateY(0) scale(0.8)" : "translateY(-50%)",
          transformOrigin: "left",
          fontSize: focused || hasValue ? "10px" : "14px",
          color:
            error ? "#EF4444" : focused ? "#00D4FF" : "#64748B",
          fontWeight: "600",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </label>
      {error && (
        <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>
          {error}
        </p>
      )}
    </div>
  );
}

function FloatingSelect({
  id,
  label,
  error,
  children,
  ...props
}: {
  id: string;
  label: string;
  error?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  const [focused, setFocused] = useState(false);
  const hasValue = Boolean(props.value && props.value !== "");

  return (
    <div className="relative">
      <select
        id={id}
        className="peer w-full rounded-xl px-4 pt-6 pb-2 text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
        style={{
          backgroundColor: "rgba(30, 42, 59, 0.5)",
          border: `1px solid ${
            error
              ? "#EF4444"
              : focused
              ? "rgba(0,212,255,0.5)"
              : "rgba(255,255,255,0.08)"
          }`,
          color: hasValue ? "#F1F5F9" : "#64748B",
          boxShadow: focused ? "0 0 0 3px rgba(0,212,255,0.08)" : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      >
        {children}
      </select>
      <label
        htmlFor={id}
        className="absolute left-4 transition-all duration-200 pointer-events-none"
        style={{
          top: focused || hasValue ? "8px" : "50%",
          transform: focused || hasValue ? "translateY(0) scale(0.8)" : "translateY(-50%)",
          transformOrigin: "left",
          fontSize: focused || hasValue ? "10px" : "14px",
          color:
            error ? "#EF4444" : focused ? "#00D4FF" : "#64748B",
          fontWeight: "600",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </label>
      {/* Chevron icon */}
      <svg
        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
        style={{ color: "#64748B" }}
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
      {error && (
        <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 gap-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #00D4FF, #10B981)",
          boxShadow: "0 0 40px rgba(16,185,129,0.4)",
        }}
      >
        <motion.svg
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path d="M5 13l4 4L19 7" />
        </motion.svg>
      </motion.div>

      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2" style={{ color: "#F1F5F9" }}>
          Proposal Request Sent!
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
          Thank you for reaching out. A member of our team will review your
          requirements and get back to you within 1 business day.
        </p>
      </div>
    </motion.div>
  );
}

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      projectInterest: undefined,
      estimatedBudget: undefined,
    },
  });

  const watchedValues = watch();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#080D1A" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00D4FF, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #10B981, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Get In Touch
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
            Request a{" "}
            <span className="gradient-text">Proposal</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-xl mx-auto"
            style={{ color: "#94A3B8" }}
          >
            Tell us about your project and we&apos;ll put together a custom
            proposal within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Value propositions */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#F1F5F9" }}>
                Why partner with bisadibicarakan.com?
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                We don&apos;t just write code — we become a strategic extension
                of your team. Every engagement starts with deep discovery to
                ensure we&apos;re solving the right problems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valueProps.map((vp, i) => (
                <motion.div
                  key={vp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="p-4 rounded-xl flex gap-3"
                  style={{
                    background: "rgba(30, 42, 59, 0.4)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="text-2xl shrink-0">{vp.icon}</span>
                  <div>
                    <p className="text-sm font-bold" style={{ color: "#F1F5F9" }}>
                      {vp.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>
                      {vp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              {[
                { icon: "📧", text: "hello@nexus.tech" },
                { icon: "📞", text: "+1 (555) 000-0000" },
                { icon: "📍", text: "San Francisco, CA • Remote-first" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "#94A3B8" }}
                >
                  <span>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "rgba(30, 42, 59, 0.35)",
              border: "1px solid rgba(0,212,255,0.1)",
              backdropFilter: "blur(12px)",
            }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <SuccessState key="success" />
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  <FloatingInput
                    id="fullName"
                    label="Full Name"
                    error={errors.fullName?.message}
                    value={watchedValues.fullName ?? ""}
                    {...register("fullName")}
                  />
                  <FloatingInput
                    id="email"
                    label="Email Address"
                    type="email"
                    error={errors.email?.message}
                    value={watchedValues.email ?? ""}
                    {...register("email")}
                  />
                  <FloatingInput
                    id="company"
                    label="Company Name"
                    error={errors.company?.message}
                    value={watchedValues.company ?? ""}
                    {...register("company")}
                  />

                  <FloatingSelect
                    id="projectInterest"
                    label="Project Interest"
                    error={errors.projectInterest?.message}
                    value={watchedValues.projectInterest ?? ""}
                    {...register("projectInterest")}
                  >
                    <option value="" disabled hidden>
                      Select...
                    </option>
                    {[
                      "Web Application",
                      "ERP Implementation",
                      "System Architecture",
                      "UI/UX Design",
                      "IT Audit",
                      "Other",
                    ].map((opt) => (
                      <option
                        key={opt}
                        value={opt}
                        style={{ backgroundColor: "#1E2A3B" }}
                      >
                        {opt}
                      </option>
                    ))}
                  </FloatingSelect>

                  <FloatingSelect
                    id="estimatedBudget"
                    label="Estimated Budget"
                    error={errors.estimatedBudget?.message}
                    value={watchedValues.estimatedBudget ?? ""}
                    {...register("estimatedBudget")}
                  >
                    <option value="" disabled hidden>
                      Select...
                    </option>
                    {["Under $10k", "$10k-$50k", "$50k-$100k", "$100k+"].map(
                      (opt) => (
                        <option
                          key={opt}
                          value={opt}
                          style={{ backgroundColor: "#1E2A3B" }}
                        >
                          {opt}
                        </option>
                      )
                    )}
                  </FloatingSelect>

                  {/* Textarea */}
                  <div className="relative">
                    <textarea
                      id="description"
                      rows={4}
                      placeholder=" "
                      className="w-full rounded-xl px-4 pt-6 pb-2 text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        backgroundColor: "rgba(30, 42, 59, 0.5)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#F1F5F9",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.border =
                          "1px solid rgba(0,212,255,0.5)";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 3px rgba(0,212,255,0.08)";
                      }}
                      {...(() => {
                        const { onBlur: regOnBlur, ...rest } = register("description");
                        return {
                          ...rest,
                          onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => {
                            e.currentTarget.style.border =
                              "1px solid rgba(255,255,255,0.08)";
                            e.currentTarget.style.boxShadow = "none";
                            return regOnBlur(e);
                          },
                        };
                      })()}
                    />
                    <label
                      htmlFor="description"
                      className="absolute left-4 top-3 text-xs font-semibold uppercase tracking-wider pointer-events-none"
                      style={{ color: "#64748B" }}
                    >
                      Project Description (optional)
                    </label>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className="w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 mt-2"
                    style={{
                      background: isSubmitting
                        ? "rgba(0,212,255,0.4)"
                        : "linear-gradient(135deg, #00D4FF 0%, #10B981 100%)",
                      color: "#0A0F1E",
                      boxShadow: isSubmitting
                        ? "none"
                        : "0 4px 20px rgba(0,212,255,0.25)",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.8,
                            ease: "linear",
                          }}
                          className="inline-block w-4 h-4 border-2 border-t-transparent rounded-full"
                          style={{ borderColor: "#0A0F1E" }}
                        />
                        Sending...
                      </>
                    ) : (
                      "Submit Proposal Request →"
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
