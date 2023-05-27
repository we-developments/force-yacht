import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={20}
    height={20}
    viewBox="0 0 1000 1000"
    {...props}
  >
    <path d="m390.15 90.09-4.94 4.74V215.59H174.33l-4.15 4.55c-4.35 4.55-4.35 4.94-4.35 94.87v90.32H19.37l-4.74 4.94c-6.72 6.52-6.13 12.65 1.78 23.92 43.68 63.44 178.08 249.23 181.44 251.21 3.56 1.98 40.71 2.37 170.76 2.57h166.22l1.18 27.28c1.78 48.03 16.41 88.35 44.47 123.13 42.3 52.18 101.99 79.06 169.38 76.29 95.86-4.15 172.15-69.97 193.09-166.42 1.39-7.11 2.37-23.52 2.37-40.52-.2-24.11-1.19-31.82-5.54-48.23-6.52-25.1-19.37-51.39-35.18-72.34-6.92-9.09-13.24-17.39-14.23-18.78-1.18-1.58 13.64-23.91 45.26-68.19 52.2-73.12 54.37-76.48 54.37-81.62 0-1.98-2.57-6.32-5.73-9.49l-5.73-5.73H833.86V224.09l-4.55-4.15c-4.54-4.35-5.73-4.35-61.27-4.35h-56.72v-58.3c0-61.27-.79-67.79-8.89-70.95-1.78-.59-27.67-1.19-57.32-1.19-50.2 0-54.16.2-58.5 3.75l-4.74 3.76-.59 61.47-.59 61.47-33.01-.4-33.01-.59-.99-61.67c-.99-58.7-1.18-61.86-4.94-64.63-3.36-2.57-13.04-2.96-58.9-3.16H394.9l-4.75 4.94zm92.89 75.1v49.41l-33.01.59-33.2.4v-100.8l33.2.4 33.01.59v49.41zm196.66 0v50.4h-67.2v-100.8h67.2v50.4zM802.63 324.1l.59 79.06-73.13.59c-40.12.4-176.89.99-303.58 1.19l-230.45.4.4-79.45c.2-43.88.59-79.85.59-80.24.2-.2 136.37-.4 302.79-.4h302.39l.4 78.85zm139.94 112.06c0 1.19-77.28 109.49-78.07 109.49-.4 0-5.93-3.36-12.26-7.71-67.4-44.67-158.51-43.88-225.9 1.78-17.98 12.25-41.5 35.38-53.36 52.57-10.67 15.42-23.52 41.31-27.87 55.54l-2.37 8.5H377.5l-165.23-.2-77.67-109.09-77.67-109.1 48.03-.99c65.81-1.38 837.61-2.17 837.61-.79zM786.03 541.7c67.4 19.17 116.02 73.33 127.09 141.31 3.16 19.96 1.18 54.95-4.15 73.72-8.3 29.85-25.69 57.71-50.01 80.84-74.12 70.36-194.87 60.28-256.54-21.74-14.23-18.97-21.34-32.41-28.46-54.75-7.91-24.51-9.29-63.25-3.16-89.73 7.91-34.19 26.09-65.22 52.57-89.73 23.91-21.94 56.33-37.95 88.74-43.88 16.6-2.95 57.52-.78 73.92 3.96z" />
    <path d="M266.82 311.65c-5.53 6.92-5.14 13.64.79 19.57 7.71 7.91 18.97 6.32 23.92-3.36 5.53-10.47-1.19-21.35-13.24-21.35-5.73 0-8.3 1.19-11.47 5.14zM377.31 311.85c-11.66 15.02 9.29 33.01 22.73 19.37 5.93-5.93 6.32-12.65.79-19.57-5.74-7.32-17.59-7.32-23.52.2zM489.57 309.87c-4.74 5.53-5.53 9.88-3.36 16.4 3.95 10.87 16.21 13.24 24.51 4.94 10.08-9.88 3.76-24.71-10.67-24.71-4.75.01-8.7 1.39-10.48 3.37zM600.64 310.46c-5.54 5.53-5.14 16.01.59 21.34 9.49 8.89 25.1 2.17 25.1-10.67 0-8.89-5.73-14.63-14.82-14.63-4.35.01-8.5 1.59-10.87 3.96zM711.32 310.46c-5.93 5.93-5.34 16.4 1.19 21.54 6.92 5.53 14.82 5.34 20.16-.4 5.14-5.34 5.73-14.43 1.19-20.75-3.96-5.73-16.8-6.12-22.54-.39zM194.49 514.03c-5.34 5.93-4.94 17.39.79 21.94 4.15 3.56 8.89 3.76 59.69 3.76 52.57 0 55.34-.2 59.09-3.95 6.13-6.13 5.93-16.8-.4-22.33-3.56-2.96-9.49-3.36-59.89-3.36-53.55-.01-55.92.19-59.28 3.94zM628.51 674.13c-21.15 15.02-39.33 28.85-40.12 30.63-.99 1.58-1.58 5.93-1.19 9.49.59 5.53 4.94 9.88 39.13 37.35 39.33 31.82 43.88 34.39 53.17 29.25 5.33-2.77 8.69-12.06 6.52-17.98-1.18-2.77-10.47-11.46-20.75-19.57-10.47-8.1-18.97-15.42-19.17-16.4 0-.79 42.89-1.38 95.26-1.38 54.35 0 94.47.79 93.49 1.78-1.19.99-10.48 7.71-20.75 15.02-10.28 7.31-19.96 14.63-21.15 16.4-4.15 5.14-3.16 15.02 1.98 19.76 8.5 8.1 13.24 6.13 52.58-21.94 20.16-14.23 38.34-27.67 40.12-29.65 3.56-3.36 4.74-14.23 1.98-18.58-.79-1.19-18.18-15.61-38.74-32.02-31.43-25.3-38.34-29.84-43.88-29.84-8.89 0-14.63 5.93-14.63 14.82 0 7.71 2.77 10.87 20.16 24.31l9.69 7.31-41.5.59c-22.93.2-60.48.2-83.4 0l-41.9-.59 15.02-10.67c16.8-11.86 20.16-17.59 16.21-27.27-1.39-3.16-3.95-6.52-5.93-7.31-9.11-3.36-14.45-.59-52.2 26.49z" />
  </svg>
)
export default SvgComponent
