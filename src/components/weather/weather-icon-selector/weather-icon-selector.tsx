import { SVGProps } from 'react'

import ClearIcon from '@/common/assets/icons/weather-icons/clear-icon'
import CloudsIcon from '@/common/assets/icons/weather-icons/clouds-icon'
import DrizzleIcon from '@/common/assets/icons/weather-icons/drizzle-icon'
import FogIcon from '@/common/assets/icons/weather-icons/fog-icon'
import HazeIcon from '@/common/assets/icons/weather-icons/haze-icon'
import RainIcon from '@/common/assets/icons/weather-icons/rain-icon'
import SmokeIcon from '@/common/assets/icons/weather-icons/smoke-icon'
import SnowIcon from '@/common/assets/icons/weather-icons/snow-icon'
import ThunderstormIcon from '@/common/assets/icons/weather-icons/thunderstorm-icon'

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
