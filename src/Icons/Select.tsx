import { SVGProps } from "react";
const SvgSelect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="select_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M242.048 170.667h535.467c39.381 0 71.338 32 71.338 71.381v535.467c0 39.381-31.957 71.338-71.381 71.338H242.048c-39.381 0-71.381-31.957-71.381-71.381V242.048c0-39.381 32-71.381 71.381-71.381zm0 49.962a21.419 21.419 0 0 0-21.419 21.419v535.467c0 11.776 9.6 21.376 21.419 21.376h535.467a21.419 21.419 0 0 0 21.376-21.419V242.048a21.419 21.419 0 0 0-21.419-21.419H242.048zm92.97 169.558L509.142 576l174.294-185.856a21.333 21.333 0 0 1 32.938 1.28 29.355 29.355 0 0 1-1.152 37.675S524.075 632.832 523.648 633.216a21.077 21.077 0 0 1-30.421-1.365L303.189 429.099a29.397 29.397 0 0 1-.938-37.419 21.333 21.333 0 0 1 32.768-1.493z"
      fill="#707070"
    />
  </svg>
);
export default SvgSelect;
