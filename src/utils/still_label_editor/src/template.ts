/*
 *@description: 模板
 *@author: zyc
 *@date-time: 2022-10-08 18:57:29
 */
import Konva from 'konva'
import StillLabel from '..'
import type { Stage } from './stage'

export class Template extends Konva.Layer {
  protected _width!: number
  protected _height!: number
  /**
   * 创建模板
   * @param width 模板宽度
   * @param height 模板高度
   */
  constructor(width: number, height: number, stage: Stage) {
    super({
      name: 'Template',
      listening: false,
      imageSmoothingEnabled: true
    })
    if (!width || width <= 0) throw new Error('width not empty')
    if (!height || height <= 0) throw new Error('height not empty')
    this._width = width
    this._height = height
    this.renderTemplate(stage)
  }
  Size(dpi = true) {
    return dpi
      ? { width: StillLabel.sizeToDPI(this._width), height: StillLabel.sizeToDPI(this._height) }
      : { width: this._width, height: this._height }
  }
  renderTemplate(stage: Stage) {
    const { width, height } = this.Size()
    const template = new Konva.Rect({
      name: 'Template',
      width,
      height,
      fill: '#ffffff',
      x: 0,
      y: 0,
      strokeWidth: 0,
      cornerRadius: 0
    })
    const stageWidth = stage.width()
    const stageHeight = stage.height()
    const minScale = Math.min((stageWidth * 0.8) / width, (stageHeight * 0.8) / height)
    const scaleSize = StillLabel.toFixed(minScale, 1)
    stage.scale({
      x: scaleSize,
      y: scaleSize
    })
    stage.x(stageWidth / 2 - (width * scaleSize) / 2)
    stage.y(stageHeight / 2 - (height * scaleSize) / 2)
    this.add(template)
  }
}
