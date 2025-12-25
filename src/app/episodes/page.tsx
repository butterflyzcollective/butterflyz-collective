import { EPISODES } from '@/lib/data/episodes';
import EpisodeCard from '@/components/episode-card';

export default function EpisodesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl mb-6">Episodes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {EPISODES.map((ep) => (
          <EpisodeCard key={ep.slug} episode={ep} />
        ))}
      </div>
    </div>
  );
}