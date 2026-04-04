"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const inquiryTypes = [
  "General Inquiry",
  "Diamond Acquisition",
  "Custom Commission",
  "Existing Order",
  "Private Viewing",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black pt-40 pb-24 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=1920&q=80&auto=format"
          alt="Luxury diamond jewelry"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[200px]" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 1.5, delay: 0.5, ease }}
            className="h-[1px] bg-gold/40 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gold/60 text-[11px] tracking-[0.5em] uppercase mb-6"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease }}
            className="font-heading text-white text-5xl md:text-6xl tracking-tight mb-6"
          >
            Begin the <span className="italic text-gold">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-white/30 text-lg max-w-xl mx-auto font-light"
          >
            Whether you&apos;re seeking the perfect stone or ready to commission
            a bespoke piece, we&apos;re here.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-32 bg-[#060608]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
                className="glass-gold p-10 md:p-14"
              >
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-8" />
                    <h3 className="font-heading text-white text-3xl mb-4">
                      Thank You
                    </h3>
                    <p className="text-white/30 font-light">
                      We&apos;ve received your message and will be in touch
                      within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <span className="text-gold/60 text-[11px] tracking-[0.5em] uppercase block mb-2">
                        Your Inquiry
                      </span>
                      <div className="w-12 h-[1px] bg-gold/30 mb-8" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block text-[10px] tracking-[0.25em] uppercase text-white/20 mb-3">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/[0.08] text-white text-sm focus:outline-none focus:border-gold/40 transition-colors duration-500 placeholder-white/10"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[10px] tracking-[0.25em] uppercase text-white/20 mb-3">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/[0.08] text-white text-sm focus:outline-none focus:border-gold/40 transition-colors duration-500 placeholder-white/10"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="phone" className="block text-[10px] tracking-[0.25em] uppercase text-white/20 mb-3">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/[0.08] text-white text-sm focus:outline-none focus:border-gold/40 transition-colors duration-500 placeholder-white/10"
                          placeholder="(000) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="inquiry" className="block text-[10px] tracking-[0.25em] uppercase text-white/20 mb-3">
                          Inquiry Type *
                        </label>
                        <select
                          id="inquiry"
                          required
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/[0.08] text-white text-sm focus:outline-none focus:border-gold/40 transition-colors duration-500 appearance-none"
                        >
                          <option value="" className="bg-black">Select</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type} className="bg-black">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[10px] tracking-[0.25em] uppercase text-white/20 mb-3">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/[0.08] text-white text-sm focus:outline-none focus:border-gold/40 transition-colors duration-500 resize-none placeholder-white/10"
                        placeholder="Tell us about your vision..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-gold text-black px-12 py-4 text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors duration-500 glow-pulse"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}
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
                {[
                  { label: "Call", content: <a href="tel:+12055551234" className="font-heading text-white text-2xl hover:text-gold transition-colors duration-500">(205) 555-1234</a> },
                  { label: "Email", content: <a href="mailto:info@thefinediamond.com" className="text-white/50 hover:text-gold transition-colors duration-500">info@thefinediamond.com</a> },
                  { label: "Location", content: <p className="text-white/30 font-light">Birmingham, Alabama</p> },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="text-gold/40 text-[10px] tracking-[0.3em] uppercase block mb-4">
                      {item.label}
                    </span>
                    {item.content}
                  </div>
                ))}

                <div>
                  <span className="text-gold/40 text-[10px] tracking-[0.3em] uppercase block mb-4">
                    Hours
                  </span>
                  <div className="space-y-2 text-white/25 text-sm font-light">
                    <div className="flex justify-between">
                      <span>Mon — Fri</span>
                      <span className="text-white/40">10am — 6pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-white/40">By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-white/40">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Private Viewing Card */}
                <div className="glass p-8">
                  <span className="text-gold/40 text-[10px] tracking-[0.3em] uppercase block mb-4">
                    Private Viewing
                  </span>
                  <h3 className="font-heading text-white text-xl mb-3">
                    Schedule a Visit
                  </h3>
                  <p className="text-white/25 text-sm mb-6 font-light leading-relaxed">
                    Experience our collection in person. Private consultations
                    available for serious inquiries.
                  </p>
                  <a
                    href="tel:+12055551234"
                    className="inline-block border border-gold/30 text-gold/70 px-6 py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-700"
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
