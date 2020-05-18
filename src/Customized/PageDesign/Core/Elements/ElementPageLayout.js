import Element from "./Element"
export default class ElementPageLayout extends Element{
  constructor(name, title, designName) {
    super(name, title, designName)
  }

  clone(){
    return new ElementPageLayout(this.name, this.title, this.designName)
  }

}