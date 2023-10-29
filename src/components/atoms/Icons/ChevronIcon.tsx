import { type SVGProps } from 'react'

export const ChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={10}
    viewBox="0 0 16 10"
    fill="none"
    {...props}
  >
    <path
      fill="#F4F4F4"
      d="M7.155 9.659.353 3.076a1.13 1.13 0 0 1 0-1.64L1.483.34a1.224 1.224 0 0 1 1.695 0L8 5.007 12.822.341a1.224 1.224 0 0 1 1.695 0l1.13 1.094c.47.455.47 1.19 0 1.641L8.845 9.659c-.46.455-1.22.455-1.69 0Z"
    />
  </svg>
)
