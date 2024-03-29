import { SVGProps } from 'react'

export const ThunderstormIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox={'0 0 64 64'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M43.67 45.5h2.83a7 7 0 0 0 0-14h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0v0'
      }
      fill={'none'}
      stroke={'#e5e7eb'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={3}
    />
    <g>
      <path
        d={'m24.39 43.03-.78 4.94'}
        fill={'none'}
        stroke={'#2885c7'}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <animateTransform
        attributeName={'transform'}
        dur={'0.7s'}
        repeatCount={'indefinite'}
        type={'translate'}
        values={'1 -5; -2 10'}
      />
      <animate
        attributeName={'opacity'}
        dur={'0.7s'}
        repeatCount={'indefinite'}
        values={'0;1;1;0'}
      />
    </g>
    <g>
      <path
        d={'m31.39 43.03-.78 4.94'}
        fill={'none'}
        stroke={'#2885c7'}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <animateTransform
        attributeName={'transform'}
        begin={'-0.4s'}
        dur={'0.7s'}
        repeatCount={'indefinite'}
        type={'translate'}
        values={'1 -5; -2 10'}
      />
      <animate
        attributeName={'opacity'}
        begin={'-0.4s'}
        dur={'0.7s'}
        repeatCount={'indefinite'}
        values={'0;1;1;0'}
      />
    </g>
    <g>
      <path
        d={'m38.39 43.03-.78 4.94'}
        fill={'none'}
        stroke={'#2885c7'}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <animateTransform
        attributeName={'transform'}
        begin={'-0.2s'}
        dur={'0.7s'}
        repeatCount={'indefinite'}
        type={'translate'}
        values={'1 -5; -2 10'}
      />
      <animate
        attributeName={'opacity'}
        begin={'-0.2s'}
        dur={'0.7s'}
        repeatCount={'indefinite'}
        values={'0;1;1;0'}
      />
    </g>
    <g>
      <path d={'m30 36-4 12h4l-2 10 10-14h-6l4-8h-6z'} fill={'#f59e0b'} />
      <animate
        attributeName={'opacity'}
        dur={'2s'}
        repeatCount={'indefinite'}
        values={'1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1'}
      />
    </g>
  </svg>
)
