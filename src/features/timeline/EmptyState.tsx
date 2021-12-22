import { EmptyState, Button } from "components";
import Image from "next/image";
import src from "../../../public/timeline-empty-state.svg";
import { FaPlus as PlusIcon } from "react-icons/fa";

export default function TimelineEmptyState() {
  return (
    <EmptyState
      image={<Image src={src} alt="no threads in timeline" />}
      tagline="Make history. Lead the way"
      description="Starting a conversation you can share you thoughts and rise a topic for anyone in the community. "
    >
      <Button Icon={PlusIcon}>Start an conversation</Button>
    </EmptyState>
  );
}
