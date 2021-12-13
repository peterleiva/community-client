import Image from "next/image";
import React from "react";
import { User } from "types";
import styles from "styles/Avatar.module.scss";

type AvatarProps = User;

export default function Avatar({ username }: AvatarProps): JSX.Element {
  return (
    <Image
      src="https://placekitten.com/50/50"
      width="36"
      height="36"
      alt={"profile of " + username}
      className={styles.avatar}
    />
  );
}
