import { useCallback, useMemo, useState } from "react";
import type { Category, Project } from "../types";
import { categories } from "../data/mockData";

export type Filter = Category | "All Works";

export const ALL_FILTER: Filter = "All Works";

export const filterOptions: Filter[] = ["All Works", ...categories];

interface UseCategoryFilterResult {
  active: Filter;
  setActive: (filter: Filter) => void;
  filtered: Project[];
  total: number;
}

export function useCategoryFilter(
  projects: Project[],
  initial: Filter = ALL_FILTER,
): UseCategoryFilterResult {
  const [active, setActive] = useState<Filter>(initial);

  const filtered = useMemo(() => {
    if (active === ALL_FILTER) return projects;
    return projects.filter((project) =>
      project.categories.includes(active as Category),
    );
  }, [projects, active]);

  const select = useCallback((filter: Filter) => {
    setActive(filter);
  }, []);

  return {
    active,
    setActive: select,
    filtered,
    total: projects.length,
  };
}
