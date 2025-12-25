export default function EarlyAccessPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="mx-auto max-w-5xl px-6 py-6">
        <p className="text-sm uppercase tracking-widest text-white/70">
          The Butterflyz Collective
        </p>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-4">
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          Early Access is Opening Soon.
        </h1>

        <p className="mt-4 max-w-2xl text-white/80">
          Butterflyz is a curated DJ platform focused on bookings, culture,
          education, and experiences. We’re launching in phases early access
          DJs will be first to create profiles, access booking tools, and receive
          opportunities.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#dj-early-access"
            className="inline-flex items-center justify-center rounded-xl bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black"
          >
            Join DJ Early Access
          </a>

          <a
            href="mailto:thebutterflyzcollective@gmail.com"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white"
          >
            Contact
          </a>
        </div>
      </section>

      {/* Who it’s for */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold">For DJs</p>
            <p className="mt-2 text-sm text-white/80">
              Create a professional profile, get booked for aligned
              opportunities, and access workshops, sessions, and
              community-driven experiences.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold">For the Community</p>
            <p className="mt-2 text-sm text-white/80">
              Discover DJs, tap into the culture, and get early access to events,
              pop-ups, and curated experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section
        id="dj-early-access"
        className="mx-auto max-w-5xl px-6 pb-16"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">DJ Early Access</h2>
          <p className="mt-2 text-sm text-white/80">
            Fill out the form below to be considered for early access when DJ
            profiles and booking tools go live.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black">
            <iframe
              title="DJ Early Access Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSceUF5d3gaeTNyoQXi10pukk8Z9-BxoaTrpOzxUy8kPS8bMgA/viewform?usp=sharing&ouid=113638547924463398005"
              className="h-[900px] w-full"
              loading="lazy"
            />
          </div>

          <p className="mt-4 text-xs text-white/60">
            By joining early access, you’re requesting priority access as
            features roll out. Butterflyz is currently in an invite-based launch
            phase.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-5xl px-6 text-sm text-white/60">
          © 2025 Butterflyz Collective · thebutterflyzcollective@gmail.com
        </div>
      </footer>
    </main>
  );
}
