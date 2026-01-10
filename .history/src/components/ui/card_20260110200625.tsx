import { cn } from "@/utils/shadcn/cn";
import * as React from "react";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-lg transition-all duration-300 hover:shadow-2xl h-full flex flex-col",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-2 p-4 flex-grow pb-4 transition-all duration-300 group-hover:pb-20",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "text-base sm:text-lg font-semibold leading-tight text-foreground line-clamp-2 min-h-[2.5rem]",
        className
      )}
      {...props}
    />
  );
}

function CardPrice({
  className,
  originalPrice,
  ...props
}: React.ComponentProps<"div"> & { originalPrice?: string }) {
  return (
    <div
      data-slot="card-price"
      className={cn("flex items-baseline gap-2 mt-auto", className)}
    >
      <span
        className="text-xl sm:text-2xl font-bold text-foreground"
        {...props}
      />
      {originalPrice && (
        <span className="text-sm text-muted-foreground line-through">
          {originalPrice}
        </span>
      )}
    </div>
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground line-clamp-2", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-5 pb-5", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 border-t border-border bg-card/95 p-4 backdrop-blur-sm transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
        className
      )}
      {...props}
    />
  );
}

function CardAction({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"button"> & { variant?: "default" | "icon" }) {
  const baseStyles =
    "transition-all duration-200 active:scale-95 font-semibold";
  const variants = {
    default:
      "flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-primary-foreground hover:bg-primary/90",
    icon: "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <button
      data-slot="card-action"
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}

function CardBadge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-badge"
      className={cn(
        "absolute top-4 right-4 z-10 rounded-full bg-destructive px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardPrice,
  CardAction,
  CardDescription,
  CardContent,
  CardBadge,
};
