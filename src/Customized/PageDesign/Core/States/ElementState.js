//import Move from "../commands/Move"

export default class ElementState {
  constructor(element) {
    this.element = element
  }

  dragover(event){
    window.$bus.$emit('showCursor', event, 'in')
    event.preventDefault()
  }
}