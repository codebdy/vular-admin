import CanDragoverState from "./CanDragoverState"

export default class NormalState extends CanDragoverState{
  constructor(element) {
    super(element)
  }

  rebuildClass(veiwClass){
    veiwClass['element-outline'] = true
    return veiwClass;
  }

  mouseover(event){
    this.element.toActiveState()
  }

}

