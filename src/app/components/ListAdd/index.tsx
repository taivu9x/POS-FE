import { List, ListItem, ListItemText, ListItemButton, ListItemAvatar, Avatar } from '@mui/material'
import { IPizzaOrder } from '../../types'
interface ListAddedProps {
  data: IPizzaOrder[]
}

const ListAdded = ({ data }: ListAddedProps) => {
  // const [checked, setChecked] = useState([])

  // const handleToggle = (value: number) => () => {
  //   const currentIndex = checked.indexOf(value)
  //   const newChecked = [...checked]

  //   if (currentIndex === -1) {
  //     newChecked.push(value)
  //   } else {
  //     newChecked.splice(currentIndex, 1)
  //   }

  //   setChecked(newChecked)
  // }

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {data.map((item) => {
        const labelId = `checkbox-list-secondary-label-${item}`
        return (
          <ListItem
            key={item.id}
            // secondaryAction={
            //   <Checkbox
            //     edge="end"
            //     onChange={handleToggle(item.id)}
            //     checked={checked.indexOf(item.id) !== -1}
            //     inputProps={{ 'aria-labelledby': labelId }}
            //   />
            // }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.img} />
              </ListItemAvatar>
              <ListItemText id={labelId} data-cy={`product-add-${item.id}`}>
                {item.name} ({item.quantity})
              </ListItemText>
              <ListItemText id={labelId}>{item.price}</ListItemText>
              <ListItemText id={labelId} data-cy={`product-total-${item.id}`}>
                {Math.round(item.price * item.quantity * 100) / 100}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default ListAdded
