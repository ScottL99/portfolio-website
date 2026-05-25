import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const iconButtonClassName =
  "flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-md border border-navy bg-light-navy/75 transition hover:border-green hover:text-portfolio-white";

export default function IconButton({
  children,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={[iconButtonClassName, className].filter(Boolean).join(" ")}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
