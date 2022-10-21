import { EVoucherType, IPizza, IPizzaOrder, IVoucher } from '../types'
import { VoucherAbstract, VoucherDeal, VoucherDiscount } from './voucher'

interface IOrderService {
  addItem(pizza: IPizza): void
  addVoucher(voucher: IVoucher): void
  getItems(): IPizzaOrder[]
  getVoucher(): IVoucher | undefined
}

export class OrderService implements IOrderService {
  private items: IPizzaOrder[]
  private voucher: VoucherAbstract | undefined
  constructor() {
    this.items = []
    this.voucher = undefined
  }

  addItem(pizza: IPizza) {
    const itemFound = this.items.find((item) => item.id === pizza.id)
    if (!itemFound) {
      this.items = [...this.items, { ...pizza, quantity: 1 }]
      return
    }

    this.items = this.items.map((item) => {
      if (item.id === pizza.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }

      return item
    })
  }

  addVoucher(voucher: IVoucher) {
    if (voucher.id === this.voucher?.voucher.id) {
      this.voucher = undefined
      return
    }

    let voucherService: VoucherAbstract
    switch (voucher.type) {
      case EVoucherType.DEAL:
        voucherService = new VoucherDeal(voucher)
        break
      case EVoucherType.DISCOUNT:
        voucherService = new VoucherDiscount(voucher)
        break
      default:
        voucherService = new VoucherDeal(voucher)
        break
    }

    this.voucher = voucherService
  }

  getItems() {
    return this.items
  }

  getVoucher() {
    return this.voucher?.voucher
  }

  total() {
    if (!this.voucher) {
      const total = this.items.reduce((result, item) => {
        return result + item.price * item.quantity
      }, 0)

      return total
    }

    return this.voucher.total(this.items)
  }
}
