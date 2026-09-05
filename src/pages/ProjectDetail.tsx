import { Link, useParams } from "react-router-dom";
import clsx from "clsx";
import { detailData, projects, uiCopy } from "../data/mockData";
import type { Project } from "../types";

interface ProjectDetailPageProps {
  readonly project?: Project;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const { id } = useParams<{ id: string }>();

  const current: Project | undefined =
    project ?? projects.find((p) => p.id === id);

  if (!current) {
    return (
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 pt-32 text-center md:px-8">
        <h1 className="font-serif text-4xl text-ink">{uiCopy.detail.notFoundTitle}</h1>
        <p className="mt-4 text-ink-soft">{uiCopy.detail.notFoundBody}</p>
        <Link
          to="/portfolio"
          className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {detailData.backLabel}
        </Link>
      </section>
    );
  }

  const { gallery, specs, meta, coverImage, coverAlt } = current;
  const hero = gallery[0];
  const diptych = gallery.slice(1, 3);
  const triptych = gallery.slice(3, 6);
  const panoramic = gallery[6];
  const index = projects.findIndex((p) => p.id === current.id);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-32 md:px-8 md:pt-36 lg:px-12">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {detailData.backLabel}
        </Link>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-strong">
            {current.categories.join(" . ")} . {detailData.tag}
          </p>
          <span className="text-xs uppercase tracking-widest text-ink-soft">
            {detailData.ref}
          </span>
        </div>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-soft">
          {detailData.volume}
        </p>

        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-5xl leading-tight text-ink md:text-6xl">
              {current.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {current.description}
            </p>
          </div>
          <div className="lg:col-span-4">
            <dl className="space-y-3 border-t border-hairline pt-5 text-sm">
              <div className="flex items-baseline justify-between gap-4 border-b border-hairline pb-3">
                <dt className="text-xs uppercase tracking-widest text-ink-soft">Commission</dt>
                <dd className="text-right text-ink">{detailData.specDetail}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-hairline pb-3">
                <dt className="text-xs uppercase tracking-widest text-ink-soft">Location</dt>
                <dd className="text-right text-ink">{meta.location}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-hairline pb-3">
                <dt className="text-xs uppercase tracking-widest text-ink-soft">Optics</dt>
                <dd className="text-right text-ink">{meta.optics}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mt-12" aria-label="Project hero image">
        <div className="relative overflow-hidden">
          <img
            src={hero?.src ?? coverImage}
            alt={hero?.alt ?? coverAlt}
            className="block h-[70vh] w-full object-cover"
          />
          <div className="absolute left-4 top-4 flex flex-col gap-2 text-xs">
            <span className="w-fit rounded bg-black/70 px-3 py-1 text-paper backdrop-blur-md">
              {hero?.ref ?? uiCopy.detail.frameDefault}
            </span>
            <span className="w-fit rounded bg-black/70 px-3 py-1 text-paper backdrop-blur-md">
              {uiCopy.detail.rawNegative}
            </span>
            <span className="w-fit rounded bg-black/70 px-3 py-1 text-paper backdrop-blur-md">
              {meta.location}
            </span>
          </div>
        </div>
        <div className="border-b border-hairline bg-paper">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-4 md:flex-row md:items-center md:px-8 lg:px-12">
            <p className="text-xs uppercase tracking-widest text-ink-soft">
              {detailData.heroPlatePrefix} . {hero?.caption ?? detailData.heroCaption}
            </p>
            <p className="font-serif text-lg italic text-ink">{detailData.heroCaption}</p>
            <p className="text-xs uppercase tracking-widest text-ink-soft">
              {detailData.heroMeta}
            </p>
          </div>
        </div>
      </section>

      {diptych.length >= 2 && (
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-12" aria-label="Diptych comparison">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-strong">
            Plates 02 . 03
          </p>
          <h2 className="mt-2 font-serif text-3xl text-ink">{detailData.diptychTitle}</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12">
            {diptych.map((plate, i) => (
              <figure
                key={plate.src}
                className={clsx(
                  "group",
                  i === 0 ? "md:col-span-5" : "md:col-span-7 md:-mt-8",
                )}
              >
                <img
                  src={plate.src}
                  alt={plate.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:opacity-95"
                />
                <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2 text-xs uppercase tracking-widest text-ink-soft">
                  <span>{plate.caption}</span>
                  {plate.meta && <span className="text-accent-strong">{plate.meta}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-slate-dark py-20 text-paper md:py-28">
        <span
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-serif text-[18rem] leading-none text-white/5 md:text-[24rem]"
          aria-hidden="true"
        >
          {detailData.watermark}
        </span>
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <span className="font-serif text-6xl leading-none text-accent" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className="-mt-6 font-serif text-2xl italic leading-relaxed md:text-3xl">
            {detailData.pullQuote}
          </blockquote>
          <div className="mx-auto mt-8 h-px w-16 bg-accent/40" aria-hidden="true" />
          <p className="mt-6 text-xs uppercase tracking-widest text-ink-soft">
            {detailData.pullQuoteMeta}
          </p>
        </div>
      </section>

      {triptych.length >= 1 && (
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-12" aria-label="Triptych rhythm">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-strong">
            Plates 04 . 05 . 06
          </p>
          <h2 className="mt-2 font-serif text-3xl text-ink">{detailData.triptychTitle}</h2>
          <p className="mt-1 text-xs uppercase tracking-widest text-ink-soft">
            {detailData.triptychMeta}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {triptych.map((plate, i) => (
              <figure
                key={plate.src}
                className={clsx(i === 1 && "sm:translate-y-4")}
              >
                <img
                  src={plate.src}
                  alt={plate.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
                <figcaption className="mt-3 text-xs uppercase tracking-widest text-ink-soft">
                  {plate.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {panoramic && (
        <section className="px-5 md:px-8 lg:px-12" aria-label="Panoramic shot">
          <figure className="mx-auto max-w-7xl">
            <img
              src={panoramic.src}
              alt={panoramic.alt}
              loading="lazy"
              className="aspect-[2.39/1] w-full object-cover"
            />
            <figcaption className="mx-auto flex max-w-7xl flex-col justify-between gap-2 py-4 md:flex-row md:items-center">
              <p className="text-xs uppercase tracking-widest text-ink-soft">
                {panoramic.caption} . {detailData.panoramicAspect}
              </p>
              <p className="font-serif text-lg italic text-ink">
                {uiCopy.detail.silentTerraces}
              </p>
              <p className="text-xs uppercase tracking-widest text-ink-soft">
                {panoramic.meta ?? uiCopy.detail.overlookingMedina}
              </p>
            </figcaption>
          </figure>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-12" aria-label="Technical statement">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {specs && specs.length > 0 && (
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-strong">
                {detailData.essay.label}
              </p>
              <dl className="mt-6 divide-y divide-hairline border-y border-hairline">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline justify-between gap-4 py-4"
                  >
                    <dt className="text-xs uppercase tracking-widest text-ink-soft">
                      {spec.label}
                    </dt>
                    <dd className="text-right text-sm text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          <div className={clsx(specs && specs.length > 0 ? "lg:col-span-7" : "lg:col-span-12")}>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-strong">
              {uiCopy.detail.curatorialEssayLabel}
            </p>
            <h2 className="mt-2 font-serif text-3xl leading-tight text-ink">
              {detailData.essay.title}
            </h2>
            {detailData.essay.paragraphs.map((para) => (
              <p key={para.slice(0, 24)} className="mt-5 leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
            <div className="mt-8 flex flex-col gap-2 text-sm text-ink-soft">
              <p>{detailData.essay.director}</p>
              <p>{detailData.essay.curator}</p>
            </div>
          </div>
        </div>
      </section>

      <nav className="border-t border-hairline" aria-label="Project navigation">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-hairline md:grid-cols-2 md:divide-x md:divide-y-0">
          <Link
            to={`/portfolio/${prev.id}`}
            className="group flex items-center gap-4 p-6 transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="text-2xl text-ink-soft transition-transform group-hover:-translate-x-1" aria-hidden="true">
              ←
            </span>
            <span>
              <span className="block text-xs uppercase tracking-widest text-ink-soft">
                {uiCopy.detail.previous}
              </span>
              <span className="block font-serif text-xl text-ink group-hover:text-accent-strong">
                {prev.title}
              </span>
            </span>
          </Link>
          <Link
            to={`/portfolio/${next.id}`}
            className="group flex flex-row-reverse items-center gap-4 p-6 text-right transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="text-2xl text-ink-soft transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
            <span>
              <span className="block text-xs uppercase tracking-widest text-ink-soft">
                {uiCopy.detail.next}
              </span>
              <span className="block font-serif text-xl text-ink group-hover:text-accent-strong">
                {next.title}
              </span>
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
