import type { IconType } from "react-icons";
import clsx from "clsx";
import React, { useCallback } from "react";

type ButtonProps = JSX.IntrinsicElements["button"] &
  JSX.IntrinsicElements["a"] & {
    /**
     * Icon placed at the start of the button
     */
    startIcon?: ReturnType<IconType>;
    /**
     * Icon placed at the end of the button
     */
    endIcon?: ReturnType<IconType>;
    /**
     * Button's variant change its style, for example solid, outlined, ...
     */
    variant?: keyof ReturnType<typeof variants>;
    /**
     * scale button using one of predefined sizes
     */
    size?: keyof typeof sizing;
    disabled?: boolean;
    /**
     * indicates whether is rendered as a block, meaning take full width
     */
    block?: boolean;
  };

const isAnchor = (
  props: JSX.IntrinsicElements["button"] | JSX.IntrinsicElements["a"]
): props is JSX.IntrinsicElements["a"] => "href" in props;

/**
 * Polymorphic support for Next.js Link component and html button element
 */
export default function Button({
  variant = "solid",
  startIcon,
  endIcon,
  size,
  children,
  className,
  block,
  disabled,
  ...props
}: ButtonProps): JSX.Element {
  className = clsx(
    className,
    "cursor-pointer rounded-lg transition duration-100 inline-block",
    { "cursor-not-allowed": disabled },
    { "w-full": block },
    sizing[size ?? "base"],
    variants(disabled)[variant]
  );

  const Content = useCallback(
    () => (
      <span className="flex flex-row flex-nowrap items-center justify-center gap-2">
        {startIcon}
        {children}
        {endIcon}
      </span>
    ),
    [startIcon, endIcon, children]
  );

  if (isAnchor(props)) {
    return (
      <a className={className} {...props}>
        <Content />
      </a>
    );
  } else {
    return (
      <button className={className} {...props} disabled>
        <Content />
      </button>
    );
  }
}

const sizing = {
  sm: "text-sm py-2 px-4",
  base: "text-base py-3 px-5",
  lg: "text-lg py-4 px-6",
  xl: "text-xl py-5 px-7",
  "2xl": "text-2xl py-6 px-8",
  "3xl": "text-3xl py-7 px-9",
};

const variants = (disabled = false) => ({
  solid: [
    "border-2 border-solid bg-slate-700 text-slate-50",
    { "bg-slate-300 text-gray-400": disabled },
  ],
  outlined: [
    "border border-solid border-slate-700 text-slate-700",
    {
      "border-slate-300 text-gray-400": disabled,
    },
  ],
});
