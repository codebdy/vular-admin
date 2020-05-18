//import Move from "../commands/Move"
import $store from "../../../../store.js"
export default class ElementState {
  constructor(element) {
    this.element = element
  }

  mousemove(event){
    let draggedElement = $store.state.customizedApp.draggedElement

    if(draggedElement){
      window.$bus.$emit('followMouse', event)
      if(this.element.canAccept(draggedElement)){
        window.$bus.$emit('showCursor', event, 'in')
      }
      else{
        window.$bus.$emit('hideCursor')
      }
    }
    event.stopPropagation()
  }

  mouseup(event){
    event.stopPropagation()
    let draggedElement = $store.state.customizedApp.draggedElement
    if(draggedElement && this.element.canAccept(draggedElement)){
      this.element.addChild(draggedElement)
    }
    window.$bus.$emit('hideCursor')
    window.$bus.$emit('unFollowMouse')
    $store.commit('endDragElement')
  }

}