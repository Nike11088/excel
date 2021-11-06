import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from '@/components/table/table.resize'
import {shouldResize} from '@/components/table/table.functions'

export class Table extends ExcelComponent {
  static className = 'excel__table'
  resizing = {
    element: null,
    resize: null,
    start: false,
    left: null
  }

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}
