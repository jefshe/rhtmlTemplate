/* global HTMLWidgets */

import 'babel-polyfill'
// TEMPLATE! - update the template name below. Rename this file to match your widget name.
//  -In theory you dont ned to change anything else, but you can at your own discretion
import widgetFactory from './rhtmlTemplate.factory'

HTMLWidgets.widget({
  name: 'rhtmlTemplate',
  type: 'output',
  factory: widgetFactory
})
