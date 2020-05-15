import ElementState from "./ElementState"

export default class DraggedState extends ElementState{
  constructor(element) {
    super(element)
  }
  rebuildClass(veiwClass){
    veiwClass['dragged'] = true
    //veiwClass['elevation-5'] = true
    return veiwClass;
  }

  rebuildLabelClass(veiwLabelClass){
    veiwLabelClass['dragged-label'] = true
    return veiwLabelClass;
  }

  dragend(event){
    this.element.toNormalState()
    this.element.editorState.placeholder.removeFromParent()
  }
}

