type PaperFoldProps = {
  size?: "sm" | "md";
  className?: string;
};

const sizeClasses = {
  sm: "border-l-[20px] border-t-[20px]",
  md: "border-l-[28px] border-t-[28px]",
};

export default function PaperFold({ size = "sm", className = "" }: PaperFoldProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute right-0 top-0 h-0 w-0 border-l-transparent border-t-[#F4F4F4] ${sizeClasses[size]} ${className}`}
    />
  );
}
