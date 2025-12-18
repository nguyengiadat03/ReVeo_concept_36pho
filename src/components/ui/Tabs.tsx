import { ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface Tab {
  id: string;
  label: string;
  count?: number;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: "underline" | "pills";
  size?: "sm" | "md";
}

const Tabs = ({
  tabs,
  activeTab,
  onChange,
  variant = "underline",
  size = "md",
}: TabsProps) => {
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
  };

  if (variant === "pills") {
    return (
      <div className="inline-flex items-center gap-2 p-1 bg-gray-100 dark:bg-zinc-900 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && onChange(tab.id)}
            disabled={tab.disabled}
            className={cn(
              "inline-flex items-center gap-2 font-medium whitespace-nowrap rounded-lg transition-all duration-200",
              sizeStyles[size],
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              activeTab === tab.id
                ? "bg-white dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 shadow-sm"
                : "text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200"
            )}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-semibold",
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary"
                    : "bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    );
  }

  // Underline variant (default)
  return (
    <div className="border-b border-gray-200 dark:border-zinc-800">
      <div className="flex gap-1 overflow-x-auto scrollbar-hide" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && onChange(tab.id)}
            disabled={tab.disabled}
            className={cn(
              "inline-flex items-center gap-2 font-medium whitespace-nowrap transition-all duration-200",
              "border-b-2 -mb-px",
              sizeStyles[size],
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200 hover:border-gray-300 dark:hover:border-zinc-700"
            )}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-semibold",
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary"
                    : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
