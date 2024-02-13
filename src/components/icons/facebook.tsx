import { IconProps } from "@/types/icon";

const FacebookIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      {...props}
    >
      <path
        d="M9.38216 5.865V8.613H7.36816V11.973H9.38216V21.959H13.5162V11.974H16.2912C16.2912 11.974 16.5512 10.363 16.6772 8.601H13.5332V6.303C13.5332 5.96 13.9832 5.498 14.4292 5.498H16.6832V2H13.6192C9.27916 2 9.38216 5.363 9.38216 5.865V5.865Z"
        fill="#E2E8F0"
      />
    </svg>
  );
};

export default FacebookIcon;
