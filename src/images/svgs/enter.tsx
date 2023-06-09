import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    data-name="Layer 1"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M23 11a1 1 0 0 0-1 1 10.034 10.034 0 1 1-2.9-7.021A.862.862 0 0 1 19 5h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V1a1 1 0 0 0-2 0v2.065A11.994 11.994 0 1 0 24 12a1 1 0 0 0-1-1ZM12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1Z" />
  </svg>
)
export default SvgComponent