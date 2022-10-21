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
    return 10
  }
}

export class VoucherDiscount extends VoucherAbstract {
  total(items: IPizzaOrder[]): number {
    return 12
  }
}
