import { BookItem } from '../types'
import { curl } from './axios'

export const reqBookshelf = (data: any = {}) => {
  return curl<BookItem[]>('/getBookshelf', data)
}

export const reqBookChapterList = (data: { url: string }) => {
  return curl('/getChapterList', data)
}

export const reqBookContent = (data: { url: string; index: string | number }) => {
  return curl('/getBookContent', data)
}
