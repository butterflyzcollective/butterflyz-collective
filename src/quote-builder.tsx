"use client";

import { useMemo, useState } from "react";

type AddOn = {
  id: string;
  name: string;
  note?: string;
};

const DEFAULT_EVENT_TYPES = ["Corporate", "Wedding", "Private Event", "Public Event"];
const DEFAULT_GENRES = ["Open Format", "Hip-Hop", "Afrobeats", "R&B", "House", "Top 40"];

const DEFAULT_ADDONS: AddOn[] = [
  { id: "lights", name: "Lighting (add-on)" },
  { id: "fog", name: "Fog machine (add-on)" },
  { id: "tvbooth", name: "TV booth (add-on)" },
];

export default function QuoteBuilder({ djName }: { djName: string }) {
  const [eventType, setEventType] = useState(DEFAULT_EVENT_TYPES[0]);
  const [genres, setGenres] = useState<string[]>([]);
  const [addons, setAddons] = useState<string[]>([]);
  const [details, setDetails] = useState("");

  const summary = useMemo(() => {
    return { djName, eventType, genres, addons, details };
  }, [djName, eventType, genres, addons, details]);

  const mailto = useMemo(() => {
    const subject = `Quote request - ${djName}`;
    const bodyLines = [
      `Hi Butterflyz Collective,`,
      ``,
      `I’d like a quote for: ${djName}`,
      `Event type: ${eventType}`,
      `Genres: ${genres.length ? genres.join(", ") : "Not sure"}`,
      `Add-ons: ${addons.length ? addons.join(", ") : "None"}`,
      ``,
      `Details:`,
      details || "(add details here)",
      ``,
      `— Sent from the Butterflyz Collective site`,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    return `mailto:info@butterflyzcollective.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  }, [djName, eventType, genres, addons, details]);

  function toggle(list: string[], value: string, setList: (v: string[]) => void) {
    if (list.includes(value)) setList(list.filter((x) => x !== value));
    else setList([...list, value]);
  }

  return (
    <div className="border border-line bg-white rounded-2xl p-6">
      <h2 className="font-serif text-2xl text-fg">Request a Quote</h2>
      <p className="text-muted mt-1">Priced on request. Build your request and email it in one click.</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm text-muted">Event type</label>
          <select
            className="mt-2 w-full border border-line rounded-xl px-3 py-2 bg-bg"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          >
            {DEFAULT_EVENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <div className="mt-5">
            <div className="text-sm text-muted mb-2">Genres</div>
            <div className="flex flex-wrap gap-2">
              {DEFAULT_GENRES.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => toggle(genres, g, setGenres)}
                  className={`text-xs px-3 py-2 rounded-full border border-line ${
                    genres.includes(g) ? "bg-gold text-fg" : "bg-bg text-fg"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <div className="text-sm text-muted mb-2">Add-ons</div>
            <div className="flex flex-wrap gap-2">
              {DEFAULT_ADDONS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => toggle(addons, a.name, setAddons)}
                  className={`text-xs px-3 py-2 rounded-full border border-line ${
                    addons.includes(a.name) ? "bg-gold text-fg" : "bg-bg text-fg"
                  }`}
                >
                  {a.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm text-muted">Details</label>
          <textarea
            className="mt-2 w-full min-h-[180px] border border-line rounded-xl px-3 py-2 bg-bg"
            placeholder="Date, location, guest count, vibe, any must-play songs, travel needs, etc."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <a href={mailto} className="mt-4 inline-block px-5 py-2 rounded-full bg-gold text-fg font-semibold">
            Email quote request
          </a>

          <div className="mt-4 text-xs text-muted">
            Preview (saved in email):
            <pre className="mt-2 p-3 rounded-xl border border-line bg-bg overflow-auto whitespace-pre-wrap">
              {JSON.stringify(summary, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
