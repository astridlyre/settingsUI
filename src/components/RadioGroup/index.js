import { Radio } from '../Radio/'

export function RadioGroup({ title, options }) {
  return (
    <fieldset className='flex col gap2'>
      <legend className='h6 mb3 bold gray-600'>{title}</legend>
      {options && options.map((option, i) => <Radio key={i} {...option} />)}
    </fieldset>
  )
}
