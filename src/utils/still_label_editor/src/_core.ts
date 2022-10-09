import konva from 'konva'
import { Template } from './template'
import { Stage } from './stage'
import { Global } from './global'

export const core = konva.Util._assign(Global, { Stage, Template })
