export enum ESize {
  'small',
  'medium',
  'large',
}

export interface IPizza {
  id: string
  name: string
  price: number
  description: string
  img: string
}

export interface IPizzaOrder extends IPizza {
  quantity: number
}
