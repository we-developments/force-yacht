import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 17.5 3 12l9-3 9 3-1 5.5M5 11.333V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4.333M10 5V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2M2 21c1 1 4 1 6-1 2 2 6 2 8 0 2 2 5 2 6 1"
    />
  </svg>
)
export default SvgComponent
