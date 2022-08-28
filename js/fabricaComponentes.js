export const Label = ({ id = null, text, input = null, classNames = null }) => {
  let element = document.createElement('label')

  if (id != null && id != '') {
    element.setAttribute('id', `lb-${id}`)
  }

  if (input != null && input != '') {
    element.setAttribute('for', input)
  }

  element.appendChild(document.createTextNode(text.toUpperCase()))

  if (classNames != null && classNames != '') {
    const _class = classNames.trim().split(' ')
    _class.forEach((c) => element.classList.add(c))
  }

  return element
}

export const Input = ({
  id,
  type,
  name,
  placeholder = '',
  classNames = null,
  required = false,
}) => {
  let element = document.createElement('input')

  if (id != null && id != '') {
    element.setAttribute('id', id)
  }

  if (type != null && type != '') {
    element.setAttribute('type', type)
  }

  if (name != null && name != '') {
    element.setAttribute('name', name)
  }

  if (placeholder != null && placeholder != '') {
    element.setAttribute('placeholder', placeholder)
  }
  if (required) {
    element.setAttribute('required', '')
  } else {
    element.setAttribute('required', '')
  }

  if (classNames != null && classNames != '') {
    const _class = classNames.trim().split(' ')
    _class.forEach((c) => element.classList.add(c))
  }

  return element
}

export const Div = ({ classNames = null, id = null }) => {
  let element = document.createElement('div')

  if (id != null && id != '') {
    element.setAttribute('id', id)
  }

  if (classNames != null && classNames != '') {
    const _class = classNames.trim().split(' ')
    _class.forEach((c) => element.classList.add(c))
  }

  return element
}

export const Form = ({
  id = null,
  action = null,
  onsubmit = null,
  method = null,
  classNames = null,
  enctype = null,
}) => {
  let element = document.createElement('form')

  if (id != null && id != '') {
    element.setAttribute('id', id)
  }

  if (enctype != null && enctype != '') {
    element.setAttribute('enctype', enctype)
  }

  if (action != null && action != '') {
    element.setAttribute('action', action)
  }

  if (onsubmit != null && onsubmit != '') {
    element.setAttribute('onsubmit', onsubmit)
  }

  if (method != null && method != '') {
    element.setAttribute('method', method)
  }

  if (classNames != null && classNames != '') {
    const _class = classNames.trim().split(' ')
    _class.forEach((c) => element.classList.add(c))
  }

  return element
}
