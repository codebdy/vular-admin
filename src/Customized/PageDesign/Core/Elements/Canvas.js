import Element from "./Element"
export default class Canvas extends Element{
  constructor() {
    super('TheCanvas')
    this.accepts = ['VularPageHeader','VularPageContent', 'VularFooter']
  }
}