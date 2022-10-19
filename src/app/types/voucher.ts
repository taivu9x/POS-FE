import { ESize } from './pizza'

export interface IDealCondition {
  size: ESize
  quantity: number
  deal: number
}

export interface IDiscountBaseCondition {
  size: ESize
  minimum: number
}

export interface IDiscountCondition extends IDiscountBaseCondition {
  discount: number
}

export interface IDiscountPercentCondition extends IDiscountBaseCondition {
  discountPercent: number
}

export enum EVoucherType {
  'discount',
  'discountPercent',
  'deal',
}

export interface IVoucher {
  type: EVoucherType
}
