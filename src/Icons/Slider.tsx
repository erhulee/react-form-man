import { SVGProps } from "react";
const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="slider_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M951.453 476.844H523.672a131.836 131.836 0 0 0-254.18 0H72.547v70.312h196.945a131.836 131.836 0 0 0 254.18 0h427.781z"
      fill="#707070"
    />
  </svg>
);
export default SvgSlider;
