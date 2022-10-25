import { List, ListItem } from '@mui/material'
import { IVoucher } from '../../types'
import Factory from './Factory'

interface ListVoucherProps {
  data: IVoucher[]
  addVoucher: (voucher: IVoucher) => void
  voucherSelected?: IVoucher
}

const ListVoucher = ({ data, addVoucher, voucherSelected }: ListVoucherProps) => {
  console.log(data)
  return (
    <List>
      {data.map((item) => {
        return (
          <ListItem key={item.id} onClick={() => addVoucher(item)}>
            <Factory data={item} isSelected={voucherSelected?.id === item.id}></Factory>
          </ListItem>
        )
      })}
    </List>
  )
}

export default ListVoucher
