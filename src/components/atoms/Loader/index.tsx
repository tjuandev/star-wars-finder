import type { SVGProps } from 'react'

export const Loader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-testid="bars-svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <clipPath
        id="lds-progress-cpid-5009611b8a418"
        ng-attr-id="{{config.cpid}}"
        x="0"
        y="0"
        width="100"
        height="100"
      >
        <rect x="0" y="0" width="66.6667" height="100">
          <animate
            attributeName="width"
            calcMode="linear"
            values="0;100;100"
            keyTimes="0;0.5;1"
            dur="1"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="x"
            calcMode="linear"
            values="0;0;100"
            keyTimes="0;0.5;1"
            dur="1"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </clipPath>
    </defs>
    <path
      fill="none"
      strokeWidth="2.7928"
      d="M82,63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z"
      stroke="#333"
    ></path>
    <path
      d="M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z"
      fill="#ffe81f"
      clipPath="url(#lds-progress-cpid-5009611b8a418)"
      filter="url(#f1)"
    >
      <animate
        attributeName="fill-opacity"
        values="1;0.6;1"
        keyTimes="0;0.5;1"
        dur="1.5s"
        repeatCount="indefinite"
      ></animate>
    </path>
  </svg>
)