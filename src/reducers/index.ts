import { combineReducers } from 'redux'

import general from './general'
import layout from './layout'
import input from './input'
import symbols from './symbols'
import calculations from './calculations'
import imageExport from './image-export'
import settings from './settings'

export default combineReducers({
  general,
  layout,
  input,
  symbols,
  calculations,
  imageExport,
  settings
})
