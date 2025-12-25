import Link from 'next/link';
import type { DJ } from '@/lib/types';

interface DJCardProps {
  dj: DJ;
}

const DJCard = ({ dj }: DJCardProps) => {
  return (
    <div className="border border-line rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
      <img src={dj.photoUrl} alt={dj.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-serif text-lg font-semibold">
            <Link href={`/djs/${dj.slug}`} className="text-link">
              {dj.name}
            </Link>
          </h3>
          <div className="text-xs text-muted">{dj.city}</div>
        </div>
        <div className="text-sm text-muted line-clamp-2">{dj.tagline}</div>
        <div className="flex flex-wrap gap-1 mt-auto">
          {dj.genres.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="text-xs px-2 py-1 bg-bg border border-line rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
        <div className="mt-3">
          <Link
            href={`/djs/${dj.slug}`}
            className="inline-block text-sm font-medium text-gold text-link"
          >
            View profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DJCard;
