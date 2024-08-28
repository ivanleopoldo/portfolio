import { cn } from "@/lib/utils";

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
        "flex min-h-[100dvh] min-w-full snap-center snap-always flex-col items-center justify-center",
        className,
      )}
    >
      {children}
    </section>
  );
}
