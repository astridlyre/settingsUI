export const initialState = {
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

export const createToggleSettings = (state, setState) => [
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
]

export const createConversationViewSettings = (state, setState) => ({
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
})

export const createReadingPanelSettings = (state, setState) => ({
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
})
