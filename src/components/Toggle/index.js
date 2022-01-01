import { motion } from 'framer-motion'
import { useClasses } from '../../hooks/'
import { useRef } from 'react'
import { nanoid } from '@ebflat9/fp'
import * as styles from './styles.module.css'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

export function Toggle({ setting }) {
  const id = useRef(nanoid())

  const buttonClasses = useClasses(
    [styles.toggleButton, setting.state && styles.on],
    [setting.state],
  )

  const labelClasses = useClasses(
    [styles.label, setting.state && styles.on],
    [setting.state],
  )

  return (
    <label className={labelClasses} htmlFor={id.current}>
      <span className='small'>{setting.label}</span>
      <button
        id={id.current}
        onClick={setting.onToggle}
        className={buttonClasses}
      >
        <motion.div className={styles.icon} transition={spring} layout />
      </button>
    </label>
  )
}
