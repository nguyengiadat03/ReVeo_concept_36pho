import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles - consistent across all variants
    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2",
      "font-semibold",
      "transition-all duration-200 ease-smooth",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      "active:scale-[0.97] active:transition-transform active:duration-75"
    );

    // Variant styles
    const variantStyles = {
      primary: cn(
        "bg-gradient-to-r from-primary to-orange-600",
        "text-white shadow-md",
        "hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5",
        "focus-visible:ring-primary/50",
        "active:shadow-md active:translate-y-0"
      ),
      secondary: cn(
        "bg-white dark:bg-zinc-900",
        "text-gray-900 dark:text-zinc-100",
        "border border-gray-200 dark:border-zinc-800 shadow-sm",
        "hover:bg-gray-50 dark:hover:bg-zinc-800",
        "hover:border-gray-300 dark:hover:border-zinc-700",
        "hover:shadow-md",
        "focus-visible:ring-gray-300 dark:focus-visible:ring-zinc-700",
        "active:bg-gray-100 dark:active:bg-zinc-800"
      ),
      ghost: cn(
        "bg-transparent",
        "text-gray-700 dark:text-zinc-300",
        "hover:bg-gray-100 dark:hover:bg-zinc-800",
        "focus-visible:ring-gray-300 dark:focus-visible:ring-zinc-700",
        "active:bg-gray-200 dark:active:bg-zinc-700"
      ),
      danger: cn(
        "bg-red-600 dark:bg-red-700",
        "text-white shadow-md",
        "hover:bg-red-700 dark:hover:bg-red-800",
        "hover:shadow-lg hover:shadow-red-600/30",
        "focus-visible:ring-red-500/50",
        "active:bg-red-800 dark:active:bg-red-900"
      ),
    };

    // Size styles
    const sizeStyles = {
      sm: "px-4 py-2 text-sm rounded-lg",
      md: "px-6 py-3 text-base rounded-xl",
      lg: "px-8 py-4 text-lg rounded-xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          leftIcon && <span className="flex-shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="flex-shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
