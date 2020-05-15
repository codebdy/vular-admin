import ElementState from "./ElementState"

export default class CanDragoverState extends ElementState{
  constructor(element) {
    super(element)
  }

  dragover(event){
    if(this.atBefore(event) && this.element.acceptBefore()){
      //console.log('atBefore')
      //console.log(this.element.editorState.placeholder.state)
      this.element.insertPlaceholderBefore()
      event.preventDefault()
    }
    else if(this.atAfter(event) && this.element.acceptAfter()){
      this.element.insertPlaceholderAfter()
      event.preventDefault()
    }

    else if(this.element.accept()
      && !this.element.hasChild(this.element.editorState.draggedElement)){
      //console.log('dragover条件3')
      this.element.insertPlaceholder()
	    event.preventDefault()
    }
    //this.element.setState(new DragoverState(this.element))
  }

  atBefore(event){
    var margin = 8;
    return event.offsetX <= margin
        ||event.offsetY <= margin
  }

  atAfter(event){
    var margin = 8;
    return event.srcElement.clientWidth - event.offsetX <= margin
        || event.srcElement.clientHeight - event.offsetY <= margin
  }

}