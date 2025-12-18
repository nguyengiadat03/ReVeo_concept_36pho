import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

const PageHeader = ({
  title,
  description,
  actions,
  className,
}: PageHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 lg:mb-8",
        className
      )}
    >
      <div className="min-w-0 flex-1 space-y-1">
        <h1 className="heading-md">{title}</h1>
        {description && (
          <p className="text-muted-sm max-w-2xl">{description}</p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-3 flex-shrink-0">{actions}</div>
      )}
    </div>
  );
};

export default PageHeader;
