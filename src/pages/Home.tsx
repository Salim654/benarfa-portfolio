import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { ScrollCamera } from "../components/ScrollCamera";
import {
  artistQuote,
  clients,
  ctaData,
  monographs,
  uiCopy,
} from "../data/mockData";

export function Home() {
  const cameraRef = useRef<HTMLElement>(null);
  const { scrollYProgress: cameraScroll } = useScroll({
    target: cameraRef,
    offset: ["start start", "end end"],
  });
  const introRef = useRef<HTMLElement>(null);

  return (
    <>
      <section
        ref={cameraRef}
        className="relative h-[300vh]"
        aria-label="Interactive camera scroll animation"
      >
        <div className="sticky top-0 h-screen">
          <ScrollCamera scrollProgress={cameraScroll} />
        </div>
      </section>

      <section
        id="selected-monographs"
        ref={introRef}
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-28 lg:px-12"
        aria-labelledby="monographs-title"
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-strong">
              {uiCopy.home.monographsLabel}
            </p>
            <h2
              id="monographs-title"
              className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl"
            >
              {uiCopy.home.monographsTitle}
            </h2>
            <p className="mt-4 max-w-xl text-ink-soft">
              {uiCopy.home.monographsDescription}
            </p>
          </div>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium tracking-wide text-ink underline decoration-hairline underline-offset-8 transition-colors hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {uiCopy.home.viewArchive}
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-12 items-start gap-x-4 gap-y-12 md:gap-x-8">
          {monographs.map((m, i) => (
            <motion.article
              key={m.id}
              className={`col-span-12 ${
                i === 0
                  ? "md:col-span-5"
                  : i === 1
                    ? "md:col-span-4 md:mt-16"
                    : "md:col-span-3 md:mt-4"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="group block focus-within:outline-none">
                <div className="relative aspect-[4/5] overflow-hidden rounded">
                  <img
                    src={m.image}
                    alt={m.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-accent-strong">
                  {m.categoryLabel}
                </p>
                <h3 className="mt-1 font-serif text-2xl leading-snug text-ink transition-colors hover:text-accent-strong">
                  {m.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-ink-soft">
                  {m.optics} . {m.location}
                </p>
                <p className="mt-3 text-sm text-ink-soft">{m.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        className="border-y border-hairline bg-paper py-20 md:py-24"
        aria-label="Artist statement"
      >
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <span className="font-serif text-6xl leading-none text-accent" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className="-mt-6 font-serif text-2xl italic leading-relaxed text-ink md:text-3xl">
            {artistQuote.quote}
          </blockquote>
          <div className="mx-auto mt-8 h-px w-16 bg-hairline" aria-hidden="true" />
          <p className="mt-6 text-sm font-medium tracking-wide text-ink">{artistQuote.name}</p>
          <p className="text-xs uppercase tracking-widest text-ink-soft">{artistQuote.role}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24 lg:px-12" aria-labelledby="clients-title">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-accent-strong">
          {uiCopy.home.clientsLabel}
        </p>
        <ul
          id="clients-title"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
        >
          {clients.map((client) => (
            <li key={client.name} className="text-center">
              <span className="block font-serif text-2xl tracking-wide text-ink">
                {client.name}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-widest text-ink-soft">
                {client.note}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-slate-dark py-20 text-paper md:py-24" aria-labelledby="cta-title">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">{ctaData.label}</p>
          <h2 id="cta-title" className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
            {ctaData.title}
          </h2>
          <p className="mt-4 text-ink-soft">{ctaData.body}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {ctaData.primaryCta}
            </Link>
            <Link
              to="/portfolio"
              className="rounded-full border border-hairline/50 px-7 py-3 text-sm font-medium tracking-wide text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {ctaData.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
