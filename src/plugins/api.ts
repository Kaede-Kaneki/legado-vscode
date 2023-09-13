import { BookItem } from '../types'
import { curl } from './axios'

export const reqBookshelf = (data: any = {}) => {
  return curl<BookItem[]>('/getBookshelf', data)
}
