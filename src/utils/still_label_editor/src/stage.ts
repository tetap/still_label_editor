import Konva from 'konva'

export class Stage extends Konva.Stage {
  // 初始化事件
  initEvent(handles: [(stage: Stage) => void]) {
    handles.forEach((handle) => handle.apply(this, [this]))
  }
}
