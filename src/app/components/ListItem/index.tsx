import { useEffect, useState } from 'react'
import Item from '../Item'
import { IPizza } from '../../types'
import { Grid } from '@mui/material'
interface ListItemProps {
  listPizza: IPizza[]
  onClick: (item: IPizza) => void
}

const ListItem = ({ listPizza, onClick }: ListItemProps) => {
  const [data, setData] = useState<IPizza[]>(listPizza)
  useEffect(() => {
    setData(listPizza)
  }, [listPizza])

  console.log('re-render')
  return (
    <Grid container spacing={2}>
      {data.length ? (
        data.map((item) => (
          <Grid key={item.id} item md={4}>
            <Item
              data={item}
              onClick={() => {
                onClick(item)
              }}
            ></Item>
          </Grid>
        ))
      ) : (
        <p>Loadding</p>
      )}
    </Grid>
  )
}

export default ListItem
