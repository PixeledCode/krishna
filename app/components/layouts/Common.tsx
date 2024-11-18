import { CrossIcon } from "@/app/assets/CrossIcon";
import { cn } from "@/app/utils";

export const Heading = ({
  children,
  as,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  const Component = as || "h2";
  return <Component className="uppercase font-semibold">{children}</Component>;
};

export const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="uppercase">{children}</h3>
);

export const HeadingText = ({ children }: { children: React.ReactNode }) => (
  <p className="text-2xl sm:text-4xl font-display leading-display">
    {children}
  </p>
);

export const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xl">{children}</p>
);

export const List = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc pl-5 flex flex-col gap-3">{children}</ul>
);

export const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li>{children}</li>
);

export const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="py-2 px-4 flex items-center gap-2 border border-solid border-primary w-fit rounded-3xl">
    <CrossIcon />
    <span className="text-sm"> {children}</span>
  </span>
);

export const Separator = ({
  className,
  orientation = "horizontal",
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
}) => (
  <div
    className={cn(
      "h-[1px] w-full bg-separator",
      orientation === "vertical" && "w-0.5 h-full min-h-8",
      className
    )}
  />
);

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[rgba(247,75,1,0.6)] p-6 font-semibold border border-primary rounded-2xl">
    {children}
  </div>
);
