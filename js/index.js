import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js'

import { generarInput } from './fabricaSeccion.js'
import { Label, Input, Div } from './fabricaComponentes.js'
import { uuidv4 } from './util.js'

class CustomComponent extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
 
    this.render()
  }

  render() {
    const inputTestProperties = {
      id: 'inputTest',
      placeholder: 'Esta es una prueba',
      name: 'inputTest',
      type: 'Test',
      required: true,
    }
    const inputTestProperties2 = {
      id: 'inputTest',
      placeholder: 'Esta es una prueba',
      name: 'inputTest',
      type: 'Test',
      required: true,
    }


    let divContainer = Div({ id: uuidv4(), classNames: 'container pt-4' })
    let divRow = Div({ id: uuidv4(), classNames: 'row' })

    divRow.appendChild(generarInput(inputTestProperties))
    divRow.appendChild(generarInput(inputTestProperties2))
    divRow.appendChild(generarInput(inputTestProperties))
    divRow.appendChild(generarInput(inputTestProperties2))
    divRow.appendChild(generarInput(inputTestProperties))
    divRow.appendChild(generarInput(inputTestProperties2))

    divContainer.appendChild(divRow)
    this.appendChild(divContainer)
  }
}

window.customElements.define('custom-component', CustomComponent)
