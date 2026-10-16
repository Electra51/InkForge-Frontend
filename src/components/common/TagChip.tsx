interface TagChipProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export default function TagChip({ name, isActive, onClick }: TagChipProps) {
  return (
    <button
      onClick={onClick}
      className={`
        whitespace-nowrap rounded-full px-4 py-2 text-sm md:text-base font-medium
        transition-all duration-200 cursor-pointer
        ${
          isActive
            ? "bg-electric-lime-400 text-shuttle-gray-950"
            : "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-shuttle-gray-100"
        }
      `}
    >
      {name}
    </button>
  );
}
