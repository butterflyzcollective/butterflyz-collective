export const metadata = {
  title: 'Apply – Butterflyz Collective',
};

export default function ApplyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl mb-4">Apply to be featured</h1>
      <p className="text-muted mb-6">
        We love discovering new DJs and creatives. Fill out the form below and tell us why you should be the next feature on Butterflyz Collective.
      </p>
      <div className="w-full aspect-video">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeSlt3HcZctGNWVn0vJuWzx2JAFDr2GGbC0UG8H0Wx865i3zw/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}