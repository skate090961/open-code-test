import { SVGProps } from 'react'
export const SmokeIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <circle
      cx={31.75}
      cy={51}
      fill={'none'}
      r={3}
      stroke={'#e5e7eb'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={2}
    >
      <animateTransform
        attributeName={'transform'}
        dur={'3s'}
        repeatCount={'indefinite'}
        type={'translate'}
        values={'0 0; 0 -17;'}
      />
      <animate
        attributeName={'opacity'}
        dur={'3s'}
        repeatCount={'indefinite'}
        values={'0; 1; 1; 1; 0'}
      />
      <animate attributeName={'r'} dur={'3s'} repeatCount={'indefinite'} values={'3; 4.5; 6'} />
      <animate
        attributeName={'stroke'}
        dur={'3s'}
        repeatCount={'indefinite'}
        values={'#9ca3af; #d1d5db; #e5e7eb'}
      />
    </circle>
    <circle
      cx={25.75}
      cy={51}
      fill={'none'}
      r={4.5}
      stroke={'#d1d5db'}
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <animateTransform
        attributeName={'transform'}
        begin={'-1s'}
        dur={'3s'}
        repeatCount={'indefinite'}
        type={'translate'}
        values={'0 0; 0 -17;'}
      />
      <animate
        attributeName={'opacity'}
        begin={'-1s'}
        dur={'3s'}
        repeatCount={'indefinite'}
        values={'0; 1; 1; 1; 0'}
      />
      <animate
        attributeName={'r'}
        begin={'-1s'}
        dur={'3s'}
        repeatCount={'indefinite'}
        values={'3; 4.5; 6'}
      />
      <animate
        attributeName={'cx'}
        begin={'-1s'}
        dur={'3s'}
        repeatCount={'indefinite'}
        values={'31.75; 25.75'}
      />
      <animate
        attributeName={'stroke'}
        begin={'-1s'}
        dur={'3s'}
        repeatCount={'indefinite'}
        values={'#9ca3af; #d1d5db; #e5e7eb'}
      />
    </circle>
    <circle
      cx={36.75}
      cy={51}
      fill={'none'}
      r={6}
      stroke={'#9ca3af'}
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <animateTransform
        attributeName={'transform'}
        begin={'-2s'}
        dur={'3s'}
        repeatCount={'indefinite'}
        type={'translate'}
        values={'0 0; 0 -17;'}
      />
      <animate
        attributeName={'opacity'}
        begin={'-2s'}
        dur={'3s'}
        repeatCount={'indefinite'}
        values={'0; 1; 1; 1; 0'}
      />
      <animate
        attributeName={'r'}
        begin={'-2s'}
        dur={'3s'}
        repeatCount={'indefinite'}
        values={'3; 4.5; 6'}
      />
      <animate
        attributeName={'cx'}
        begin={'-2s'}
        dur={'3s'}
        repeatCount={'indefinite'}
        values={'31.75; 36.75'}
      />
      <animate
        attributeName={'stroke'}
        begin={'-2s'}
        dur={'3s'}
        repeatCount={'indefinite'}
        values={'#9ca3af; #d1d5db; #e5e7eb'}
      />
    </circle>
  </svg>
)
