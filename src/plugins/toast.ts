import * as vscode from 'vscode'
import { ToastOptions } from '../types'

export const toast = (message: string, options: ToastOptions = { type: 'info' }) => {
  const { type } = options
  if (type === 'info') return vscode.window.showInformationMessage(message)
  if (type === 'warning') return vscode.window.showWarningMessage(message)
  if (type === 'error') return vscode.window.showErrorMessage(message)
}
