export enum ESize {
  'SMALL',
  'MEDIUM',
  'LARGE',
}

export interface IPizza {
  id: string
  name: string
  price: number
  description: string
  img: string
  size: ESize
}

export interface IPizzaOrder extends IPizza {
  quantity: number
}
