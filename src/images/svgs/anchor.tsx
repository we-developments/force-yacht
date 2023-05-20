import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M11 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm2 2.83a3.001 3.001 0 1 0-2 0V8H8a1 1 0 0 0 0 2h3v10.938a8.006 8.006 0 0 1-6.846-6.37l1.139 1.14a1 1 0 0 0 1.414-1.415l-3-3A1 1 0 0 0 2 12v1c0 5.523 4.477 10 10 10s10-4.477 10-10v-1a1 1 0 0 0-1.707-.707l-3 3a1 1 0 0 0 1.414 1.414l1.14-1.14A8.006 8.006 0 0 1 13 20.939V10h3a1 1 0 1 0 0-2h-3V5.83Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
