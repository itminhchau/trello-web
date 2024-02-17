import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  // yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fĩ trường hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  //nhẫn giữ 250ms và dung sai cảm ứng ( dễ hiểu là di chuyển lệch 5px) thì kích hoạt event
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } })

  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumnsState, setOrderedColumnsState] = useState([])

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return
    if (active.id !== over.id) {
      //vi tri cu
      const oldIndex = orderedColumnsState.findIndex((c) => c._id === active.id)
      //vi tri sau
      const newIndex = orderedColumnsState.findIndex((c) => c._id === over.id)

      const dndOrderedColumns = arrayMove(orderedColumnsState, oldIndex, newIndex)

      // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id)

      setOrderedColumnsState(dndOrderedColumns)
    }
  }

  useEffect(() => {
    setOrderedColumnsState(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumnsState} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
