import type { SVGProps } from "react";

const Css = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>CSS3</title>
    <path d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30 5.902 27.201z" fill="#1572b6" />
    <path d="M16 27.858l8.17-2.265 1.922-21.532H16v23.797z" fill="#33a9dc" />
    <path d="M16 13.191h4.09l.282-3.165H16V6.924H23.83l-.074.83-.759 8.538H16v-3.1zm0 8.027l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004v-3.216z" fill="#fff" />
    <path d="M15.989 13.191v3.1h3.449l-.325 3.638-3.124.843v3.216l6.337-1.757.047-.521.598-6.701.062-.818h-7.044zm0-6.267v3.102h7.095l.064-.694.141-1.576.074-.832h-7.374z" fill="#ebebeb" />
  </svg>
);

export { Css };
