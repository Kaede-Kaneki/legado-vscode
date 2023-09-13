import * as vscode from 'vscode'
import { toast } from './toast'
import { State } from '../classes'
import { refresh } from './refresh'

export const init = async (cb: () => Promise<void>): Promise<any> => {
  const url = await vscode.window.showInputBox({
    placeHolder: '请输入服务器地址',
    prompt: '打开阅读APP,点击我的,打开web服务,复制并输入服务器地址',
    value: State.get('server'),
  })

  if (url === undefined) return false

  if (url === '') {
    return toast('未输入服务器地址')
  }

  await State.set('server', url)

  // 获取书架
  await cb()
}
