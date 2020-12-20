import React, { useEffect, useReducer, useState } from 'react'
import Card from './Card'
import styled from '@emotion/styled'
import { v4 as uuidv4 } from 'uuid'
import * as constant from '../abstracts/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  gap: ${constant.gap};
  [name='addTitle'] {
    width: calc(100% - 48px - 12px);
  }
`
const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${constant.gap};
  z-index: 1;
`
const Add = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: ${constant.green};
  ::after {
    content: '+';
    font-size: 2em;
    color: ${constant.white};
  }
`
const NewCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${constant.gap};
  border: 2px dashed ${constant.white};
  padding: 1em;
  border-radius: ${constant.borderRadius};
`

const initialCards = [
  {
    id: uuidv4(),
    title: 'set up postgres CRUD ',
    content: 'https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/',
  },
  {
    id: uuidv4(),
    title: 'Make simple comment esque system',
    content: 'https://www.gatsbyjs.com/blog/2019-08-27-roll-your-own-comment-system/',
  },
  {
    id: uuidv4(),
    title: 'Set up hooks based Drag N Drop',
    content: 'no one konws yet'
  }
]
export const CARDSACTIONS = {
  ADD_CARD: 'ADD_CARD',
  EDIT_CARD: 'EDIT_CARD',
  REMOVE_CARD: 'REMOVE_CARD',
}
const cardsReducer = (state, action) => {
  switch (action.type) {
    case CARDSACTIONS.ADD_CARD:
      return {
        ...state,
        cards: state.cards.concat({
          id: action.id,
          title: action.title,
          content: action.content,
        }),
      }
    case CARDSACTIONS.REMOVE_CARD:
      return {
        ...state,
        cards: state.cards.filter(item => item.id !== action.id),
      }
    case CARDSACTIONS.EDIT_CARD:
      const newCards = state.cards.map(item => {
        if (item.id === action.id) {
          const updatedCard = {
            ...item,
            title: action.title,
            content: action.content,
          }
          return updatedCard
        }
        return item
      })
      return { ...state, cards: newCards }
    default:
      throw new Error()
  }
}
const List = ({ cards, onRemove, onSave, dispatch }) => (
  <ContainerList>
    {cards.map(card => (
      <Card
        key={uuidv4}
        card={card}
        onRemove={onRemove}
        onSave={onSave}
        dispatch={dispatch}
      />
    ))}
  </ContainerList>
)

const CardsList = () => {
  const [cardsData, dispatchCardsData] = useReducer(cardsReducer, {
    cards: initialCards,
    isShowCards: true,
  })
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function handleAdd() {
    if (title && content) {
      dispatchCardsData({
        type: CARDSACTIONS.ADD_CARD,
        id: uuidv4(),
        title: title,
        content: content,
      })
      setContent('')
      setTitle('')
    } else {
      console.log('Please stop adding empty cards')
    }
  }
  function handleRemove(id) {
    dispatchCardsData({ type: CARDSACTIONS.REMOVE_CARD, id })
  }
  function handleEdit(id, newTitle, newContent) {
    dispatchCardsData({
      type: CARDSACTIONS.EDIT_CARD,
      id: id,
      title: newTitle,
      content: newContent,
    })
  }
  function handleChange(event) {
    if (event.target.name === 'addTitle') {
      setTitle(event.target.value)
    } else if (event.target.name === 'addContent') {
      setContent(event.target.value)
    } else {
      console.log('handleChange does not account for event name.')
    }
  }
  return (
    <Container>
      <NewCard>
        <input
          name="addTitle"
          type="text"
          value={title}
          onChange={(event) => handleChange(event)}
          placeholder="Title."
          tabIndex={1}
        />
        <Add type="button" onClick={handleAdd} tabIndex={3} />
        <textarea
          name="addContent"
          value={content}
          onChange={(event) => handleChange(event)}
          placeholder="Card content."
          tabIndex={2}
        />
      </NewCard>
      {cardsData.isShowCards && (
        <List
          cards={cardsData.cards}
          onRemove={handleRemove}
          onSave={handleEdit}
          dispatch={dispatchCardsData}
        />
      )}
    </Container>
  )
}

export default CardsList
