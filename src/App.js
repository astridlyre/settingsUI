import * as styles from './App.module.css'
import { Settings } from './components/Settings/'

export function App() {
  return (
    <main className={`${styles.root} flex justify-center items-center`}>
      <Settings />
    </main>
  )
}
