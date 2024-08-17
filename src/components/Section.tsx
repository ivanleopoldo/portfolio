import { cn } from "@/utils/cn";

type SectionProps = {
  id: string;
  children: JSX.Element;
  className?: string;
};

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "flex h-screen min-w-full snap-center snap-always flex-col items-center justify-center",
        className,
      )}
    >
      {children}
    </section>
  );
}
