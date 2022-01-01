import { useState } from 'react'
import * as settings from '../../settings/'
import * as styles from './styles.module.css'
import { Header } from '../Heading/'
import { ToggleGroup } from '../ToggleGroup/'
import { RadioGroup } from '../RadioGroup/'
import { TextLink } from '../TextLink/'

export function Settings() {
  const [state, setState] = useState(settings.initialState)
  const toggleSettings = settings.createToggleSettings(state, setState)
  const conversationView = settings.createConversationViewSettings(
    state,
    setState,
  )
  const readingPanel = settings.createReadingPanelSettings(state, setState)

  return (
    <aside className={`${styles.root} r2 bg-white p4`}>
      <Header text='Settings' />
      <ul className='flex col gap4 p0'>
        <li>
          <ToggleGroup settings={toggleSettings} />
        </li>
        <li>
          <RadioGroup
            options={conversationView.options}
            title={conversationView.title}
          />
        </li>
        <li>
          <RadioGroup
            options={readingPanel.options}
            title={readingPanel.title}
          />
        </li>
        <TextLink text='View all settings' />
      </ul>
    </aside>
  )
}
