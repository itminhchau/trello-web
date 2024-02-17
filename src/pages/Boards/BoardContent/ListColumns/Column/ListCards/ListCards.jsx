import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'

import AttachmentIcon from '@mui/icons-material/Attachment'
import CommentIcon from '@mui/icons-material/Comment'
import GroupIcon from '@mui/icons-material/Group'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Card from './Card/Card'

function ListCards({ cards }) {
  return (
    <Box
      sx={{
        p: '0  5px',
        m: '0 5px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${
            theme.trello.columnFooterHeight
          })`,
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ced0da'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#bfc2cf'
        },
        '&::-webkit-scrollbar': {
          width: '0.4em !important'
        }
      }}
    >
      {cards.map((card) => {
        return <Card key={card._id} card={card} temporaryHideMedia />
      })}
      {/* <Card temporaryHideMedia />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}

      {/* card 2 */}
    </Box>
  )
}

export default ListCards
