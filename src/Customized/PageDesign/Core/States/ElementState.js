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
      let position = this.judgePosition(event)
      if(position){
          window.$bus.$emit('showCursor', event, position)
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

  mouseout(){
    window.$bus.$emit('hideCursor')
  }

  judgePosition(event){
    let draggedElement = $store.state.customizedApp.draggedElement

    let clientWidth = event.srcElement.clientWidth
    let clientHeight = event.srcElement.clientHeight
    let offsetX = event.offsetX
    let offsetY = event.offsetY
    let ratioY = offsetY/clientHeight
    let ratioX = offsetX/clientWidth

    if(this.element.canAccept(draggedElement)){
      //console.log(document.querySelector(`[data-vid-${this.element._vid}]`))
      //if(this.element.children.length === 0){
        return 'in'        
      //}
      //else if(ratioY < 0.1){
      //  return 'inBefore'
      //}
      //else{
      //  return 'inAfter'
      //}

    }

    if(this.element.parent && this.element.parent.canAccept(draggedElement)){
      if(this.element.isCol()){
        return ratioX > 0.5 ? 'right' : 'left'
      }
      else{
        return ratioY > 0.5 ? 'bottom' : 'top'
      }
    }

    return ''

  }

}