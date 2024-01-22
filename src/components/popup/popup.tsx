import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { SharedSvgSelector } from '@/common/assets/icons/shared/shared-svg-selector'
import { Typography } from '@/components/ui/typography'
import { AddressType, CoordsType } from '@/store/reducers/address-reducer/address-reducer'
import { selectFound } from '@/store/reducers/address-reducer/address-selector'
import { fetchWeather } from '@/store/reducers/weather-reducer/weather-thunk'
import { useAppDispatch } from '@/store/store'

import s from './popup.module.scss'

type PopupProps = {
  close: () => void
  items: AddressType[]
}

export function Popup({ close, items }: PopupProps) {
  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', handleEscapeKeyPress)

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress)
    }
  }, [close])
  const dispatch = useAppDispatch()
  const found = useSelector(selectFound)
  const handleClickClose = () => {
    close()
  }
  const handleItemClick = ({ lat, lon }: CoordsType) => {
    dispatch(fetchWeather({ lat, lon }))
    close()
  }

  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <Typography className={s.title} variant={'h3'}>
          {found ? 'Выберите населенный пункт' : 'Насленный пункт не найден'}
        </Typography>
        <ul className={s.list}>
          {items.map(item => (
            <li className={s.item} key={item.name} onClick={() => handleItemClick(item.coords)}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className={s.close} onClick={handleClickClose}>
          <SharedSvgSelector id={'close'} size={25} />
        </div>
      </div>
    </>
  )
}
