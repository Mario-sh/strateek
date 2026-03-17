import { cn } from "../utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export default function Logo({ className, iconClassName, textClassName }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("w-10 h-10 shrink-0", iconClassName)}
      >
        <defs>
          <mask id="node-cutout">
            <rect width="100" height="100" fill="white" stroke="none" />
            <circle cx="12" cy="60" r="5.5" fill="black" stroke="none" />
            <circle cx="60" cy="80" r="5.5" fill="black" stroke="none" />
          </mask>
        </defs>

        {/* Outer Circle with mask to create gaps for nodes */}
        <circle cx="40" cy="60" r="28" mask="url(#node-cutout)" />

        {/* Inner Circle */}
        <circle cx="40" cy="60" r="11" />

        {/* Nodes */}
        <circle cx="12" cy="60" r="5.5" />
        <circle cx="60" cy="80" r="5.5" />

        {/* Arrow Line */}
        <line x1="47.8" y1="52.2" x2="85" y2="15" />

        {/* Arrow Head */}
        <polyline points="65,15 85,15 85,35" />
      </svg>
      <span className={cn("text-2xl md:text-3xl font-bold tracking-[0.08em] uppercase", textClassName)}>
        STRATEEK
      </span>
    </div>
  );
}
