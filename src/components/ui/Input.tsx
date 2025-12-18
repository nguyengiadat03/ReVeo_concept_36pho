import { InputHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const hasError = !!error;

    return (
      <div className="w-full space-y-2">
        {/* Label */}
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 dark:text-zinc-300"
          >
            {label}
            {props.required && (
              <span className="text-red-500 ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500 pointer-events-none">
              {leftIcon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            className={cn(
              // Base styles
              "w-full px-4 py-3 rounded-lg",
              "bg-white dark:bg-zinc-900",
              "text-gray-900 dark:text-zinc-100",
              "placeholder:text-gray-400 dark:placeholder:text-zinc-500",
              "transition-all duration-200 ease-smooth",

              // Border & Focus
              "border",
              hasError
                ? "border-red-500 dark:border-red-600"
                : "border-gray-200 dark:border-zinc-800",
              "hover:border-gray-300 dark:hover:border-zinc-700",
              "focus:outline-none focus:ring-2 focus:ring-offset-0",
              hasError
                ? "focus:ring-red-500/20 focus:border-red-500 hover:border-red-500"
                : "focus:ring-primary/20 focus:border-primary",

              // Disabled
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-zinc-900/50 disabled:hover:border-gray-200 dark:disabled:hover:border-zinc-800",

              // Icon padding
              leftIcon ? "pl-10" : "",
              rightIcon ? "pr-10" : "",

              className
            )}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              error
                ? `${props.id}-error`
                : helperText
                ? `${props.id}-helper`
                : undefined
            }
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Helper Text or Error */}
        {error ? (
          <p
            id={`${props.id}-error`}
            className="text-sm text-red-600 dark:text-red-500 flex items-start gap-1"
            role="alert"
          >
            <span className="mt-0.5">⚠</span>
            <span>{error}</span>
          </p>
        ) : helperText ? (
          <p
            id={`${props.id}-helper`}
            className="text-sm text-gray-500 dark:text-zinc-500"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
