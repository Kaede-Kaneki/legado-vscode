import * as vscode from 'vscode'
import { reqBookshelf } from './api'

export const refresh = async () => {
  const res = await vscode.window.withProgress(
    {
      title: '获取书架中...',
      location: vscode.ProgressLocation.Notification,
    },
    async () => await reqBookshelf(),
  )
  console.log('res =>', res)
}
