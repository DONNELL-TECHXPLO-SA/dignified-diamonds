import logo from "@/assets/logo.png";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logo}
      width={839}
      height={479}
      alt="Dignified Diamonds — Confidence Breeds Beauty"
      className={className}
    />
  );
}
