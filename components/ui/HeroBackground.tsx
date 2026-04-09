'use client';

/**
 * Animated hero background — Full-bleed looping video with
 * warm amber overlay and cinematic vignetting.
 */
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Looping hero video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Warm dark amber / gold overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(26,20,10,0.55) 0%, rgba(26,20,10,0.30) 40%, rgba(26,20,10,0.60) 100%)',
        }}
      />

      {/* Warm gold glow — bottom corners for luxury framing */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 0% 100%, rgba(201,168,76,0.10) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(201,168,76,0.08) 0%, transparent 50%)',
        }}
      />

      {/* Top vignette for header readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 30%)',
        }}
      />

      {/* Edge vignette for cinematic framing */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </div>
  );
}
