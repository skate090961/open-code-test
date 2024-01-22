import { SharedSvgSelector } from '@/common/components/sharedSvgSelector'
import { Typography } from '@/common/components/typography'
import { useCitySelector } from '@/features/searchCity/model/hooks'

import s from './CitySelector.module.scss'

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
          {addresses.map((item, index) => (
            <li className={s.item} key={index} onClick={() => handleItemClick(item.coords)}>
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
