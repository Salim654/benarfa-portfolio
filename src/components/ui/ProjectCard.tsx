import clsx from "clsx";
import { Link } from "react-router-dom";
import type { Project } from "../../types";

interface ProjectCardProps {
  readonly project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/portfolio/${project.id}`}
      className={clsx(
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
      )}
      aria-label={`${project.title} — ${project.categories.join(", ")}`}
    >
      <article>
        <div
          className={clsx(
            "relative overflow-hidden rounded",
            project.aspect ?? "aspect-[4/5]",
          )}
        >
          <img
            src={project.coverImage}
            alt={project.coverAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          >
            <span className="inline-flex items-center gap-2 text-sm tracking-wide text-white">
              View Project
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent-strong">
            <span className="font-medium">{project.categories[0]}</span>
            <span className="text-hairline">|</span>
            <span className="text-ink-soft">{project.meta.location}</span>
          </div>
          <h3 className="mt-1 font-serif text-xl leading-snug text-ink transition-colors duration-300 group-hover:text-accent-strong">
            {project.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{project.description}</p>
        </div>
      </article>
    </Link>
  );
}
