import { ComponentProps, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: "transition-variants flex items-center justify-center gap-2 rounded-lg px-5 font-medium hover:opacity-90",
  variants: {
    variant: {
      primary: "bg-lime-300 text-lime-950",
      secondary: "bg-zinc-800 text-zinc-200",
    },
    size: {
      sm: "h-7 text-sm",
      md: "h-9 text-base",
      lg: "h-11",
    },
    width: {
      content: "w-auto",
      full: "w-full",
    },
    disabled: {
      true: "opacity-80 hover:cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
    width: "content",
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ComponentProps<"button">, ButtonVariants {
  children: ReactNode;
}

export function Button({
  children,
  variant,
  size,
  width,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={button({ variant, size, width, disabled })}>
      {children}
    </button>
  );
}
