import Link from "next/link";

const quickLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/custom-design", label: "Custom Design" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <h3
              className="text-[18px] tracking-[0.3em] text-gold mb-6 uppercase"
              style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" }}
            >
              THE FINE DIAMOND
            </h3>
            <div className="space-y-3 text-white/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}>
              <p>3726 S. Las Vegas Blvd.</p>
              <p>Las Vegas, NV 89158</p>
              <p className="pt-2">
                <a href="tel:+17862301333" className="hover:text-gold transition-colors duration-500">
                  786-230-1333
                </a>
              </p>
              <p>
                <a href="mailto:matt@thefinediamond.com" className="hover:text-gold transition-colors duration-500">
                  matt@thefinediamond.com
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-8" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
              Navigate
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white/80 text-sm transition-colors duration-500"
                    style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-8" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}>
              Private Inquiries
            </h4>
            <p className="text-white/40 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}>
              Private inquiries by appointment.
            </p>
            <Link
              href="/contact"
              className="btn-gold-shimmer inline-block border border-gold/40 text-gold px-6 py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-gold hover:text-navy transition-all duration-700"
              style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif" }}
            >
              Send Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[10px] tracking-[0.2em]" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}>
            &copy; 2025 The Fine Diamond. All rights reserved.
          </p>
          <p className="text-white/20 text-[10px] tracking-[0.2em]" style={{ fontFamily: "var(--font-body), 'Montserrat', sans-serif", fontWeight: 300 }}>
            Private inquiries by appointment.
          </p>
        </div>
      </div>
    </footer>
  );
}
