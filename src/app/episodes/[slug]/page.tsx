import { notFound } from 'next/navigation';
import { EPISODES } from '@/lib/data/episodes';
import { DJS } from '@/lib/data/djs';
import Link from 'next/link';

export default function EpisodeDetail({ params }: { params: { slug: string } }) {
  const ep = EPISODES.find((e) => e.slug === params.slug);
  if (!ep) return notFound();
  const dj = DJS.find((d) => d.slug === ep.featuredDJSlug);
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl mb-4">{ep.title}</h1>
      {dj && (
        <p className="text-sm text-muted mb-6">
          Featuring{' '}
          <Link href={`/djs/${dj.slug}`} className="text-gold text-link">
            {dj.name}
          </Link>
        </p>
      )}
      {ep.youtubeUrl ? (
        <div className="mb-6 aspect-video w-full">
          <iframe
            src={ep.youtubeUrl}
            title={ep.title}
            className="w-full h-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img
          src={ep.thumbnailUrl}
          alt={ep.title}
          className="w-full h-auto rounded-2xl mb-6"
        />
      )}
      <p className="text-muted mb-6">{ep.description}</p>
      {ep.tags && (
        <div className="flex flex-wrap gap-2">
          {ep.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-bg border border-line rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}