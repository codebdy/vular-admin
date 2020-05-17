import Element from "./Element"
export default class PageHeader extends Element{
  constructor(name, title, designName) {
    super(name, title, designName)
  }

  clone(){
    return new PageHeader(this.name, this.title, this.designName)
  }

}