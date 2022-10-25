import { cyan } from '@mui/material/colors'
import { listPizza } from '../mock/pizza'
import { listVoucher } from '../mock/voucher'
describe('Show List Product + Voucher', () => {
  const small = listPizza[0]
  const medium = listPizza[1]
  const large = listPizza[2]
  const microsoft = listVoucher[0]
  const amazon = listVoucher[1]
  const facebook = listVoucher[2]
  beforeEach(() => {
    cy.intercept('http://localhost:3001/product', listPizza)
    cy.intercept('http://localhost:3001/voucher', listVoucher)
    cy.visit('http://localhost:3000/')
  })

  it('Add Product', () => {
    cy.get(`[data-cy="product-${small.id}"]`).click()
    cy.get(`[data-cy="product-${medium.id}"]`).click()
    cy.get(`[data-cy="product-${large.id}"`).click()
    cy.get(`[data-cy="product-add-${small.id}"]`).should('have.text', `${small.name} (1)`)
    cy.get(`[data-cy="product-add-${medium.id}"]`).should('have.text', `${medium.name} (1)`)
    cy.get(`[data-cy="product-add-${large.id}"]`).should('have.text', `${large.name} (1)`)
    cy.get(`[data-cy="product-total-${small.id}"]`).should('have.text', `${Math.round(small.price * 1 * 100) / 100}`)
    cy.get(`[data-cy="product-total-${medium.id}"]`).should('have.text', `${Math.round(medium.price * 1 * 100) / 100}`)
    cy.get(`[data-cy="product-total-${large.id}"]`).should('have.text', `${Math.round(large.price * 1 * 100) / 100}`)
    cy.get(`[data-cy="total"]`).should('have.text', '49.97')
  })

  it('Add Voucher Microsoft', () => {
    cy.get(`[data-cy="product-${small.id}"]`).click()
    cy.get(`[data-cy="product-${small.id}"]`).click()
    cy.get(`[data-cy="product-${small.id}"]`).click()
    cy.get(`[data-cy="product-${large.id}"`).click()
    cy.get(`[data-cy="voucher-${microsoft.id}"`).click()
    cy.get(`[data-cy="product-add-${small.id}"]`).should('have.text', `${small.name} (3)`)
    cy.get(`[data-cy="product-add-${large.id}"]`).should('have.text', `${large.name} (1)`)
    cy.get(`[data-cy="product-total-${small.id}"]`).should('have.text', `${Math.round(small.price * 3 * 100) / 100}`)
    cy.get(`[data-cy="product-total-${large.id}"]`).should('have.text', `${Math.round(large.price * 1 * 100) / 100}`)
    cy.get(`[data-cy="total"]`).should('have.text', '45.97')
  })

  it('Add Voucher Amazon', () => {
    cy.get(`[data-cy="product-${medium.id}"]`).click()
    cy.get(`[data-cy="product-${medium.id}"]`).click()
    cy.get(`[data-cy="product-${medium.id}"]`).click()
    cy.get(`[data-cy="product-${large.id}"`).click()
    cy.get(`[data-cy="voucher-${amazon.id}"`).click()
    cy.get(`[data-cy="product-add-${medium.id}"]`).should('have.text', `${medium.name} (3)`)
    cy.get(`[data-cy="product-add-${large.id}"]`).should('have.text', `${large.name} (1)`)
    cy.get(`[data-cy="product-total-${medium.id}"]`).should('have.text', `${Math.round(medium.price * 3 * 100) / 100}`)
    cy.get(`[data-cy="product-total-${large.id}"]`).should('have.text', `${Math.round(large.price * 1 * 100) / 100}`)
    cy.get(`[data-cy="total"]`).should('have.text', '67.96')
  })
})
