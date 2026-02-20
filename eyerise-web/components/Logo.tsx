"use client";

import Link from "next/link";
import Image from "next/image";

const LOGO_GRADIENT =
  "bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent";

type LogoVariant = "navbar" | "footer" | "modal" | "inline";

const variantStyles: Record<
  LogoVariant,
  { iconClass: string; textClass: string; iconSize: number; wrapperClass: string }
> = {
  navbar: {
    iconClass: "h-16 sm:h-20 md:h-20 lg:h-24 w-auto object-contain object-bottom drop-shadow-md",
    textClass: "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-sm pb-1",
    iconSize: 240,
    wrapperClass: "flex items-center gap-3 sm:gap-4 items-end",
  },
  footer: {
    iconClass: "h-12 sm:h-14 w-auto object-contain object-bottom",
    textClass: "text-2xl font-bold tracking-tight",
    iconSize: 96,
    wrapperClass: "flex items-center gap-3 items-end",
  },
  modal: {
    iconClass: "w-full h-full object-contain object-center",
    textClass: "text-2xl font-bold tracking-tight drop-shadow-sm",
    iconSize: 160,
    wrapperClass: "flex flex-col items-center gap-3",
  },
  inline: {
    iconClass: "h-8 w-auto object-contain",
    textClass: "text-xl font-bold tracking-tight",
    iconSize: 64,
    wrapperClass: "flex items-center gap-2 items-end",
  },
};

type LogoProps = {
  variant?: LogoVariant;
  href?: string | null;
  showIcon?: boolean;
  className?: string;
};

export default function Logo({
  variant = "navbar",
  href = "/",
  showIcon = true,
  className = "",
}: LogoProps) {
  const styles = variantStyles[variant];
  const iconEl = showIcon ? (
    variant === "modal" ? (
      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden flex-shrink-0">
        <Image
          src="/eyerise-logo-full.png"
          alt="EyeRise"
          width={styles.iconSize}
          height={styles.iconSize}
          className={styles.iconClass}
        />
      </div>
    ) : (
      <Image
        src="/eyerise-logo-full.png"
        alt="EyeRise"
        width={styles.iconSize}
        height={styles.iconSize}
        className={styles.iconClass}
      />
    )
  ) : null;
  const content = (
    <>
      {iconEl}
      <span className={`${styles.textClass} ${LOGO_GRADIENT}`}>EyeRise</span>
    </>
  );

  const wrapperClass = `${styles.wrapperClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={wrapperClass}>
        {content}
      </Link>
    );
  }
  return <div className={wrapperClass}>{content}</div>;
}
