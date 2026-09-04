import clsx from "clsx";
import type { Filter } from "../../hooks/useCategoryFilter";

interface FilterButtonProps {
  readonly label: Filter;
  readonly active: boolean;
  readonly onClick: (label: Filter) => void;
}

export function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(label)}
      aria-pressed={active}
      className={clsx(
        "rounded-full px-5 py-2 text-sm tracking-wide transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        active
          ? "bg-ink text-paper"
          : "border border-hairline bg-transparent text-ink-soft hover:border-ink/40 hover:text-ink",
      )}
    >
      {label}
    </button>
  );
}
