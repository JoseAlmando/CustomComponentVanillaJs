import { Label, Input, Div } from './fabricaComponentes.js'
import { uuidv4 } from './util.js'

export const generarInput = ({ id, type, name, placeholder }) => {
  let div = Div({ classNames: 'col-sm-6' })

  id = uuidv4() + '-' + id

  let label = Label({
    id: id,
    text: placeholder,
    input: id,
    classNames: 'col-form-label',
  })

  let input = Input({ id, name, type, placeholder, classNames: 'form-control' })

  div.appendChild(label)
  div.appendChild(input)

  return div
}
