const CELLS: Array<[number, number]> = [
  [0, 0],
  [37, 0],
  [74, 0],
  [0, 37],
  [74, 37],
  [0, 74],
  [37, 74],
  [74, 74],
];

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {CELLS.map(([x, y]) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width={26}
          height={26}
          rx={7}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-6 w-6 text-primary" />
      <span className="flex items-baseline text-xl tracking-tight text-ink">
        <span className="font-bold">Yello</span>
        <span className="ml-0.5 font-light">Grid</span>
      </span>
    </span>
  );
}
