import { Card, styled } from '@mui/material'

export const Clickable: any = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  padding: '20px',
  width: '100%',
  '&.selected': {
    backgroundColor: '#fbe3e3',
  },
}))
