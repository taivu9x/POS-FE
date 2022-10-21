import { FactoryProps } from '../Factory'
import { Clickable } from './style'

const Discount = ({ data, isSelected }: FactoryProps) => {
  return (
    <Clickable className={isSelected ? 'selected' : ''}>
      <h1>{data.name}</h1>
      <p>
        Gets a discount on {data.size} Pizza where the price drops to ${data.discount} per pizza
      </p>
    </Clickable>
  )
}

export default Discount
