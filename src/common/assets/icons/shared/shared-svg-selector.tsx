import { CgCompressRight } from 'react-icons/cg'
import { FaWind } from 'react-icons/fa'
import { FaDroplet, FaLocationDot } from 'react-icons/fa6'
import { ImCompass2 } from 'react-icons/im'
import { IoIosSunny } from 'react-icons/io'
import { PiSunHorizonFill } from 'react-icons/pi'

type SharedSvgSelectorProps = {
  className?: string
  id: string
  size?: number
}
export function SharedSvgSelector({ className, id, size }: SharedSvgSelectorProps) {
  switch (id) {
    case 'pressure':
      return <CgCompressRight className={className} size={size} />
    case 'wind':
      return <FaWind className={className} size={size} />
    case 'direction':
      return <ImCompass2 className={className} size={size} />
    case 'sunrise':
      return <IoIosSunny className={className} size={size} />
    case 'sunset':
      return <PiSunHorizonFill className={className} size={size} />
    case 'humidity':
      return <FaDroplet className={className} size={size} />
    case 'location':
      return <FaLocationDot className={className} size={size} />
    default:
      return null
  }
}
