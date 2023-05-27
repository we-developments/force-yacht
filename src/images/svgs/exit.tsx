import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{"194 restore"}</title>
    <path d="M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1Zm11.812 4.132A12 12 0 0 0 3.578 3.415V1a1 1 0 0 0-2 0v4a2 2 0 0 0 2 2h4a1 1 0 0 0 0-2H4.827a9.99 9.99 0 1 1-2.835 7.878A.982.982 0 0 0 1 12a1.007 1.007 0 0 0-1 1.1 12 12 0 1 0 23.808-2.969Z" />
  </svg>
)
export default SvgComponent
