import { Heart } from "lucide-react";

function SectionHeartDivider() {
  return (
    <div
      className="
        mb-5
        flex
        items-center
        justify-center
        gap-4
      "
    >
      <div
        className="
          h-px
          w-12
          bg-yellow-300/30
        "
      />

      <Heart
        size={16}
        fill="currentColor"
        className="text-pink-300"
      />

      <div
        className="
          h-px
          w-12
          bg-yellow-300/30
        "
      />
    </div>
  );
}

export default SectionHeartDivider;