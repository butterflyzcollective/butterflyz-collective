import { notFound } from "next/navigation";
import Link from "next/link";
import { EPISODES } from "@/lib/data/episodes";
import { DJS } from "@/lib/data/djs";

export default function EpisodeDetail({
  params,
}: {
  params: { slug: string };
}) {
  const ep = EPISODES.find((e) => e.slug === params.slug);
  if (!ep) return notFound();

  const dj = DJS.find((d) => d.slug === ep.featuredDJSlug);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="font-serif text-3xl mb-4">{ep.title}</h1>

      {/* Featured DJ */}
      {dj && (
        <p className="text-sm text-muted mb-6">
          Featuring{" "}
          <Link
            href={`/djs/${dj.slug}`}
            className="text-gold hover:underline"
          >
            {dj.name}
          </Link>
        </p>
      )}

      {/* Video or Thumbnail */}
      {ep.youtubeUrl ? (
        <div className="mb-6 aspect-video w-full">
          <iframe
            src={ep.youtubeUrl}
            title={ep.title}
            className="w-full h-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <img
          src={ep.thumbnailUrl}
          alt={ep.title}
          className="w-full h-auto rounded-2xl mb-6"
        />
      )}

      {/* Description */}
      <p className="text-muted mb-6">{ep.description}</p>

      {/* Tags */}
      {ep.tags && (
        <div className="flex flex-wrap gap-2">
          {(ep.tags as string[]).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-bg border border-line rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
