import { SVGProps } from "react";
const SvgColContainer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="colContainer_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M53.895 53.895v916.21h538.947V53.895H53.895zM538.947 916.21H107.79V107.789h431.158v808.422zm431.158-636.497-118.03-118.03-38.264 38.265 80.303 80.304H646.737v53.894h247.377l-80.303 80.304 38.265 38.265 118.03-118.03-.54-.539h.54v-53.894h-.54zm0 409.6-118.03-118.03-38.264 38.265 80.303 80.304H646.737v53.894h247.377l-80.303 80.304 38.265 38.265 118.03-118.03-.54-.539h.54v-53.894h-.54z"
      fill="#707070"
    />
    <path
      d="M215.579 53.895h53.895v916.21h-53.895zm161.684 0h53.895v916.21h-53.895z"
      fill="#707070"
    />
  </svg>
);
export default SvgColContainer;
