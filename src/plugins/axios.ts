import axios from 'axios'
import { State } from '../classes'

export const instance = axios.create({
  baseURL: '',
  timeout: 120 * 1000,
  // responseType: 'json',
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  // },
})

instance.interceptors.request.use(
  (config) => {
    const { data, params, url, method } = config

    config.baseURL = State.get('server')

    console.log(`${url} [${method}] 请求参数 =>`, data || params)

    console.log(config)

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    const { data: respData, config } = response

    console.log('请求返回 =>', respData)

    const { data, errorMsg, isSuccess } = respData

    if (!isSuccess) {
      return Promise.reject(respData)
    }

    return data
  },
  (error) => {
    console.log('请求失败 =>', error)
    return Promise.reject(error)
  },
)

export function curl<T = any>(
  url: string,
  data: Record<string, any> = {},
  options: Record<string, any> = {},
): Promise<T> {
  const { method } = (options = Object.assign(
    {
      method: 'get',
    },
    options,
  ))

  options.url = url

  options[method === 'get' ? 'params' : 'data'] = data

  // let str = ''
  // const query = data
  // const len = Object.keys(query).length
  // if (len) {
  //   str = '?'
  //   Object.keys(query).forEach((v, idx) => {
  //     len - 1 === idx
  //       ? (str += `${v}=${encodeURIComponent(query[v])}`)
  //       : (str += `${v}=${encodeURIComponent(query[v])}&`)
  //   })
  // }
  // options.url = url + str
  // options.params = undefined

  return instance({ ...options })
}
