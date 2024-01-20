import { ComponentProps, ComponentPropsWithoutRef, forwardRef } from 'react'

import SearchIcon from '@/common/assets/icons/search-icon'
import { Typography } from '@/components/ui/typography'

import s from './text-field.module.scss'

export type TextFieldType = 'search' | 'text'

export type TextFieldProps = {
  errorMessage?: string
  label?: string
  onClearClick?: () => void
  type?: TextFieldType
} & ComponentProps<'input'>
type PropsType = TextFieldProps & Omit<ComponentPropsWithoutRef<'input'>, keyof TextFieldProps>
export const TextField = forwardRef<HTMLInputElement, PropsType>(
  ({ className, errorMessage, label, onClearClick, type = 'text', ...rest }, ref) => {
    const isSearchType = type === 'search'
    const showError = !!errorMessage && errorMessage.length > 0
    const labelDisabledClassName = rest.disabled && s.disabled
    const errorClassName = showError && s.error

    return (
      <div className={s.root}>
        <Typography
          as={'label'}
          className={`${s.label} ${labelDisabledClassName}`}
          variant={'body2'}
        >
          {label}
          <div className={s.container}>
            <input
              className={`${s.input} ${errorClassName} ${s[type]} ${className}`}
              ref={ref}
              type={'text'}
              {...rest}
            />
            {isSearchType && <SearchIcon className={s.searchIcon} />}
            {errorMessage && <Typography variant={'error'}>{errorMessage}</Typography>}
          </div>
        </Typography>
      </div>
    )
  }
)
