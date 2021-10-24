import {Excel} from '@/components/excel/Excel'
import {Formula} from './components/Formula/Formula'
import {Header} from './components/header/Header'
import {Table} from './components/Table/Table'
import {Toolbar} from './components/Toolbar/Toolbar'
import './scss/index.scss'

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

excel.render()
