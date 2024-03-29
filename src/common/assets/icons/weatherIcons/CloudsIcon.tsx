import { SVGProps } from 'react'
export const CloudsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox={'0 0 64 64'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g>
      <path
        d={
          'M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14Z'
        }
        fill={'none'}
        stroke={'#e5e7eb'}
        strokeLinejoin={'round'}
        strokeWidth={3}
      />
      <animateTransform
        attributeName={'transform'}
        dur={'7s'}
        repeatCount={'indefinite'}
        type={'translate'}
        values={'-3 0; 3 0; -3 0'}
      />
    </g>
  </svg>
)
