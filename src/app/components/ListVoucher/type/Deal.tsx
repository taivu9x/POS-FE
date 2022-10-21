import { FactoryProps } from '../Factory'
import { Clickable } from './style'

const Deal = ({ data, isSelected }: FactoryProps) => {
  return (
    <Clickable className={isSelected ? 'selected' : ''}>
      <h1>{data.name}</h1>
      <p>
        Gets a {data.deal?.from} for {data.deal?.to} deal for {data.size} Pizzas
      </p>
    </Clickable>
  )
}

export default Deal
