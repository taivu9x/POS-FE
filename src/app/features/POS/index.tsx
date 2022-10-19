import { useCallback, useEffect, useState } from 'react'
import ListItem from '../../components/ListItem'
import ListAdded from '../../components/ListAdd'
import { IPizza, IPizzaOrder } from '../../types/pizza'
import { listPizza } from './data'
import { Container, styled, Grid } from '@mui/material'

const ContainerPOS = styled(Container)(() => ({
  marginTop: '50px',
}))

const Pos = () => {
  const [data, setData] = useState<IPizza[]>([])
  const [dataAdded, setDataAdded] = useState<IPizzaOrder[]>([])
  useEffect(() => {
    setData(listPizza)
  }, [])

  const handleAdd = (pizza: IPizza) => {
    const itemFound = dataAdded.find((item) => item.id === pizza.id)
    if (!itemFound) {
      setDataAdded((previous) => {
        return [...previous, { ...pizza, quantity: 1 }]
      })

      return
    }

    setDataAdded((previous) => {
      return previous.map((item) => {
        if (item.id === pizza.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }

        return item
      })
    })
  }

  return (
    <ContainerPOS>
      <Grid container spacing={5}>
        <Grid item md={8}>
          {/* <ListVoucher data={listVoucher} onCLick={() => {}}></ListVoucher> */}
          <ListItem listPizza={data} onClick={handleAdd} />
        </Grid>
        <Grid item md={4}>
          <h1>Pizza Added</h1>
          <ListAdded data={dataAdded}></ListAdded>
        </Grid>
      </Grid>
    </ContainerPOS>
  )
}

export default Pos
