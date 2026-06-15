import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "ghost" | "soft";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-ink shadow-[0_18px_40px_-18px_rgba(29,120,162,0.9)] hover:bg-brand-bright hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-18px_rgba(63,176,224,0.95)]",
  soft: "bg-surface-2 text-muted ring-1 ring-line hover:ring-brand-bright hover:text-ink hover:-translate-y-0.5",
  ghost:
    "text-muted ring-1 ring-line hover:ring-brand-bright hover:text-ink hover:-translate-y-0.5",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonProps =
  | (CommonProps & { to: string } & Omit<
        React.HTMLAttributes<HTMLAnchorElement>,
        "className"
      >)
  | (CommonProps & { to?: undefined } & AnchorHTMLAttributes<HTMLAnchorElement>);

/**
 * CTA styled as a pill. Pass `to` for internal routes (react-router Link),
 * or `href` for external/anchor links.
 */
export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className ?? ""}`;

  if ("to" in props && props.to) {
    const { to, ...rest } = props;
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a className={cls} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  );
}
