import { SVGProps } from "react";
const SvgRowContainer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="rowContainer_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M970.105 53.895H53.895v538.947h916.21V53.895zM107.79 538.947V107.79h808.422v431.158H107.789zm636.497 431.158 118.03-118.03-38.265-38.264-80.304 80.303V646.737h-53.894v247.377l-80.304-80.303-38.265 38.265 118.03 118.03.539-.54v.54h53.894v-.54zm-409.6 0 118.03-118.03-38.265-38.264-80.304 80.303V646.737h-53.894v247.377l-80.304-80.303-38.265 38.265 118.03 118.03.539-.54v.54h53.894v-.54z"
      fill="#707070"
    />
    <path
      d="M970.105 215.579v53.895H53.895v-53.895zm0 161.684v53.895H53.895v-53.895z"
      fill="#707070"
    />
  </svg>
);
export default SvgRowContainer;
