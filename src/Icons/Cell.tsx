import { SVGProps } from "react";
const SvgCell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="cell_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M122.368 165.888h778.24c-9.216 0-16.384-7.168-16.384-16.384v713.728c0-9.216 7.168-16.384 16.384-16.384h-778.24c9.216 0 16.384 7.168 16.384 16.384V150.016c0 8.192-6.656 15.872-16.384 15.872zM89.6 850.432a46.98 46.98 0 0 0 47.104 47.104h750.08a46.98 46.98 0 0 0 47.104-47.104V162.304a46.98 46.98 0 0 0-47.104-47.104h-750.08A46.98 46.98 0 0 0 89.6 162.304v688.128z"
      fill="#707070"
    />
    <path
      d="M201.728 410.112V614.4h620.544V410.112H201.728zm572.928 153.6H248.832V459.776h525.824v103.936z"
      fill="#707070"
    />
  </svg>
);
export default SvgCell;