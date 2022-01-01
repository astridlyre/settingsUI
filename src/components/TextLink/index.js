import * as styles from './styles.module.css'

export function TextLink({ text, onClick }) {
  return (
    <button className={styles.button} type='button' onClick={onClick}>
      {text}
    </button>
  )
}
