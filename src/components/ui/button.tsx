import { cn } from "@/utils/shadcn";
import * as React from "react";

const buttonVariants = {
  default: "",
  variant: {
    default:
      "bg-primary text-gray-10 border-2 border-primary hover:bg-primary/80 hover:border-primary/80 active:bg-transparent active:text-primary",
    plain:
      "bg-gray-10 text-gray-90 border-2 border-gray-10 hover:bg-gray-20 hover:border-gray-20 active:bg-transparent active:text-gray-10",
  },
  size: {
    default: "h-12 px-7 py-2 text-xl font-medium rounded-full",
  },
};

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof (typeof buttonVariants)["variant"];
  size?: keyof (typeof buttonVariants)["size"];
}

export default function Button(props: IButtonProps) {
  const {
    children,
    className,
    variant = "default",
    size = "default",
    ...otherProps
  } = props;

  const defaultClassName = buttonVariants.default;
  const variantClassName = buttonVariants.variant[variant];
  const sizeClassName = buttonVariants.size[size];

  return (
    <button
      className={cn(
        defaultClassName,
        variantClassName,
        sizeClassName,
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
