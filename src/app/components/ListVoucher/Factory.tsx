import { IVoucher, EVoucherType } from '../../types'
import Deal from './type/Deal'
import Discount from './type/Dicount'

export interface FactoryProps {
  data: IVoucher
  isSelected: boolean
}

const Factory = (props: FactoryProps) => {
  console.log(props.data.type, EVoucherType.DEAL)
  switch (props.data.type) {
    case EVoucherType.DEAL:
      return <Deal {...props}></Deal>
    case EVoucherType.DISCOUNT:
      return <Discount {...props}></Discount>
    default:
      return <>Empty</>
  }
}

export default Factory
