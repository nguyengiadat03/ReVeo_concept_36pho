import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ContentSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  spacing?: "default" | "large";
}

const ContentSection = ({
  title,
  description,
  children,
  className,
  spacing = "default",
}: ContentSectionProps) => {
  return (
    <section
      className={cn(
        "card p-6",
        spacing === "large" && "space-y-6",
        spacing === "default" && "space-y-4",
        className
      )}
    >
      {(title || description) && (
        <div className="mb-6 space-y-1">
          {title && <h2 className="heading-xs">{title}</h2>}
          {description && <p className="text-muted-sm">{description}</p>}
        </div>
      )}
      <div className={spacing === "large" ? "stack-lg" : "stack-md"}>
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
