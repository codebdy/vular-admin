//import Move from "../commands/Move"
import $store from "../../../../store.js"
export default class ElementState {
  constructor(element) {
    this.element = element
  }

  mouseover(event){
    window.$bus.$emit('showCursor', event, 'in')
    event.preventDefault()
  }

  mouseup(event){
    event.stopPropagation()
    let draggedElement = $store.state.customizedApp.draggedElement
    if(draggedElement){
      this.element.addChild(draggedElement)
      window.$bus.$emit('hideCursor')
    }
    $store.commit('endDragElement')
  }

}