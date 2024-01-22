import { SVGProps } from 'react'

export const HazeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox={'0 0 64 64'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14Z'
      }
      fill={'none'}
      stroke={'#e5e7eb'}
      strokeLinejoin={'round'}
      strokeWidth={3}
    />
    <g>
      <path
        d={'M17 58h4.5'}
        fill={'none'}
        stroke={'#d1d5db'}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d={'M28.5 58H39'}
        fill={'none'}
        stroke={'#d1d5db'}
        strokeDasharray={'7 7'}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d={'M42.5 58H47'}
        fill={'none'}
        stroke={'#d1d5db'}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <animateTransform
        attributeName={'transform'}
        begin={'0s'}
        dur={'5s'}
        repeatCount={'indefinite'}
        type={'translate'}
        values={'-3 0; 3 0; -3 0'}
      />
    </g>
    <g>
      <path
        d={'M17 52h4.5'}
        fill={'none'}
        stroke={'#d1d5db'}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d={'M28.5 52H39'}
        fill={'none'}
        stroke={'#d1d5db'}
        strokeDasharray={'7 7'}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d={'M42.5 52H47'}
        fill={'none'}
        stroke={'#d1d5db'}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <animateTransform
        attributeName={'transform'}
        begin={'-4s'}
        dur={'5s'}
        repeatCount={'indefinite'}
        type={'translate'}
        values={'-3 0; 3 0; -3 0'}
      />
    </g>
  </svg>
)
