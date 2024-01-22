import { SVGProps } from 'react'

import { ClearIcon } from '@/common/assets/icons/weatherIcons/ClearIcon'
import { CloudsIcon } from '@/common/assets/icons/weatherIcons/CloudsIcon'
import { DrizzleIcon } from '@/common/assets/icons/weatherIcons/DrizzleIcon'
import { FogIcon } from '@/common/assets/icons/weatherIcons/FogIcon'
import { HazeIcon } from '@/common/assets/icons/weatherIcons/HazeIcon'
import { RainIcon } from '@/common/assets/icons/weatherIcons/RainIcon'
import { SmokeIcon } from '@/common/assets/icons/weatherIcons/SmokeIcon'
import { SnowIcon } from '@/common/assets/icons/weatherIcons/SnowIcon'
import { ThunderstormIcon } from '@/common/assets/icons/weatherIcons/ThunderstormIcon'

export type WeatherVariantType =
  | 'Atmosphere'
  | 'Clear'
  | 'Clouds'
  | 'Drizzle'
  | 'Fog'
  | 'Haze'
  | 'Rain'
  | 'Smoke'
  | 'Snow'
  | 'Thunderstorm'

type WeatherIconSelectorProps = SVGProps<SVGSVGElement> & {
  icon: WeatherVariantType
}

export function WeatherIconSelector({ icon, ...props }: WeatherIconSelectorProps) {
  switch (icon) {
    case 'Snow':
      return <SnowIcon {...props} />
    case 'Thunderstorm':
      return <ThunderstormIcon {...props} />
    case 'Drizzle':
      return <DrizzleIcon {...props} />
    case 'Rain':
      return <RainIcon {...props} />
    case 'Clear':
      return <ClearIcon {...props} />
    case 'Atmosphere':
      return <CloudsIcon {...props} />
    case 'Clouds':
      return <CloudsIcon {...props} />
    case 'Fog':
      return <FogIcon {...props} />
    case 'Haze':
      return <HazeIcon {...props} />
    case 'Smoke':
      return <SmokeIcon {...props} />
    default:
      return <ClearIcon {...props} />
  }
}
