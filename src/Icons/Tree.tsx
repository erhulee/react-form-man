import { SVGProps } from "react";
const SvgTree = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="tree_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M554.667 682.667H640v128H426.667v-128H512v-128H256v128h85.333v128H128v-128h85.333V512H512V384h-85.333V256H640v128h-85.333v128h298.666v170.667h85.334v128H725.333v-128h85.334v-128h-256v128zm42.666-384h-128v42.666h128v-42.666zM298.667 725.333h-128V768h128v-42.667zm597.333 0H768V768h128v-42.667zm-298.667 0h-128V768h128v-42.667z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTree;
