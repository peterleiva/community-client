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
      <Link href="/threads/new" passHref>
        <Button href="dummy" startIcon={<PlusIcon />} variant="outlined">
          Start Conversation
        </Button>
      </Link>
    </EmptyState>
  );
}
