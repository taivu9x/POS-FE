import { listPizza } from '../mock/pizza'
import { listVoucher } from '../mock/voucher'
describe('Show List Product + Voucher', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/product', listPizza)
    cy.intercept('http://localhost:3001/voucher', listVoucher)
    cy.visit('http://localhost:3000/')
  })

  it('Should show the correct product', () => {
    cy.wait(500).get('[data-cy="product"] > div').should('have.length', '3')
  })
  it('Should show the correct voucher', () => {
    cy.wait(500).get('[data-cy="voucher"] > li').should('have.length', '3')
  })
})

describe('Emtpy list voucher', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/product', [])
    cy.intercept('http://localhost:3001/voucher', [])
    cy.visit('http://localhost:3000/')
  })

  it('Should show the correct product', () => {
    cy.wait(500).get('[data-cy="loading-product"]').should('have.text', 'Loading')
  })
  it('Should show the correct voucher', () => {
    cy.wait(500).get('[data-cy="loading-voucher"]').should('have.text', 'Loading')
  })
})
