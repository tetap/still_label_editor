/*
 *@description: 模板
 *@author: zyc
 *@date-time: 2022-10-08 18:57:29
 */
export class Template {
  width!: number
  height!: number
  /**
   * 创建模板
   * @param width 模板宽度
   * @param height 模板高度
   */
  constructor(width: number, height: number) {
    if (!width || width <= 0) throw new Error('width not empty')
    if (!height || height <= 0) throw new Error('height not empty')
    this.width = width
    this.height = height
  }
  get() {
    return { width: this.width, height: this.height }
  }
}
