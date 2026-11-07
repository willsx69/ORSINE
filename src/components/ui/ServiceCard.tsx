import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  onClick: () => void;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  cta,
  onClick,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-5 rounded-2xl border border-navy-deep/10 bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(6,26,58,0.25)]",
        "focus-within:ring-2 focus-within:ring-gold"
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-deep text-gold">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-xl font-bold text-navy-deep leading-tight">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          {description}
        </p>
      </div>
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center gap-2 self-start text-sm font-semibold text-navy transition-colors hover:text-gold-deep"
      >
        {cta}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </article>
  );
}