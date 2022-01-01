import { useState, useMemo } from 'react'
import * as styles from './styles.module.css'
import { ToggleGroup } from '../ToggleGroup/'
import { RadioGroup } from '../RadioGroup/'
import { TextLink } from '../TextLink/'

const initialState = {
  darkMode: true,
  desktopNotifications: false,
  focusedInbox: false,
  conversationView: 'newestOnTop',
  readingPanel: 'showOnTheRight',
}

const toggle = (setting) => (state) => ({
  ...state,
  [setting]: !state[setting],
})

const setKey = (key, value) => (state) => ({
  ...state,
  [key]: value,
})

export function Settings() {
  const [state, setState] = useState(initialState)

  const toggleSettings = useMemo(
    () => [
      {
        label: 'Dark mode',
        state: state.darkMode,
        onToggle: () => setState(toggle('darkMode')),
      },
      {
        label: 'Desktop notifications',
        state: state.desktopNotifications,
        onToggle: () => setState(toggle('desktopNotifications')),
      },
      {
        label: 'Focused inbox',
        state: state.focusedInbox,
        onToggle: () => setState(toggle('focusedInbox')),
      },
    ],
    [state],
  )

  const conversationView = useMemo(
    () => ({
      title: 'Conversation view',
      options: [
        {
          label: 'Newest on top',
          checked: state.conversationView === 'newestOnTop',
          onClick: () => setState(setKey('conversationView', 'newestOnTop')),
        },
        {
          label: 'Newest on bottom',
          checked: state.conversationView === 'newestOnBottom',
          onClick: () => setState(setKey('conversationView', 'newestOnBottom')),
        },
        {
          label: 'Off',
          checked: state.conversationView === 'off',
          onClick: () => setState(setKey('conversationView', 'off')),
        },
      ],
    }),
    [state.conversationView],
  )

  const readingPanel = useMemo(
    () => ({
      title: 'Reading panel',
      options: [
        {
          label: 'Show on the right',
          checked: state.readingPanel === 'showOnTheRight',
          onClick: () => setState(setKey('readingPanel', 'showOnTheRight')),
        },
        {
          label: 'Show on the bottom',
          checked: state.readingPanel === 'showOnTheBottom',
          onClick: () => setState(setKey('readingPanel', 'showOnTheBottom')),
        },
        {
          label: 'Hide',
          checked: state.readingPanel === 'hide',
          onClick: () => setState(setKey('readingPanel', 'hide')),
        },
      ],
    }),
    [state.readingPanel],
  )

  return (
    <aside className={styles.root}>
      <header className={styles.settingsHeader}>
        <h2 className={styles.settingsHeading}>Settings</h2>
      </header>
      <ul className={styles.settingsList}>
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
