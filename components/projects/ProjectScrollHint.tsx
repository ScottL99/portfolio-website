type ProjectScrollHintProps = {
  direction: "up" | "down" | null;
  placement: "top" | "bottom";
};

export default function ProjectScrollHint({
  direction,
  placement,
}: ProjectScrollHintProps) {
  const isVisible =
    (placement === "top" && direction === "up") ||
    (placement === "bottom" && direction === "down");

  if (!isVisible) return <div aria-hidden="true" />;

  return (
    <div className="hidden items-center justify-end text-[12px] font-medium tracking-[-0.012em] text-green sm:flex">
      {placement === "top"
        ? "Scroll up to Home"
        : "Scroll down to Experience"}
    </div>
  );
}
