import { ESize, IPizza } from './pizza'

export interface IDiscountBaseCondition {
  size: ESize
}
export interface IDiscountCondition extends IDiscountBaseCondition {
  discount?: number
}
export interface IDiscountPercentCondition extends IDiscountBaseCondition {
  discountPercent?: number
}
export interface IDealCondition extends IDiscountBaseCondition {
  deal?: {
    from: number
    to: number
  }
}

export enum EVoucherType {
  'DISCOUNT',
  'DISCOUNT_PERCENT',
  'DEAL',
}

export interface IVoucher extends IDiscountCondition, IDiscountPercentCondition, IDealCondition {
  id: string
  name: string
  type: EVoucherType
}
