import * as vscode from 'vscode'
import { init, instance, refresh, reqBookChapterList, reqBookContent } from './plugins'
import { State } from './classes'
import { SidebarProvider, TreeNode } from './providers/sidebar'
import { BookItem } from './types'

export function activate(context: vscode.ExtensionContext) {
  State.context = context

  const sidebarProvider = new SidebarProvider()

  // 阅读初始化
  const initLegado = vscode.commands.registerCommand('legado.init', () =>
    init(sidebarProvider.refresh),
  )

  const refreshBookshelf = vscode.commands.registerCommand('legado.refresh', () =>
    sidebarProvider.refresh(),
  )

  const openBook = vscode.commands.registerCommand('legado.open', async (item: BookItem) => {
    console.log('open =>', item)

    // const list = await reqBookChapterList({ url: encodeURIComponent(item.bookUrl) })
    // console.log(list)

    // instance.get(`http://10.50.105.174:1122/getBookContent`, {
    //   params: { url: encodeURIComponent(item.bookUrl), index: item.durChapterIndex },
    // })

    const res = await reqBookContent({
      url: encodeURIComponent(item.bookUrl),
      index: item.durChapterIndex,
    })
    console.log(res)
  })

  context.subscriptions.push(initLegado, refreshBookshelf, openBook)

  vscode.window.createTreeView('legado-bookshelf', { treeDataProvider: sidebarProvider })
}

export function deactivate() {}
