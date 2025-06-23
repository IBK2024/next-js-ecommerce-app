import type { IconPropsType } from "@/types/icons";

// !Menu icon
function MenuIcon({ className, ...props }: IconPropsType) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      color="none"
      height="24"
      width="24"
      stroke="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <title>Menu Icon</title>
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M4 6H20M4 12H20M4 18H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />{" "}
      </g>
    </svg>
  );
}

export default MenuIcon;
