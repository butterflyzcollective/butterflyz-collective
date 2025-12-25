export const metadata = {
  title: 'Contact – Butterflyz Collective',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl mb-4">Contact Us</h1>
      <p className="text-muted mb-6 max-w-prose">
        We’d love to hear from you! Whether you’re a DJ interested in performing, a brand looking to partner, or a fan with feedback, reach out and we’ll get back to you.
      </p>
      <div className="flex flex-col gap-4">
        <a href="mailto:info@butterflyzcollective.com" className="text-gold text-link">
          info@butterflyzcollective.com
        </a>
        <a href="tel:+14045550123" className="text-gold text-link">
          +1 (404) 555‑0123
        </a>
        <p className="text-muted">Atlanta, GA</p>
      </div>
    </div>
  );
}