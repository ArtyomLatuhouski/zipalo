import {ExcelComponent} from "@core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = "excel__formula"

  constructor($root) {
    super($root)
      this.name='Formula'
      this.listeners=['input','click']
  }
  onInput(event){
    console.log('Formula : onInput',event.target.textContent.trim())
  }
  onClick(){
    console.log('mk')
  }

  toHTML() {
    return `
       <div class="info">fx</div>
       <div class="input" contenteditable="true" spellcheck="false"></div>
    `
  }
}