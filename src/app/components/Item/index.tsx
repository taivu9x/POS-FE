import { IPizza } from '../../types'
import { Button, Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material'
interface ItemProps {
  data: IPizza
  onClick: () => void
}

const Item = ({ data, onClick }: ItemProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={data.img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={onClick} data-cy={`product-${data.id}`}>
          Add
        </Button>
      </CardActions>
    </Card>
  )
}

export default Item
