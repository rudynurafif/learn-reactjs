import React, { useContext } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { DataContext } from './context/store'
import Board from './components/Board'
import Header from './components/Header'
import Button from './components/Button'
import './sass/Header.scss'
import './App.scss'

const App = () => {
  const { store, updateDrag } = useContext(DataContext)

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result
    if (!destination) return
    if (type === 'list') {
      const lists = store.listIds
      lists.splice(source.index, 1)
      lists.splice(destination.index, 0, draggableId)
      const newStore = {
        ...store,
        listIds: lists,
      }
      updateDrag(newStore)
      return
    }
    const sourceList = store.lists[source.droppableId] // asal dragnya dari mana
    const destinationList = store.lists[destination.droppableId] // tujuan dragnya kemana
    const draggingCard = sourceList.cards.find( // item yang akan di drag
      (item) => item.id === draggableId
    )
    if (sourceList === destinationList) {
      sourceList.cards.splice(source.index, 1) // hapus satu
      destinationList.cards.splice(destination.index, 0, draggingCard) // tambah satu
      const newStore = {
        ...store,
        lists: {
          ...store.lists,
          [sourceList.id]: destinationList,
        },
      }
      updateDrag(newStore)
    } else {
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)
      const newStore = {
        ...store,
        lists: {
          ...store.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      }
      updateDrag(newStore)
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='app' type='list' direction='horizontal'>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Header />
            <div className='container'>
              {store.listIds.map((id, index) => {
                const data = store.lists[id]
                return <Board key={id} data={data} index={index} />
              })}
              <Button list />
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default App