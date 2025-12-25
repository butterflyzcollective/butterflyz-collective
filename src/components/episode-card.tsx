import Link from 'next/link';
import type { Episode } from '@/lib/types';
import { DJS } from '@/lib/data/djs';

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  const dj = DJS.find((d) => d.slug === episode.featuredDJSlug);
  return (
    <div className="border border-line rounded-2xl overflow-hidden bg-card shadow-sm flex flex-col">
      <img
        src={episode.thumbnailUrl}
        alt={episode.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-serif text-lg font-semibold line-clamp-2">
          <Link href={`/episodes/${episode.slug}`} className="text-link">
            {episode.title}
          </Link>
        </h3>
        {dj && (
          <div className="text-xs text-muted">
            Featuring{' '}
            <Link href={`/djs/${dj.slug}`} className="text-link">
              {dj.name}
            </Link>
          </div>
        )}
        <p className="text-sm text-muted line-clamp-3">{episode.description}</p>
        <div className="mt-auto">
          <Link
            href={`/episodes/${episode.slug}`}
            className="inline-block text-sm font-medium text-gold text-link"
          >
            Watch episode
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
