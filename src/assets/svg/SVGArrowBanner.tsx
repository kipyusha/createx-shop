import * as React from "react";
import { SVGProps } from "react";

const SVGArrowBanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.86193 4.52827C10.1223 4.26792 10.5444 4.26792 10.8047 4.52827L13.8047 7.52827C14.0651 7.78862 14.0651 8.21073 13.8047 8.47108L10.8047 11.4711C10.5444 11.7314 10.1223 11.7314 9.86193 11.4711C9.60158 11.2107 9.60158 10.7886 9.86193 10.5283L11.7239 8.66634H2.66667C2.29848 8.66634 2 8.36786 2 7.99967C2 7.63148 2.29848 7.33301 2.66667 7.33301H11.7239L9.86193 5.47108C9.60158 5.21073 9.60158 4.78862 9.86193 4.52827Z"
      fill="#17696A"
    />
  </svg>
);
export default SVGArrowBanner;
