export const metadata = {
  title: 'Sponsors – Butterflyz Collective',
};

export default function SponsorsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl mb-4">Partner with Butterflyz Collective</h1>
      <p className="text-muted mb-6 max-w-2xl">
        Join us in spotlighting DJs and creatives shaping culture. Our audience is highly engaged and always ready to discover new music and brands. We offer flexible placement opportunities that feel natural and impactful.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border border-line rounded-2xl p-6 bg-card flex flex-col">
          <h2 className="font-serif text-xl mb-4">Tier 1 – Episode Sponsor</h2>
          <p className="text-muted mb-4 flex-1">
            Your brand featured prominently at the top of an episode with callouts in intro and outro.
          </p>
          <span className="text-gold font-semibold">Placeholder pricing</span>
        </div>
        <div className="border border-line rounded-2xl p-6 bg-card flex flex-col">
          <h2 className="font-serif text-xl mb-4">Tier 2 – Set Sponsor</h2>
          <p className="text-muted mb-4 flex-1">
            Logo placement within DJ set segments and on promotional graphics for the episode.
          </p>
          <span className="text-gold font-semibold">Placeholder pricing</span>
        </div>
        <div className="border border-line rounded-2xl p-6 bg-card flex flex-col">
          <h2 className="font-serif text-xl mb-4">Tier 3 – Brand Spotlight</h2>
          <p className="text-muted mb-4 flex-1">
            Exclusive segment showcasing your product with natural integration during our sessions.
          </p>
          <span className="text-gold font-semibold">Placeholder pricing</span>
        </div>
      </div>
      <h2 className="font-serif text-xl mb-2">Get in Touch</h2>
      <p className="text-muted mb-4">
        Email us to request a sponsorship deck or to discuss custom opportunities.
      </p>
      <a
        href="mailto:info@butterflyzcollective.com?subject=Sponsor%20Inquiry"
        className="inline-block px-6 py-3 bg-gold text-fg font-semibold rounded-full hover:bg-opacity-90 transition"
      >
        Email us
      </a>
    </div>
  );
}