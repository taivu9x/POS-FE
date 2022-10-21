import { listPizza, listVoucher } from '../mock'
import { EVoucherType } from '../types'
import { OrderService } from './order'
import { VoucherDeal } from './voucher'

describe('OrderService', () => {
  const orderService = new OrderService()
  test('Add Item', () => {
    orderService.addItem(listPizza[0])
    orderService.addItem(listPizza[0])
    orderService.addItem(listPizza[0])
    const items = orderService.getItems()
    expect(items[0].quantity).toBe(3)
  })

  test('Total Order Before Add Voucher', () => {
    expect(orderService.total()).toBe(35.97)
  })

  test('Add Voucher', () => {
    orderService.addVoucher(listVoucher[0])
    const voucher = orderService.getVoucher()
    expect(voucher?.type).toBe(EVoucherType.DEAL)
  })

  test('Total Order', () => {
    expect(orderService.total()).toBe(10)
  })
})
