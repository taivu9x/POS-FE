import { IVoucher } from '../types'
import { FetchData } from './fetch'

export const FETCH_VOUCHER = async () => {
  return FetchData.get<IVoucher[]>(`/voucher`)
}
