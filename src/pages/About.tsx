import { Link } from "react-router-dom";
import { aboutData } from "../data/mockData";

export function About() {
  const { metaRibbon, portrait, bio, philosophy, exhibitions, pressClients, cta, exhibitionsLabel, pressClientsLabel } = aboutData;
  return (
    <>
      <div className="border-b border-hairline bg-paper">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4 text-xs uppercase tracking-widest text-ink-soft md:px-8 lg:px-12">
          <span>{metaRibbon.volume}</span>
          <span className="hidden sm:inline">{metaRibbon.ref}</span>
          <span className="hidden md:inline">{metaRibbon.optics}</span>
          <span className="text-accent-strong">{metaRibbon.location}</span>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 pt-12 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded">
              <img
                src={portrait.image}
                alt={portrait.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute left-4 top-4 rounded bg-primary-container/85 px-3 py-1.5 text-xs text-paper backdrop-blur-md">
                {portrait.frame} . {portrait.stock}
              </div>
            </div>
            <figcaption className="mt-4">
              <p className="font-serif text-xl text-ink">{portrait.name}</p>
              <p className="mt-1 text-sm text-ink-soft">{portrait.role}</p>
              <ul className="mt-4 space-y-1 text-xs uppercase tracking-widest text-ink-soft">
                {portrait.locations.map((loc) => (
                  <li key={loc}>{loc}</li>
                ))}
              </ul>
            </figcaption>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-accent-strong">
              {bio.label}
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {bio.title}
            </h1>
            {bio.paragraphs.map((para) => (
              <p key={para.slice(0, 24)} className="mt-6 leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}

            <blockquote className="mt-8 border-l-2 border-accent pl-5 font-serif text-xl italic leading-relaxed text-ink">
              &ldquo;{bio.quote}&rdquo;
              <footer className="mt-2 text-xs font-sans not-italic uppercase tracking-widest text-ink-soft">
                {bio.quoteMeta}
              </footer>
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-2">
              {bio.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-hairline px-4 py-1.5 text-xs uppercase tracking-wider text-ink-soft"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 bg-slate-dark py-20 text-paper md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            {philosophy.label}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
            {philosophy.title}
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {philosophy.pillars.map((pillar) => (
              <article
                key={pillar.index}
                className="rounded border border-hairline/20 p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="font-serif text-4xl text-accent">{pillar.index}</span>
                <h3 className="mt-4 font-serif text-2xl text-paper">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-ink-soft">
            {philosophy.optics.map((optic) => (
              <span key={optic} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {optic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <p className="text-xs uppercase tracking-[0.2em] text-accent-strong">
          {exhibitionsLabel}
        </p>
        <ul className="mt-8 divide-y divide-hairline">
          {exhibitions.map((exhibition) => (
            <li key={exhibition.title} className="flex flex-col gap-1 py-5 md:flex-row md:items-baseline md:gap-8">
              <span className="w-16 shrink-0 font-serif text-2xl text-accent-strong">
                {exhibition.year}
              </span>
              <div>
                <h3 className="font-serif text-xl text-ink">{exhibition.title}</h3>
                <p className="text-sm text-ink-soft">{exhibition.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-strong">
            {pressClientsLabel}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded border border-hairline bg-hairline sm:grid-cols-4">
            {pressClients.map((client) => (
              <div key={client} className="flex items-center justify-center bg-paper p-6 text-center">
                <span className="font-serif text-lg text-ink">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="font-serif text-3xl leading-tight md:text-4xl">{cta.title}</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {cta.primary}
            </Link>
            <Link
              to="/portfolio"
              className="rounded-full border border-hairline/50 px-7 py-3 text-sm font-medium tracking-wide text-paper transition-colors hover:border-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {cta.secondary}
            </Link>
          </div>
          <div className="mt-10 space-y-2 text-xs uppercase tracking-widest text-ink-soft">
            <p>{cta.email}</p>
            <p>{cta.agent}</p>
            <p className="text-accent">{cta.dispatch}</p>
          </div>
        </div>
      </section>
    </>
  );
}
