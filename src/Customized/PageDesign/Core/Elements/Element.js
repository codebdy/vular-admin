import ActiveState from "../states/ActiveState"
import DraggedState from "../states/DraggedState"
import FocusState from "../states/FocusState"
import NormalState from "../states/NormalState"

export default class Element {
  constructor(name, title) {
    this.seedId()
    this.name = name
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

  acceptBefore(){
    let beforeElement = this.getBefore()
    if(beforeElement && 
      (beforeElement._vid === this.editorState.placeholder._vid || beforeElement._vid === this.editorState.draggedElement._vid)){
      return false
    }
    return true
  }

  acceptAfter(){
    let afterElement = this.getAfter()
    if(afterElement &&
      (afterElement._vid === this.editorState.placeholder._vid || afterElement._vid === this.editorState.draggedElement._vid)){
      return false
    }
    return true
  }

  getBefore(){
    let index = this.indexInParent();
    console.log('getBefore', index)
    if(this.parent && index > 0 ){
      return this.parent.children[index-1]
    }
  }

  getAfter(){
    let index = this.indexInParent();
    console.log('getAfter', index)
    if(this.parent && index < this.parent.children.length - 1){
      return this.parent.children[index+1]
    }
  }

  recursionConflict(node){
    if(this._vid == node._vid){
      return true
    }
    else if(this.parent){
      return this.parent.recursionConflict(node)
    }

    return false
  } 

  addChild(node, index){
    //window.$editorBus.$emit('addChild', {parent:this, child:node, index:index})
    //console.log(node,node.state)
    node.parent = this
    if(index !== undefined){
      this.children.splice(index, 0, node)
    }
    else{
      this.children.push(node)
    }
    this.sendChangeStateMessage()
  }

  moveTo(targetParent, index){
    this.removeFromParent()
    if(targetParent) targetParent.addChild(this, index)
    //window.$editorBus.$emit('removeChild', {parent:this.parent, child:this})
    //window.$editorBus.$emit('addChild', {parent:targetParent, child:this, index:index})
  }

  removeFromParent(){
    //if(this.parent){
    //  window.$editorBus.$emit('removeChild', {parent:this.parent, child:this})
    //}

  }

  insertPlaceholder(){
    if(this.accept(this.editorState.draggedElement) && !this.children.find(child => child.isPlaceholder)){
      this.editorState.placeholder.moveTo(this)
    }
  }

  hasChild(child){
    return this.children.find(myChild => myChild._vid === child._vid);
  }

  insertPlaceholderAfter(){
    let index = this.indexInParent() + 1
    this.editorState.placeholder.moveTo(this.parent, index)
  }

  insertPlaceholderBefore(){
    let index = this.indexInParent()
    //console.log(this.editorState.placeholder.state, index)
    //index = index > 0 ? index - 1 : 0
    //this.editorState.placeholder.toPlaceholderState()
    this.editorState.placeholder.moveTo(this.parent, index)
  }

  indexInParent(){
    if(!this.parent) return 0;

    for (var i = 0; i < this.parent.children.length; i++) {
      if (this.parent.children[i]._vid == this._vid) {
        return i;
      }
    }
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
    veiwClass = this.state.rebuildClass(veiwClass)
    return veiwClass;
  }

  getLabelClass(){
    let veiwLabelClass = Object.assign({}, this.labelClass)
    veiwLabelClass = this.state.rebuildLabelClass(veiwLabelClass)
    return veiwLabelClass;
  }

  getStyle(){
    let veiwStyle = Object.assign({}, this.style, this.editStyle)
    if(this.withEditPadding){
      veiwStyle.padding = this.editorState.editPadding
    }
    if(this.state.isShowLabel()){
      veiwStyle.position = "relative"
    }
    veiwStyle = this.state.rebuildStyle(veiwStyle)
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