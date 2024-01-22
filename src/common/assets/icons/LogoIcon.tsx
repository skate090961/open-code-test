import { SVGProps } from 'react'

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name={'Layer 1'}
    viewBox={'0 0 120 120'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <linearGradient
        gradientTransform={'matrix(1 0 0 -1 0 -725.988)'}
        gradientUnits={'userSpaceOnUse'}
        id={'a'}
        x1={60}
        x2={60}
        y1={-725.988}
        y2={-845.988}
      >
        <stop offset={0} stopColor={'#1d6ff2'} />
        <stop offset={1} stopColor={'#1ac8fc'} />
      </linearGradient>
      <linearGradient
        gradientTransform={'matrix(21.5 0 0 -21.5 11884.645 -9443.866)'}
        gradientUnits={'userSpaceOnUse'}
        id={'b'}
        x1={-550.983}
        x2={-550.983}
        y1={-440.505}
        y2={-442.505}
      >
        <stop offset={0} stopColor={'#ffc700'} />
        <stop offset={1} stopColor={'#ffea00'} />
      </linearGradient>
    </defs>
    <path
      d={
        'M26 0h68a25.948 25.948 0 0 1 26 26v68a25.948 25.948 0 0 1-26 26H26A25.948 25.948 0 0 1 0 94V26A25.948 25.948 0 0 1 26 0Z'
      }
      fill={'url(#a)'}
    />
    <circle cx={38.5} cy={48.5} fill={'url(#b)'} r={21.5} />
    <path
      d={
        'M43 90a16.52 16.52 0 0 1-4-32.4 21 21 0 0 1 40.9-6.3 21.861 21.861 0 0 1 3.6-.3 19.5 19.5 0 0 1 0 39H43Z'
      }
      fill={'#fff'}
      fillRule={'evenodd'}
      opacity={0.88}
      style={{
        isolation: 'isolate',
      }}
    />
  </svg>
)
