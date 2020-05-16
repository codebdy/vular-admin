import CanDragoverState from "./CanDragoverState"

export default class FocusState extends CanDragoverState{
  constructor(element) {
    super(element)
    //window.$editorBus.$emit('focused', this.element)
  }

}

