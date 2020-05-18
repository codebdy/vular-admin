import {add/*, remove, first, last, insertBefore,insertAfter, contains, after, before*/} from "../../../../basic/vular-array"
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

    //空表示所有都接受，空数组表示都不接受
    this.accepts = []
    //空和空数组都表示所有都不排除
    this.rejects = []

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

  clone(){
    return new Element(this.name, this.title, this.designName)
  }

  changeToState(stateName){
    if(this.state === this[stateName]) return
    let oldState = this.state
    this.state = this[stateName]
    this.refreshState()
    this.stateChanged(oldState, this[stateName])
  }

  canAccept(child){
    let acceptedChildren = this.accepts
    if(acceptedChildren  && acceptedChildren.length == 0){
      return false
    }

    if(acceptedChildren && !this.containsInAccepted(child)){
      return false
    }

    if(!acceptedChildren && this.containsInExcept(child)){
      return false
    }
    return true
  }


  containsInAccepted(child){
    let childName = child.name
    let acceptedChildren = this.accepts
    for(var i = 0; i < acceptedChildren.length; i++){
      if(this.nameEqual(acceptedChildren[i], childName)){
        return true
      }
    }

    return false
  }

  containsInExcept(child){
    let childName = child.name
    let rejectChildren = this.rejects
    if(rejectChildren){
      for(var i = 0; i < rejectChildren.length; i++){
        if(this.nameEqual(rejectChildren[i], childName)){
          return true
        }
      }
    }

    return false    
  }

  nameEqual(first, second){
    first = this.toLineName(first)
    second = this.toLineName(second)
    return first == second
  }

  toLineName(name){
    if(name){
      name = name.replace(/([A-Z])/g,"-$1").toLowerCase()
      if(name[0] === '-'){
        name = name.substr(1)
      }
    }

    return name
  }

  addChild(child){
    child.parent = this
    add(child, this.children)
  }

//-------------events--------------
  mousemove(event){
    this.state.mousemove(event)
  }

  mouseup(event){
    this.state.mouseup(event)
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

  //dragstart(event){
  //  this.state.dragstart(event)
  //}

  //dragover(event){
  //  this.state.dragover(event)
  //}

  //drop(event){
  //  this.state.drop(event)
  //}

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