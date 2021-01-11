const chorCode = {
  A: 65,
  Z: 90
}

function toCell() {
  return `
  <div class="cell" contenteditable="true">    
  </div>
  `
}

function toCol(elem) {
  return `
  <div class="column">
    ${elem}
  </div>
  `
}

function creatRow(content, rowInfo) {
  return `
  <div class="row">
  <div class="row-info">${rowInfo||''}</div>  
  <div class="row-data">${content}</div>  
</div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(chorCode.A + index)
}

export function creatTable(rowsCount = 15) {
  const colsCount = chorCode.Z - chorCode.A + 1
  const rows = []
  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toCol)
    .join('')
  rows.push(creatRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')
    rows.push(creatRow(cells,i+1))
  }
  return rows.join('')
}