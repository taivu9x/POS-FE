import { IPizza } from '../types'
import { FetchData } from './fetch'

export const FETCH_PRODUCT = async () => {
  return FetchData.get<IPizza[]>(`/product`)
}
