import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root,options={}) {
    super($root,options.listeners);
  }
  //возвращает шаблон компонента
  toHTML() {
    return ''
  }
  init(){
    this.initDOMListeners()
  }
  destroy(){
    this.removeDOMListeners()
  }
}