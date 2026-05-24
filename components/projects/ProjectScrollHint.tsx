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
    <div className="hidden items-center justify-end text-[14px] font-medium leading-[1.1] tracking-[-0.012em] text-green md:flex">
      {placement === "top"
        ? "Scroll up to Home"
        : "Scroll down to Experience"}
    </div>
  );
}
