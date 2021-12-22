import Image from "next/image";
import Link from "next/link";
import { FaPlus as PlusIcon } from "react-icons/fa";
import { EmptyState, Button } from "components";
import src from "../../../public/timeline-empty-state.svg";

export default function TimelineEmptyState() {
  return (
    <EmptyState
      image={<Image src={src} alt="no threads in timeline" />}
      tagline="Make history. Lead the way"
      description="Starting a conversation you can share you thoughts and rise a topic for anyone in the community. "
    >
      <Button
        renderContainer={props => (
          <Link href="/threads/new" passHref>
            <a href="passHref" {...props}>
              <PlusIcon />
              Start Conversation
            </a>
          </Link>
        )}
      />
    </EmptyState>
  );
}
