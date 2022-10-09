import StillLabel from '..'
import { Stage } from '../src/stage'
import { Template } from '../src/template'

export function onWheel(stage: Stage) {
  const maxZoom = 20
  const minZoom = 0.1
  const template = stage.getChildren().find((c) => c.name() === 'Template') as Template
  document.addEventListener('wheel', (e) => e.preventDefault(), { passive: false })
  stage.on('wheel', ({ evt }) => {
    evt.preventDefault()
    evt.stopPropagation()
    console.log()
    const isMac = StillLabel.isMac()
    const key = isMac ? evt.metaKey : evt.ctrlKey
    if (!key) return
    if (!template) return
    let zoom = stage.scaleX()
    const stageWidth = stage.width()
    const stageHeight = stage.height()
    const { width, height } = template.Size()
    const mousePointTo = {
      x: stage.getPointerPosition()!.x / zoom - stage.x() / zoom,
      y: stage.getPointerPosition()!.y / zoom - stage.y() / zoom
    }
    const delta = evt.deltaY
    zoom = StillLabel.toFixed(zoom * 0.999 ** delta, 2)
    if (zoom > maxZoom) zoom = maxZoom
    if (zoom < minZoom) zoom = minZoom
    const zoomTemplateWidth = width * zoom
    const zoomTemplateHeight = height * zoom
    const position = {
      x: (stageWidth - zoomTemplateWidth) / 2,
      y: (stageHeight - zoomTemplateHeight) / 2
    }
    if (zoomTemplateWidth > stageWidth * 0.8 || zoomTemplateHeight > stageHeight * 0.8) {
      position.x = -(mousePointTo.x - stage.getPointerPosition()!.x / zoom) * zoom
      position.y = -(mousePointTo.y - stage.getPointerPosition()!.y / zoom) * zoom
    }
    stage.scale({ x: zoom, y: zoom })
    stage.position(position)
    stage.batchDraw()
  })
}
