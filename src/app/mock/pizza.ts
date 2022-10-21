import { ESize, IPizza } from '../types'

export const listPizza: IPizza[] = [
  {
    id: '1',
    name: 'Small Pizza',
    size: ESize.SMALL,
    price: 11.99,
    description: "10' pizza for one person",
    img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
  },
  {
    id: '2',
    name: 'Medium Pizza',
    size: ESize.MEDIUM,
    price: 15.99,
    description: "12' pizza for two persons",
    img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
  },
  {
    id: '3',
    name: 'Large Pizza',
    size: ESize.LARGE,
    price: 21.99,
    description: "15' pizza for four persons",
    img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
  },
]
