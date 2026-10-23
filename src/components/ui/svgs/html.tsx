import type { SVGProps } from "react";

const Html = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>HTML5</title>
    <path d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30 5.902 27.201z" fill="#e44d26" />
    <path d="M16 27.858l8.17-2.265 1.922-21.532H16v23.797z" fill="#f16529" />
    <path d="M16 12.409h-4.09l-.282-3.165H16V6.142H8.168l.074.83.759 8.538H16v-3.1zm0 8.635l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004v-3.216z" fill="#ebebeb" />
    <path d="M15.989 12.409v3.1h3.806l-.358 4.003-3.448.93v3.216l6.337-1.757.047-.521.726-8.131.076-.84h-7.186zm0-6.267v3.102h7.466l.062-.694.141-1.576.074-.832h-7.743z" fill="#fff" />
  </svg>
);

export { Html };
