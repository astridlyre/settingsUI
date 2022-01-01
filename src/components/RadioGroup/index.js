import * as styles from './styles.module.css'
import { Radio } from '../Radio/'

export function RadioGroup({ title, options }) {
  return (
    <fieldset className={styles.root}>
      <legend className={styles.legend}>{title}</legend>
      {options && options.map((option, i) => <Radio key={i} {...option} />)}
    </fieldset>
  )
}
