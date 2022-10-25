import { listPizza, listVoucher } from '../mock'
import { EVoucherType } from '../types'
import { OrderService } from './order'
import { VoucherDeal } from './voucher'

describe('OrderService', () => {
  const orderService = new OrderService()
  test('Add Item', () => {
    orderService.addItem(listPizza[0])
    orderService.addItem(listPizza[1])
    orderService.addItem(listPizza[2])
    const items = orderService.getItems()
    expect(items[0].quantity).toBe(1)
    expect(items[1].quantity).toBe(1)
    expect(items[2].quantity).toBe(1)
  })

  test('Total Order Before Add Voucher', () => {
    expect(orderService.total()).toBe(49.97)
  })
})

describe('OrderService Deal', () => {
  const orderService = new OrderService()
  test('Add Item', () => {
    orderService.addItem(listPizza[0])
    orderService.addItem(listPizza[0])
    orderService.addItem(listPizza[0])
    orderService.addItem(listPizza[2])
    const items = orderService.getItems()
    expect(items[0].quantity).toBe(3)
    expect(items[1].quantity).toBe(1)
  })

  test('Add Voucher Deal', () => {
    orderService.addVoucher(listVoucher[0])
    const voucher = orderService.getVoucher()
    expect(voucher?.type).toBe(EVoucherType.DEAL)
  })

  test('Total Order With Deal', () => {
    expect(orderService.total()).toBe(45.97)
  })
})

describe('OrderService Discount', () => {
  const orderService = new OrderService()
  test('Add Item', () => {
    orderService.addItem(listPizza[1])
    orderService.addItem(listPizza[1])
    orderService.addItem(listPizza[1])
    orderService.addItem(listPizza[2])
    const items = orderService.getItems()
    expect(items[0].quantity).toBe(3)
    expect(items[1].quantity).toBe(1)
  })

  test('Add Voucher Discount', () => {
    orderService.addVoucher(listVoucher[1])
    const voucher = orderService.getVoucher()
    expect(voucher?.type).toBe(EVoucherType.DISCOUNT)
  })

  test('Total Order With Discount', () => {
    expect(orderService.total()).toBe(67.96)
  })
})
