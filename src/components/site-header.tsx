import Link from 'next/link';
import { FC } from 'react';

const SiteHeader: FC = () => {
  return (
    <header className="bg-bg border-b border-line sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-serif font-bold">
          Butterflyz Collective
        </Link>
        <nav className="hidden md:flex gap-6 font-sans text-sm">
          <Link href="/episodes">Episodes</Link>
          <Link href="/djs">DJs</Link>
          <Link href="/apply">Apply</Link>
          <Link href="/sponsors">Sponsors</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/butterflyzcollective?igsh=bWVpeTVqNnFxNGx1&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            {/* IG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gold"
            >
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zM18 7.1a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0zM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm0 1.5a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5z" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@butterflyzcollective?_r=1&_t=ZP-92Ct3U8opWZ" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
            {/* TikTok icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gold"
            >
              <path d="M16.02 2c.24 1.78 1.71 3.19 3.5 3.37v3.35c-1.28-.01-2.54-.29-3.7-.81v6.44c0 3.6-2.92 6.55-6.51 6.65a6.63 6.63 0 0 1-6.73-6.63 6.63 6.63 0 0 1 6.63-6.63c.24 0 .47.01.7.04v3.36a3.33 3.33 0 0 0-.7-.08 3.32 3.32 0 0 0-3.32 3.32c0 1.8 1.47 3.27 3.27 3.27 1.8 0 3.27-1.47 3.27-3.27V2h3.89z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;