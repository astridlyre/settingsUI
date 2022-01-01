import * as styles from './styles.module.css'
import { Toggle } from '../Toggle/'

export function ToggleGroup({ settings }) {
  return (
    <fieldset className={styles.root}>
      {settings &&
        settings.map((setting, i) => <Toggle key={i} setting={setting} />)}
    </fieldset>
  )
}
