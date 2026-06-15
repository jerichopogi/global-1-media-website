type LogoProps = {
  /** Root font-size driving the whole lockup (e.g. "1.5rem"). */
  size?: string;
  className?: string;
};

/**
 * "GlobalOne MEDIA" wordmark. The official color globe SVG forms the "O" in
 * One. Edit /public/logos/icon-main.svg to change the mark.
 */
export function Logo({ size = "1.6rem", className }: LogoProps) {
  return (
    <span
      className={`inline-flex flex-col leading-none ${className ?? ""}`}
      style={{ fontSize: size }}
    >
      <span className="flex items-center font-extrabold tracking-[-0.03em] text-ink">
        Global
        <img
          src="/logos/icon-main.svg"
          alt=""
          aria-hidden
          className="mx-[0.04em] h-[1.18em] w-[1.18em] -translate-y-[0.04em] select-none"
          draggable={false}
        />
        ne
      </span>
      <span className="ml-[0.12em] mt-[0.18em] text-[0.3em] font-bold uppercase tracking-[0.48em] text-muted">
        Media
      </span>
    </span>
  );
}
