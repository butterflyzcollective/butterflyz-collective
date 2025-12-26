import Link from "next/link";
import { DJS } from "@/lib";
import type { Episode } from "@/lib/types";

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  const dj = DJS.find((d) => d.slug === episode.featuredDJSlug);

  return (
    <article className="border border-line rounded-2xl overflow-hidden bg-card shadow-sm flex flex-col">
      <Link href={`/episodes/${episode.slug}`}>
        <img
          src={episode.thumbnailUrl}
          alt={episode.title}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-serif text-lg line-clamp-2">
          <Link href={`/episodes/${episode.slug}`} className="text-link">
            {episode.title}
          </Link>
        </h3>

        {dj && (
          <p className="text-xs text-muted">
            Featuring{" "}
            <Link href={`/djs/${dj.slug}`} className="text-link">
              {dj.name}
            </Link>
          </p>
        )}

        {episode.description && (
          <p className="text-sm text-muted line-clamp-3">
            {episode.description}
          </p>
        )}

        <div className="mt-auto pt-2">
          <Link
            href={`/episodes/${episode.slug}`}
            className="text-sm text-gold hover:underline"
          >
            Watch episode →
          </Link>
        </div>
      </div>
    </article>
  );
}
