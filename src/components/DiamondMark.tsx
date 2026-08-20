export function DiamondMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="M15 6h18l9 12-18 24L6 18z" />
      <path d="M6 18h36M15 6l9 12 9-12M24 18v24" opacity="0.55" />
    </svg>
  );
}
