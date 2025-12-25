import Link from "next/link";
import type { FC } from "react";

const SiteFooter: FC = () => {
  return (
    <footer className="bg-bg border-t border-line py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        <div className="max-w-xs space-y-2">
          <h3 className="font-serif text-lg text-fg mb-2">
            Butterflyz Collective
          </h3>
          <p>
            DJ-led platform spotlighting talent and culture through immersive
            performances and conversations.
          </p>
          <p>info@butterflyzcollective.com</p>
        </div>

        <div className="flex gap-8">
          <div>
            <h4 className="font-serif text-fg mb-2">Explore</h4>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href="/episodes">Episodes</Link>
              </li>
              <li>
                <Link href="/djs">DJs</Link>
              </li>
              <li>
                <Link href="/apply">Apply</Link>
              </li>
              <li>
                <Link href="/sponsors">Sponsors</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

