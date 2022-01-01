import { useClasses } from '../../hooks/'
import { useRef } from 'react'
import { nanoid } from '@ebflat9/fp'
import * as styles from './styles.module.css'

export function Radio({ label, checked, onClick }) {
  const id = useRef(nanoid())

  const buttonClasses = useClasses(
    [styles.radio, checked && styles.on],
    [checked],
  )

  const labelClasses = useClasses(
    [styles.root, checked && styles.on],
    [checked],
  )

  return (
    <label htmlFor={id.current} className={labelClasses}>
      <button
        id={id.current}
        type='radio'
        className={buttonClasses}
        onClick={onClick}
        checked={checked}
      >
        <svg viewBox='0 0 24 24' fill='currentColor' className={styles.icon}>
          <circle cx='12' cy='12' r='12' />
        </svg>
      </button>
      <span className='small'>{label}</span>
    </label>
  )
}
