export enum ToastType {
  info = 'info',
  warning = 'warning',
  error = 'error',
}
export interface ToastOptions {
  type: 'info' | 'warning' | 'error'
}
