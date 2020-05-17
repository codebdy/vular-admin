import ActiveState from "../States/ActiveState"
import DraggedState from "../States/DraggedState"
import FocusState from "../States/FocusState"
import NormalState from "../States/NormalState"

export default class Element {
  constructor(name, title, designName) {
    this.seedId()
    this.name = name
    this.designName = designName ? designName : name
    this.title = title
    this.props = {}
    this.styles = {}
    this.classes = []
    this.editProps = {}
    this.editStyles = {}
    this.editClasses = []
    this.children = []

    this.initStates()
  }

  seedId(){
    if(!Element.idSeed) Element.idSeed = 1
    Element.idSeed ++
    this._vid = Element.idSeed
  }

  initStates(){
    this.normalState = new NormalState(this)
    this.activeState = new ActiveState(this)
    this.focusState = new FocusState(this)
    //this.dragoverState = new DragoverState(this)
    this.draggedState = new DraggedState(this)
   // this.disableState = new DisableState(this)
    //this.editState = new EditState(this)
    //this.previewState = new PreviewState(this)
    this.state = this.normalState
  }

  changeToState(stateName){
    if(this.state === this[stateName]) return
    let oldState = this.state
    this.state = this[stateName]
    this.refreshState()
    this.stateChanged(oldState, this[stateName])
  }

  accept(){
    return !this.recursionConflict(this.editorState.draggedElement) 
      && !this.hasChild(this.editorState.draggedElement)
  }


//-------------events--------------
  mouseover(event){
    this.state.mouseover(event)
  }

  mouseout(event){
    this.state.mouseout(event)
  }

  focusedElement(element){
    this.state.focusedElement(element)
  }

  unfocus(){
    this.state.unfocus()
  }

  dragstart(event){
    this.state.dragstart(event)
  }

  dragover(event){
    this.state.dragover(event)
  }

  drop(event){
    this.state.drop(event)
  }

  dragleave(){
    //this.state.dragleave(event)
  }

  dragend(event){
    this.state.dragend(event)
  }

  click(event){
    this.state.click(event)
  }

//------------------------------------------

//---------------render sytles-------------
  getClass(){
    let veiwClass = Object.assign({}, this.class, this.editClass)
    //veiwClass = this.state.rebuildClass(veiwClass)
    return veiwClass;
  }

  getLabelClass(){
    let veiwLabelClass = Object.assign({}, this.labelClass)
    veiwLabelClass = this.state.rebuildLabelClass(veiwLabelClass)
    return veiwLabelClass;
  }

  getStyle(){
    let veiwStyle = Object.assign({}, this.style, this.editStyle)
    return veiwStyle;
  }

  getProps(){
    let veiwProps = Object.assign({}, this.props, this.editProps)
    veiwProps = this.state.rebuildProps(veiwProps)
    return veiwProps;
  }

  getChildren(){
    return this.children;
  }

}