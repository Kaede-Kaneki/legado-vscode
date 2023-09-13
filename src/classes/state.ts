import { ExtensionContext } from 'vscode'

export class State {
  static context: ExtensionContext

  static set = async (key: string, value: any) => {
    await this.context.globalState.update(key, value)
  }

  static get = (key: string): string | undefined => {
    return this.context.globalState.get(key)
  }
}
