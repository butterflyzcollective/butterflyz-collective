"use client";

import { useState } from 'react';
import { DJS } from '@/lib';
import DJCard from '@/components/dj-card';

export default function DJsPage() {
  const [query, setQuery] = useState('');
  const [eventType, setEventType] = useState('');
  const [genre, setGenre] = useState('');

  const genres = Array.from(new Set(DJS.flatMap((dj) => dj.genres)));
  const eventTypes = Array.from(new Set(DJS.flatMap((dj) => dj.eventTypes)));

  const filtered = DJS.filter((dj) => {
    const q = query.toLowerCase();
    const matchesQuery = dj.name.toLowerCase().includes(q) || dj.genres.some((g) => g.toLowerCase().includes(q));
    const matchesGenre = genre ? dj.genres.includes(genre) : true;
    const matchesEvent = eventType ? dj.eventTypes.includes(eventType) : true;
    return matchesQuery && matchesGenre && matchesEvent;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl mb-6">Find a DJ</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search DJ, genre, vibe..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 border border-line rounded-full focus:outline-none"
          />
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="px-4 py-3 border border-line rounded-full focus:outline-none"
          >
            <option value="">All genres</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="px-4 py-3 border border-line rounded-full focus:outline-none"
          >
            <option value="">All events</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
      </div>
      {filtered.length === 0 ? (
        <p className="text-muted">No DJs match your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dj) => (
            <DJCard key={dj.slug} dj={dj} />
          ))}
        </div>
      )}
    </div>
  );
}
