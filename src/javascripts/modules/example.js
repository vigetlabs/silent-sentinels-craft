export default class Example {
  constructor(el) {
    this.el = el
    console.log(el.textContent, '- From the example module')
    console.log('hallo friend.')
  }
}