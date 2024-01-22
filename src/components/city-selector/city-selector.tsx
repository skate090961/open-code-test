import { SharedSvgSelector } from '@/common/assets/icons/shared/shared-svg-selector'
import { useCitySelector } from '@/components/city-selector/city-selector.model'

import s from './city-selector.module.scss'

import { Typography } from '../typography'

export function CitySelector() {
  const { addresses, handleCloseClick, handleItemClick, label } = useCitySelector()

  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <Typography className={s.title} variant={'h3'}>
          {label}
        </Typography>
        <ul className={s.list}>
          {addresses.map(item => (
            <li className={s.item} key={item.name} onClick={() => handleItemClick(item.coords)}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className={s.close} onClick={handleCloseClick}>
          <SharedSvgSelector id={'close'} size={25} />
        </div>
      </div>
    </>
  )
}
