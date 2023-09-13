import { TreeDataProvider, TreeItem, window, ProgressLocation } from 'vscode'
import { reqBookshelf } from '../plugins/api'

export class SidebarProvider implements TreeDataProvider<TreeNode> {
  async refresh() {
    const res = await window.withProgress(
      {
        title: '获取书架中...',
        location: ProgressLocation.Notification,
      },
      async () => await reqBookshelf(),
    )
    console.log('res =>', res)
  }

  getTreeItem(element: TreeNode): TreeItem | Thenable<TreeItem> {
    return element
  }
  async getChildren(element?: TreeNode | undefined): Promise<TreeNode[]> {
    console.log(element)

    const res = await reqBookshelf()

    const trees = res.map((item) => {
      const { name } = item
      const treeItem = new TreeItem(name)
      treeItem.command = {
        title: name,
        command: 'legado.open',
        arguments: [item],
      }
      return treeItem
    })

    return trees
  }
}

export class TreeNode extends TreeItem {}
