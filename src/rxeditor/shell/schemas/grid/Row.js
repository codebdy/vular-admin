import {RXSchema} from '../RXSchema'
import {OptionGroup} from '../OptionGroup'

let gutters = {
  label: "gutters",
  onValue : "",
  offValue : "no-gutters"
}

export class Row extends RXSchema{
  constructor() {
    super()

    let rowOptions = new OptionGroup(i18n.t('optionbox.row-options'), true)
    rowOptions.addSwitchRow(gutters, '')

    this.optionGroups.unshift(rowOptions)
  }

} 