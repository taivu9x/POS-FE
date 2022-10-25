import { List, ListItem } from '@mui/material'
import { IVoucher } from '../../types'
import Factory from './Factory'

interface ListVoucherProps {
  data: IVoucher[]
  addVoucher: (voucher: IVoucher) => void
  voucherSelected?: IVoucher
}

const ListVoucher = ({ data, addVoucher, voucherSelected }: ListVoucherProps) => {
  return (
    <>
      {data.length ? (
        <List data-cy="voucher">
          {data.map((item) => {
            return (
              <ListItem data-cy={`voucher-${item.id}`} key={item.id} onClick={() => addVoucher(item)}>
                <Factory data={item} isSelected={voucherSelected?.id === item.id}></Factory>
              </ListItem>
            )
          })}
        </List>
      ) : (
        <p data-cy="loading-voucher">Loading</p>
      )}
    </>
  )
}

export default ListVoucher
