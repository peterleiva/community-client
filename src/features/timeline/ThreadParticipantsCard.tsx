import React from "react";
import { User } from "types";
import { Thumbnail, ThumbnailSize } from "components";
import { partition } from "utils";
import styles from "./ThreadParticipantsCard.module.scss";

type ParticipantsProps = {
  participants: User[];
  size?: number;
};

export default function ThreadParticipantsCard({
  participants,
  size = 2,
}: ParticipantsProps) {
  const [users, others] = partition<User>(
    participants,
    ([first]) => first.length < size
  );

  return (
    <div className={styles.stack}>
      {users.map(user => {
        return (
          <Thumbnail
            key={user.id}
            user={user}
            size={ThumbnailSize.TINY}
            framed
          />
        );
      })}

      {others.length > 0 && (
        <Thumbnail size={ThumbnailSize.TINY} framed>
          +{others.length}
        </Thumbnail>
      )}
    </div>
  );
}
