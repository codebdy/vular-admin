import Element from "./Element"
export default class ElementColumn extends Element{
  constructor() {
    super("v-col", window.i18n.t('design.row'))
  }

  clone(){
    return new ElementColumn()
  }

}