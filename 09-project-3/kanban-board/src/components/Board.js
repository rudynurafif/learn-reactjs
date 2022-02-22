import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import BoardTitle from './BoardTitle'
import Card from './Card'
import Button from './Button'
import '../sass/Board.scss'

export default function Board({ data, index }) {
  return (
    <Draggable draggableId={data.id} index={index}>
      {provided => (
      <div
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        {...provided.draggableProps}
        className='board'
      >
        <div className="board__title">
          <BoardTitle id={data.id} title={data.title} />
          <div className="menu">
            <box-icon name='dots-vertical-rounded'></box-icon>
          </div>
        </div>
        <Droppable droppableId={data.id}>
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.cards.map((card, index) => 
                <Card key={card.id} id={data.id} index={index} item={card} />
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Button id={data.id} />
      </div>
      )}
    </Draggable>
  )
}
