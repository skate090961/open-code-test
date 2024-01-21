import { SVGProps } from 'react'

const SnowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <circle cx={31} cy={45} fill={'none'} r={1.25} stroke={'#72b8d4'} strokeMiterlimit={10} />
      <path
        d={
          'm33.17 46.25-1.09-.63m-2.16-1.24-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63'
        }
        fill={'none'}
        stroke={'#72b8d4'}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
      />
      <animateTransform
        additive={'sum'}
        attributeName={'transform'}
        dur={'4s'}
        repeatCount={'indefinite'}
        type={'translate'}
        values={'-1 -6; 1 12'}
      />
      <animateTransform
        additive={'sum'}
        attributeName={'transform'}
        dur={'9s'}
        repeatCount={'indefinite'}
        type={'rotate'}
        values={'0 31 45; 360 31 45'}
      />
      <animate
        attributeName={'opacity'}
        dur={'4s'}
        repeatCount={'indefinite'}
        values={'0;1;1;1;0'}
      />
    </g>
    <g>
      <circle cx={24} cy={45} fill={'none'} r={1.25} stroke={'#72b8d4'} strokeMiterlimit={10} />
      <path
        d={
          'm26.17 46.25-1.09-.63m-2.16-1.24-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63'
        }
        fill={'none'}
        stroke={'#72b8d4'}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
      />
      <animateTransform
        additive={'sum'}
        attributeName={'transform'}
        begin={'-2s'}
        dur={'4s'}
        repeatCount={'indefinite'}
        type={'translate'}
        values={'1 -6; -1 12'}
      />
      <animateTransform
        additive={'sum'}
        attributeName={'transform'}
        dur={'9s'}
        repeatCount={'indefinite'}
        type={'rotate'}
        values={'0 24 45; 360 24 45'}
      />
      <animate
        attributeName={'opacity'}
        begin={'-2s'}
        dur={'4s'}
        repeatCount={'indefinite'}
        values={'0;1;1;1;0'}
      />
    </g>
    <g>
      <circle cx={38} cy={45} fill={'none'} r={1.25} stroke={'#72b8d4'} strokeMiterlimit={10} />
      <path
        d={
          'm40.17 46.25-1.09-.63m-2.16-1.24-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63'
        }
        fill={'none'}
        stroke={'#72b8d4'}
        strokeLinecap={'round'}
        strokeMiterlimit={10}
      />
      <animateTransform
        additive={'sum'}
        attributeName={'transform'}
        begin={'-1s'}
        dur={'4s'}
        repeatCount={'indefinite'}
        type={'translate'}
        values={'1 -6; -1 12'}
      />
      <animateTransform
        additive={'sum'}
        attributeName={'transform'}
        dur={'9s'}
        repeatCount={'indefinite'}
        type={'rotate'}
        values={'0 38 45; 360 38 45'}
      />
      <animate
        attributeName={'opacity'}
        begin={'-1s'}
        dur={'4s'}
        repeatCount={'indefinite'}
        values={'0;1;1;1;0'}
      />
    </g>
  </svg>
)

export default SnowIcon