import {$} from "@core/dom";

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      //DEBUG
      // if (component.name){
      //   window['c'+component.name]=component
      // }
      // console.log(component.name)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root
  }

  render() {
    //afterbegin , afterend,beforeend,beforebegin для функции замены innerHTML от NODE.JS
    // this.$el.insertAdjacentHTML('afterbegin','<h1>Test</h1>')

    this.$el.append(this.getRoot())
    this.components.forEach((component)=>{
      component.init()
    })
  }
}

