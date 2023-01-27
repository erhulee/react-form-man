import { SVGProps } from "react";
const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="time_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="m554.667 537.6 115.2 115.2L640 682.667l-128-128V341.333h42.667V537.6zM533.333 896C332.8 896 170.667 733.867 170.667 533.333S332.8 170.667 533.333 170.667 896 332.8 896 533.333 733.867 896 533.333 896zm0-42.667c174.934 0 320-145.066 320-320s-145.066-320-320-320-320 145.067-320 320 145.067 320 320 320z"
      fill="#707070"
    />
  </svg>
);
export default SvgTime;
