import {ExcelComponent} from "@core/ExcelComponent";
import {creatTable} from "@/components/table/table.templait";

export class Table extends ExcelComponent {
  static className= "excel__tabel"
  toHTML() {
    return creatTable(20)
    //12
  }
}