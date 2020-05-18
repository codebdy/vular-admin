import Element from "./Element"
export default class ElementPageContent extends Element{
  constructor() {
    super("VularPageContent", '', 'ThePageContent')
    this.accepts = ['v-row', 'v-col']
  }

  clone(){
    return new ElementPageContent()
  }

}