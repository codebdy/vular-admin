import Element from "./Element"
export default class ElementRow extends Element{
  constructor() {
    super("v-row", window.i18n.t('design.row'))
  }

  clone(){
    return new ElementRow()
  }

}