import * as styles from './styles.module.css'

export function TextLink({ text, onClick }) {
  return (
    <button
      className={`${styles.button} small p0 gray-500`}
      type='button'
      onClick={onClick}
    >
      {text}
    </button>
  )
}
