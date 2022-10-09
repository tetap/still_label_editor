import { floor } from 'lodash'

export const Global = {
  DPI: 16,
  sizeToDPI(size: number) {
    return size * Global.DPI
  },
  toFixed(num: number, fixed: number) {
    return floor(num, fixed)
  },
  isMac() {
    return window.navigator.platform.toUpperCase().indexOf('MAC') >= 0
  }
}
