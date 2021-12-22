import Image, { ImageProps } from "next/image";
import React from "react";
import { User } from "types";
import { applyClasses } from "lib";
import styles from "./Thumbnail.module.scss";

export enum ThumbnailSize {
  TINY = 36,
  VERY_SMALL = 48,
  SMALL = 64,
  MEDIUM = 96,
  LARGE = 128,
  XL = 144,
  XXL = 160,
}

interface ThumbnailProps
  extends Omit<ImageProps, "src" | "width" | "height" | "className"> {
  user?: User;
  framed?: boolean;
  size?: ThumbnailSize;
  children?: React.ReactNode;
  className?: string;
}

export default function Thumbnail({
  children,
  user,
  framed = false,
  size = ThumbnailSize.VERY_SMALL,
  className = "",
  ...all
}: ThumbnailProps): JSX.Element {
  let css = applyClasses(className, styles.avatar);

  if (framed) {
    css = applyClasses(css, styles.framed);
  }

  if (children) {
    return (
      <div className={css} style={{ width: size, height: size }}>
        <span>{children}</span>
      </div>
    );
  } else {
    return (
      <Image
        src={user?.avatar ?? `https://picsum.photos/${size}/${size}`}
        width={size}
        height={size}
        alt={`thumbnail of ${user?.username} avatar`}
        className={css}
        {...all}
      />
    );
  }
}
