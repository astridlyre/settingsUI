import { Toggle } from '../Toggle/'

export function ToggleGroup({ settings }) {
  return (
    <fieldset className='flex p0 gray-600 gap2 col'>
      {settings &&
        settings.map((setting, i) => <Toggle key={i} setting={setting} />)}
    </fieldset>
  )
}
