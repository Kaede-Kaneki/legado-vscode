import * as vscode from 'vscode'
import { init, refresh } from './plugins'
import { State } from './classes'
import { SidebarProvider, TreeNode } from './providers/sidebar'

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

  const openBook = vscode.commands.registerCommand('legado.open', (item: TreeNode) => {
    console.log('open =>', item)
  })

  context.subscriptions.push(initLegado, refreshBookshelf, openBook)

  vscode.window.createTreeView('legado-bookshelf', { treeDataProvider: sidebarProvider })
}

export function deactivate() {}
