"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledStone = searchParams.get("stone") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    stoneInterest: prefilledStone,
    budgetRange: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (prefilledStone) {
      setFormData((prev) => ({ ...prev, stoneInterest: prefilledStone }));
    }
  }, [prefilledStone]);

  const validate = (field: string, value: string) => {
    const newErrors = { ...errors };
    if (field === "name" && !value.trim()) newErrors.name = "Full name is required.";
    else if (field === "name") delete newErrors.name;

    if (field === "phone" && !value.trim()) newErrors.phone = "Phone number is required.";
    else if (field === "phone") delete newErrors.phone;

    if (field === "email") {
      if (!value.trim()) newErrors.email = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors.email = "Please enter a valid email.";
      else delete newErrors.email;
    }

    if (field === "stoneInterest" && !value) newErrors.stoneInterest = "Please select a stone type.";
    else if (field === "stoneInterest") delete newErrors.stoneInterest;

    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email.";
    if (!formData.stoneInterest) newErrors.stoneInterest = "Please select a stone type.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/matt@thefinediamond.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          _replyto: formData.email,
          stoneInterest: formData.stoneInterest,
          budgetRange: formData.budgetRange || "Not specified",
          message: formData.message || "(none)",
          _subject: `New Inquiry — ${formData.stoneInterest} — ${formData.name}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-[1px] bg-gold mx-auto mb-8" />
        <h3 className="text-charcoal text-3xl mb-4" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}>
          Thank You
        </h3>
        <p className="text-muted" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}>
          Thank you. Matt will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-white border ${
      errors[field] ? "border-red-400" : "border-charcoal/10"
    } text-charcoal text-sm focus:outline-none focus:border-gold transition-colors duration-500`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 text-sm">
          Something went wrong. Please call us at 786-230-1333 or email matt@thefinediamond.com directly.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="c-name" className="block text-[10px] tracking-[0.25em] uppercase text-muted mb-3" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
            Full Name *
          </label>
          <input
            id="c-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onBlur={(e) => validate("name", e.target.value)}
            className={inputClass("name")}
            style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className="block text-[10px] tracking-[0.25em] uppercase text-muted mb-3" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
            Phone *
          </label>
          <input
            id="c-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            onBlur={(e) => validate("phone", e.target.value)}
            className={inputClass("phone")}
            style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
            placeholder="(000) 000-0000"
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="c-email" className="block text-[10px] tracking-[0.25em] uppercase text-muted mb-3" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
            Email *
          </label>
          <input
            id="c-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onBlur={(e) => validate("email", e.target.value)}
            className={inputClass("email")}
            style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="c-stone" className="block text-[10px] tracking-[0.25em] uppercase text-muted mb-3" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
            Stone Interest *
          </label>
          <select
            id="c-stone"
            required
            value={formData.stoneInterest}
            onChange={(e) => { setFormData({ ...formData, stoneInterest: e.target.value }); validate("stoneInterest", e.target.value); }}
            onBlur={(e) => validate("stoneInterest", e.target.value)}
            className={`${inputClass("stoneInterest")} appearance-none`}
            style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
          >
            <option value="">Select a stone type</option>
            <option value="Diamond">Diamond</option>
            <option value="Sapphire">Sapphire</option>
            <option value="Emerald">Emerald</option>
            <option value="Ruby">Ruby</option>
            <option value="Alexandrite">Alexandrite</option>
            <option value="Tanzanite">Tanzanite</option>
            <option value="Other / Not Sure">Other / Not Sure</option>
          </select>
          {errors.stoneInterest && <p className="text-red-400 text-xs mt-1">{errors.stoneInterest}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="c-budget" className="block text-[10px] tracking-[0.25em] uppercase text-muted mb-3" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
          Budget Range
        </label>
        <select
          id="c-budget"
          value={formData.budgetRange}
          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
          className={`${inputClass("budgetRange")} appearance-none`}
          style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
        >
          <option value="">Prefer not to say</option>
          <option value="Under $10,000">Under $10,000</option>
          <option value="$10,000 – $50,000">$10,000 – $50,000</option>
          <option value="$50,000 – $200,000">$50,000 – $200,000</option>
          <option value="$200,000+">$200,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="c-message" className="block text-[10px] tracking-[0.25em] uppercase text-muted mb-3" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
          Message
        </label>
        <textarea
          id="c-message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={inputClass("message")}
          style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
          placeholder="Tell us what you're looking for — we source stones globally and work entirely to your specifications."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-gold text-white px-12 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-gold/90 transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed glow-pulse"
        style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 400 }}
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Inquiry"
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 1.5, delay: 0.3, ease }}
            className="h-[1px] bg-gold mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gold/60 text-[11px] tracking-[0.5em] uppercase mb-6"
            style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="text-charcoal text-5xl md:text-6xl tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
          >
            Begin the <span className="italic text-gold">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-muted text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Whether you&apos;re seeking the perfect stone or ready to commission
            a bespoke piece, we&apos;re here.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-32 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
                className="border border-charcoal/5 p-10 md:p-14"
              >
                <Suspense fallback={<div className="py-16 text-center text-muted">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease }}
                className="space-y-12"
              >
                <div>
                  <span className="text-gold/60 text-[10px] tracking-[0.3em] uppercase block mb-4" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
                    Call
                  </span>
                  <a
                    href="tel:+17862301333"
                    className="text-charcoal text-2xl hover:text-gold transition-colors duration-500"
                    style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
                  >
                    786-230-1333
                  </a>
                </div>

                <div>
                  <span className="text-gold/60 text-[10px] tracking-[0.3em] uppercase block mb-4" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
                    Email
                  </span>
                  <a
                    href="mailto:matt@thefinediamond.com"
                    className="text-muted hover:text-gold transition-colors duration-500"
                    style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
                  >
                    matt@thefinediamond.com
                  </a>
                </div>

                <div>
                  <span className="text-gold/60 text-[10px] tracking-[0.3em] uppercase block mb-4" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
                    Location
                  </span>
                  <p className="text-muted" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}>
                    3726 S. Las Vegas Blvd.<br />
                    Las Vegas, NV 89158
                  </p>
                </div>

                <div className="border border-charcoal/5 p-8">
                  <span className="text-gold/60 text-[10px] tracking-[0.3em] uppercase block mb-4" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
                    Private Viewing
                  </span>
                  <h3 className="text-charcoal text-xl mb-3" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}>
                    Schedule a Visit
                  </h3>
                  <p className="text-muted text-sm mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}>
                    Experience our collection in person. Private consultations
                    available by appointment.
                  </p>
                  <a
                    href="tel:+17862301333"
                    className="btn-gold-shimmer inline-block border border-gold text-gold px-6 py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-all duration-700"
                    style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
                  >
                    Call to Schedule
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
