import { IVoucher } from '../types'
import { IPizzaOrder } from '../types/pizza'

interface IVoucherService {
  voucher: IVoucher
  total(items: IPizzaOrder[]): number
}

export abstract class VoucherAbstract implements IVoucherService {
  voucher: IVoucher
  constructor(voucher: IVoucher) {
    this.voucher = voucher
  }
  total(items: IPizzaOrder[]): number {
    return items.reduce((result, item) => {
      return result + item.price * item.quantity
    }, 0)
  }
}

export class VoucherEmpty extends VoucherAbstract {}

export class VoucherDeal extends VoucherAbstract {
  total(items: IPizzaOrder[]): number {
    return items.reduce((result, item) => {
      if (item.size !== this.voucher.size || !this.voucher.deal) {
        return result + item.price * item.quantity
      }

      const { from, to } = this.voucher.deal
      if (item.quantity < from) {
        return result + item.price * item.quantity
      }

      const numberDiscount = Math.floor(item.quantity / from)
      const numberNormal = item.quantity % from

      return result + item.price * (numberDiscount * to + numberNormal)
    }, 0)
  }
}

export class VoucherDiscount extends VoucherAbstract {
  total(items: IPizzaOrder[]): number {
    return items.reduce((result, item) => {
      if (item.size !== this.voucher.size || !this.voucher.discount || (this.voucher.discount || 0) > item.price) {
        return result + item.price * item.quantity
      }

      return result + this.voucher.discount * item.quantity
    }, 0)
  }
}
