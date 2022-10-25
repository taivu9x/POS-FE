import { useEffect, useState } from 'react'
import ListItem from '../../components/ListItem'
import ListAdded from '../../components/ListAdd'
import { IPizza, IPizzaOrder } from '../../types/pizza'
import { Container, styled, Grid } from '@mui/material'
import { IVoucher } from '../../types'
import ListVoucher from '../../components/ListVoucher'
import { OrderService } from '../../services/order'
import { FETCH_PRODUCT, FETCH_VOUCHER } from '../../api'

const ContainerPOS = styled(Container)(() => ({
  marginTop: '50px',
}))

const orderService = new OrderService()
const Pos = () => {
  const [data, setData] = useState<IPizza[]>([])
  const [dataVoucher, setDataVoucher] = useState<IVoucher[]>([])
  const [dataAdded, setDataAdded] = useState<IPizzaOrder[]>([])
  const [voucherSelected, setVoucherSelected] = useState<IVoucher | undefined>(undefined)
  const [total, setTotal] = useState<number>(0)
  useEffect(() => {
    getDataVoucher()
    getDataProduct()
  }, [])

  const getDataVoucher = async () => {
    const { data } = await FETCH_VOUCHER()
    if (!data) {
      return
    }
    setDataVoucher(data)
  }

  const getDataProduct = async () => {
    const { data } = await FETCH_PRODUCT()
    setData(data)
  }
  useEffect(() => {
    setTotal(orderService.total())
  }, [dataAdded, voucherSelected])
  const handleAddPizza = (pizza: IPizza) => {
    orderService.addItem(pizza)
    setDataAdded(orderService.getItems())
  }

  const handleAddVoucher = (voucher: IVoucher) => {
    orderService.addVoucher(voucher)
    setVoucherSelected(orderService.getVoucher())
  }

  return (
    <ContainerPOS>
      <Grid container spacing={5}>
        <Grid item md={8}>
          <ListItem listPizza={data} onClick={handleAddPizza} />
        </Grid>
        <Grid item md={4} container>
          <Grid item md={12}>
            <h1>Pizza Added</h1>
            <ListAdded data={dataAdded}></ListAdded>
            <b data-cy="total">{total}</b>
          </Grid>
          <Grid item md={12}>
            <ListVoucher
              data={dataVoucher}
              addVoucher={handleAddVoucher}
              voucherSelected={voucherSelected}
            ></ListVoucher>
          </Grid>
        </Grid>
      </Grid>
    </ContainerPOS>
  )
}

export default Pos
