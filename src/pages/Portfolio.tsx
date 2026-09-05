import { Link } from "react-router-dom";
import { FilterButton } from "../components/ui/FilterButton";
import { ProjectCard } from "../components/ui/ProjectCard";
import {
  ALL_FILTER,
  filterOptions,
  useCategoryFilter,
} from "../hooks/useCategoryFilter";
import {
  images,
  portfolioFooter,
  portfolioHeader,
  projects,
} from "../data/mockData";

export function Portfolio() {
  const { active, setActive, filtered, total } = useCategoryFilter(projects);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-32 md:px-8 md:pt-36 lg:px-12">

        <h1 className="mt-3 font-serif text-5xl leading-tight text-ink md:text-6xl">
          {portfolioHeader.title}
        </h1>
        <p className="mt-4 max-w-2xl text-ink-soft">
          {portfolioHeader.description}
        </p>

 
      </section>

      <div className="sticky top-20 z-30 border-y border-hairline bg-paper/95 py-4 backdrop-blur-sm">
        <div
          className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 md:px-8 lg:px-12"
          role="group"
          aria-label="Filter portfolio by category"
        >
          {filterOptions.map((option) => (
            <FilterButton
              key={option}
              label={option}
              active={active === option}
              onClick={setActive}
            />
          ))}
        </div>
      </div>

      <section
        className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:px-12"
        aria-label="Portfolio gallery"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-ink-soft" aria-live="polite">
          {portfolioFooter.counterLabel} {filtered.length}
          {active !== ALL_FILTER ? ` ${portfolioFooter.of} ${total}` : ""}{" "}
          {portfolioFooter.projectLabel}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-12">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`col-span-1 sm:col-span-1 ${
                project.span ?? "lg:col-span-4"
              } ${project.offset ?? ""}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      <section
        className="bg-slate-dark py-20 text-paper md:py-24"
        aria-labelledby="darkroom-title"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              {portfolioFooter.archive.darkroomLabel}
            </p>
            <h2 id="darkroom-title" className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
              {portfolioFooter.archive.title}
            </h2>
            <p className="mt-4 text-ink-soft">{portfolioFooter.archive.body}</p>

            <dl className="mt-8 space-y-4">
              {portfolioFooter.equipment.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 border-b border-hairline/20 pb-3"
                >
                  <dt className="text-xs uppercase tracking-widest text-ink-soft">
                    {item.label}
                  </dt>
                  <dd className="text-right text-sm text-paper">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative overflow-hidden rounded">
            <img
              src={images.lensOptics}
              alt="Vintage Leica rangefinder camera and brass lens on a dark studio slate"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded bg-primary-container/85 px-3 py-1.5 text-xs uppercase tracking-widest text-paper backdrop-blur-md">
              {portfolioFooter.archive.calibrationRig}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8 lg:px-12">
        <p className="text-sm font-medium tracking-wide text-ink">
          {portfolioFooter.load.showing}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-ink-soft">
          {portfolioFooter.load.note}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="rounded-full bg-ink px-7 py-3 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {portfolioFooter.load.secondary}
          </Link>
        </div>
      </section>
    </>
  );
}
