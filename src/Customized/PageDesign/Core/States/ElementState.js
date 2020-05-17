//import Move from "../commands/Move"

export default class ElementState {
  constructor(element) {
    this.element = element
  }

  dragover(event){
    window.$bus.$emit('showCursor', event, 'in')
    event.preventDefault()
  }

  drop(event){
    event.stopPropagation()
    if(window.draggedElement){
      this.element.addChild(window.draggedElement)
    }
    window.draggedElement = null
  }
}