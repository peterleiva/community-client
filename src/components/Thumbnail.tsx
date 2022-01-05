import Image, { ImageProps } from "next/image";
import React from "react";
import { User } from "types";
import { applyClasses, Size, getSize } from "lib";
import styles from "./Thumbnail.module.scss";

interface ThumbnailProps
  extends Omit<ImageProps, "src" | "width" | "height" | "className"> {
  user?: User;
  framed?: boolean;
  size?: Size;
  children?: React.ReactNode;
  className?: string;
}

export default function Thumbnail({
  children,
  user,
  framed = false,
  size,
  className = "",
  ...all
}: ThumbnailProps): JSX.Element {
  let css = applyClasses(className, styles.avatar);

  if (framed) {
    css = applyClasses(css, styles.framed);
  }

  size = getSize(size);

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
