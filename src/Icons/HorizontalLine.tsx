import { SVGProps } from "react";
const SvgHorizontalLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="horizontalLine_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M512 85.333c23.573 0 42.667 20.118 42.667 44.907v763.52c0 24.79-19.094 44.907-42.667 44.907s-42.667-20.118-42.667-44.907V130.24c0-24.79 19.094-44.907 42.667-44.907z"
      fill="#707070"
    />
  </svg>
);
export default SvgHorizontalLine;
