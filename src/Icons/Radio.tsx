import { SVGProps } from "react";
const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="radio_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M512 874.667a362.667 362.667 0 1 1 0-725.334 362.667 362.667 0 0 1 0 725.334zm-.597-48.939a314.325 314.325 0 1 0 0-628.65 314.325 314.325 0 0 0 0 628.65zm0-72.533a241.792 241.792 0 1 1 0-483.584 241.792 241.792 0 0 1 0 483.584zm0-48.384a193.408 193.408 0 1 0 0-386.816 193.408 193.408 0 0 0 0 386.816z"
      fill="#707070"
    />
  </svg>
);
export default SvgRadio;
