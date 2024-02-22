import Box from '@mui/material/Box'

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Card from './Card/Card'

function ListCards({ cards }) {
  return (
    <SortableContext items={cards?.map((c) => c._id)} strategy={verticalListSortingStrategy}>
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
    </SortableContext>
  )
}

export default ListCards
