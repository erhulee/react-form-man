import { SVGProps } from "react";
const SvgInput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="input_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M796.459 170.667c31.274 0 56.874 25.6 56.874 56.874V796.46c0 31.274-25.6 56.874-56.874 56.874H227.54c-31.274 0-56.874-25.6-56.874-56.874V227.54c0-31.274 25.6-56.874 56.874-56.874H796.46zm3.797 53.077H223.744v576.512h576.512V223.744zM654.208 398.251h-113.75v284.416a28.459 28.459 0 0 1-56.917 0V398.208H369.792a28.459 28.459 0 1 1 0-56.875h284.416a28.459 28.459 0 1 1 0 56.875z"
      fill="#707070"
    />
  </svg>
);
export default SvgInput;
