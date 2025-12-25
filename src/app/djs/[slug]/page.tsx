import Link from "next/link";
import { notFound } from "next/navigation";
import QuoteBuilder from "../../../quote-builder";
import { DJS } from "@/lib/data/djs";

export default function DJProfile({
  params,
}: {
  params: { slug: string };
}) {
  const dj = DJS.find((d) => d.slug === params.slug);
  if (!dj) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Top nav */}
      <div className="mb-6">
        <Link href="/djs" className="text-sm text-muted hover:underline">
          ← Back to DJs
        </Link>
      </div>

      {/* Profile card */}
      <div className="border border-line bg-white rounded-2xl p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={dj.photoUrl}
            alt={dj.name}
            className="w-full md:w-64 h-64 object-cover rounded-xl border border-line"
          />

          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="font-serif text-3xl text-fg">{dj.name}</h1>
                <p className="text-muted mt-1">{dj.city}</p>
              </div>

              {/* rating (optional display) */}
              <div className="text-right">
                <div className="text-sm text-muted">Rating</div>
                <div className="font-semibold text-fg">
                  {dj.rating.toFixed(1)}{" "}
                  <span className="text-muted font-normal">
                    ({dj.reviewCount})
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-muted">{dj.about}</p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {dj.genres?.slice(0, 4).map((g) => (
                <span
                  key={g}
                  className="text-xs px-2 py-1 rounded-full border border-line bg-bg"
                >
                  {g}
                </span>
              ))}
              {dj.eventTypes?.slice(0, 4).map((e) => (
                <span
                  key={e}
                  className="text-xs px-2 py-1 rounded-full border border-line bg-bg"
                >
                  {e}
                </span>
              ))}
            </div>

            {/* What I Play */}
            <h3 className="font-serif text-lg mt-6 mb-2 text-fg">What I Play</h3>
            <ul className="list-disc list-inside text-muted space-y-1">
              {dj.whatIPlay.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {/* Booking shortcuts */}
            <div className="mt-6 border-t border-line pt-4">
              <div className="text-sm text-muted mb-2">Booking</div>
              <div className="flex flex-wrap gap-3 items-center">
                {dj.bookingLink ? (
                  <a
                    href={dj.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 rounded-full bg-gold text-fg font-semibold"
                  >
                    Book this DJ
                  </a>
                ) : (
                  <a
                    href={`mailto:${dj.bookingEmail}?subject=DJ Booking Inquiry - ${encodeURIComponent(
                      dj.name
                    )}`}
                    className="inline-block px-5 py-2 rounded-full bg-gold text-fg font-semibold"
                  >
                    Email to book
                  </a>
                )}

                <div className="text-sm text-muted">
                  Availability: <span className="text-fg">{dj.availabilityLabel || "By request"}</span>
                  {" · "}
                  Lead time:{" "}
                  <span className="text-fg">
                    {dj.leadTimeDays ? `${dj.leadTimeDays} days` : "Flexible"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote / Booking Section */}
      <div className="mt-10">
        <QuoteBuilder djName={dj.name} />
      </div>
    </div>
  );
}
