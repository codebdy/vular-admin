import ElementState from "./ElementState"

export default class ActiveState extends ElementState{
  constructor(element) {
    super(element)
  }

  rebuildClass(veiwClass){
    veiwClass['mouse-over'] = true
    return veiwClass;
  }

  rebuildLabelClass(veiwLabelClass){
    veiwLabelClass['mouse-over-label'] = true
    return veiwLabelClass;
  }

  mouseout(event){
    this.element.toNormalState()
  }

  click(event){
    this.element.toFocusState()
  }

}

