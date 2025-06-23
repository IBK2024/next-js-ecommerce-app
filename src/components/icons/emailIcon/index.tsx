import type { IconPropsType } from "@/types/icons";

// !Email icon
function EmailIcon({ className, ...props }: IconPropsType) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      height="24"
      width="24"
      color="none"
      stroke="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <title>Email icon</title>
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default EmailIcon;
