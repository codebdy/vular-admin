import CanDragoverState from "./CanDragoverState"

export default class FocusState extends CanDragoverState{
  constructor(element) {
    super(element)
    window.$editorBus.$emit('focused', this.element)
  }

  rebuildClass(veiwClass){
    veiwClass['focus-it'] = true
    return veiwClass;
  }
  
  rebuildLabelClass(veiwLabelClass){
    veiwLabelClass['focus-it-label'] = true
    return veiwLabelClass;
  }

  focusedElement(element){
    if(element._vid !== this._vid){
      this.element.toNormalState()
    }
  }

  unfocus(){
    this.element.toNormalState()
  }

  hasToolbar(){
    return !this.element.noToolbar
  }

  dragstart(event){
    this.element.editorState.draggedElement = this.element
    this.element.editorState.placeholder = this.element.makePlaceholder()
    this.element.toDraggedState()
    window.$editorBus.$emit('editorStateChange', this.element.editorState)
  }

}

