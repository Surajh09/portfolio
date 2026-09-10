import { cn } from "@/lib/cn";

/*
  Decorative dotted-ring glyph (think the Phone (2) back panel). Pure SVG,
  currentColor for the ink, Nothing red for the accent arc. pathLength=360
  makes the dash arrays read in degrees.
*/
export default function GlyphRing({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      aria-hidden="true"
      fill="none"
      className={cn("h-auto w-[240px]", className)}
    >
      <g className="origin-center animate-ring-slow">
        <circle
          cx="120"
          cy="120"
          r="112"
          pathLength="360"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="0.01 4"
        />
      </g>
      <g className="origin-center animate-ring-rev">
        <circle
          cx="120"
          cy="120"
          r="92"
          pathLength="360"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="64 56"
          transform="rotate(-90 120 120)"
        />
        <circle
          cx="120"
          cy="120"
          r="92"
          pathLength="360"
          stroke="#d71921"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="22 338"
          transform="rotate(150 120 120)"
        />
      </g>
      <circle
        cx="120"
        cy="120"
        r="66"
        pathLength="360"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="0.01 7.5"
      />
      <circle
        cx="120"
        cy="120"
        r="40"
        pathLength="360"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="0.01 15"
      />
      <circle cx="120" cy="120" r="6" fill="#d71921" />
    </svg>
  );
}
