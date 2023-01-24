import { SVGProps } from "react";
const SvgVerticalLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="verticalLine_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M85.333 512c0-23.573 20.118-42.667 44.907-42.667h763.52c24.79 0 44.907 19.094 44.907 42.667s-20.118 42.667-44.907 42.667H130.24c-24.79 0-44.907-19.094-44.907-42.667z"
      fill="#707070"
    />
  </svg>
);
export default SvgVerticalLine;
