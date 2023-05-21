import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 501.333 501.333"
    {...props}
  >
    <path  stroke="#ffffff" fill={props.color} d="M478.933 229.333h-35.2c-4.267-38.4-19.2-73.6-41.6-101.333l8.533-8.533c8.533-8.533 8.533-21.333 0-29.867s-21.333-8.533-29.867 0l-8.533 8.533c-28.8-22.4-62.933-38.4-101.333-41.6V22.4c0-11.733-9.6-21.333-21.333-21.333-11.733 0-21.333 9.6-21.333 21.333v34.133c-38.4 4.267-73.6 19.2-101.333 41.6L118.4 89.6c-8.533-8.533-21.333-8.533-29.867 0s-8.533 21.333 0 29.867L97.067 128c-22.4 28.8-38.4 62.933-41.6 101.333H21.333C9.6 229.333 0 238.933 0 250.667 0 262.4 9.6 272 21.333 272h34.133c4.267 38.4 19.2 72.533 41.6 101.333L89.6 380.8c-8.533 8.533-8.533 21.333 0 29.867 4.267 4.267 9.6 6.4 14.933 6.4s10.667-2.133 14.933-5.333L128 403.2c28.8 22.4 62.933 38.4 101.333 41.6v34.133c0 11.733 9.6 21.333 21.333 21.333 11.733 0 21.333-9.6 21.333-20.267v-35.2c38.4-4.267 73.6-19.2 102.4-42.667l7.467 7.467c4.267 4.267 9.6 6.4 14.933 6.4s10.667-2.133 14.933-5.333c8.533-8.533 8.533-21.333 0-29.867l-8.533-8.533c22.4-28.8 38.4-62.933 41.6-101.333h34.133c11.733 0 22.4-9.6 22.4-21.333.001-11.733-10.666-20.267-22.399-20.267zM125.866 156.8l72.533 72.533h-102.4c3.201-26.666 13.867-51.2 29.867-72.533zm0 186.667C109.866 323.2 99.2 298.667 96 272h101.333l-71.467 71.467zM227.2 403.2c-26.667-3.2-51.2-13.867-71.467-29.867l71.467-71.467V403.2zm0-203.733L155.733 128c20.267-16 44.8-26.667 71.467-29.867v101.334zm42.666-101.334c26.667 3.2 51.2 13.867 71.467 29.867l-71.467 71.467V98.133zm0 305.067V300.8l72.533 72.533c-20.266 16-45.866 26.667-72.533 29.867zM371.2 343.467 299.733 272h101.333c-3.2 26.667-13.866 51.2-29.866 71.467zm-71.467-114.134 71.467-71.467c16 20.267 26.667 44.8 29.867 71.467H299.733z" />
  </svg>
)
export default SvgComponent