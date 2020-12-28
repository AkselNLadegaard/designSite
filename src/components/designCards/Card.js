import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import * as constant from '../abstracts/constants'
import { CARDSACTIONS } from './CardsList'
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  background: ${constant.white};
  border-radius: ${constant.borderRadius};
  box-shadow: 2px 4px 0px rgba(0, 0, 0, 0.5);
  padding: 1em;
  position: relative;

  input[type='text'],
  textarea {
    border: solid 1px ${constant.black};
    overflow: scroll;
    padding: 6px;
    margin: -6px;
  }
  textarea {
    overflow: auto;
  }
`
const FirstLine = styled.div`
  display: flex;
  align-items: start;
  gap: 12px;
  /*h3,
  input {
    width: calc(100% - 48px);
  }*/
`
const Content = styled.div`
  width: 100%;
  textarea {
    max-height: 12em;
    min-height: 6em;
    height: fit-content;
  }
`
const Actions = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 32px;
  gap: 8px;
`
const CardActionButton = css`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  color: ${constant.white};
  ::after {
    content: '';
    font-size: 1em;
  }
  :focus,
  :active {
    border: 2px solid ${constant.black};
  }
`
const Remove = styled.button`
  ${CardActionButton};
  background: ${constant.red};
  ::after {
    content: '-';
  }
`
const Edit = styled.button`
  ${CardActionButton};
  background: ${constant.blue};
  ::after {
    content: 'E';
  }
`
const Confirm = styled.button`
  ${CardActionButton};
  background: ${constant.red};
  ::after {
    content: 'V';
  }
`
const Card = ({ card, dispatch }) => {
  const [newTitle, setNewTitle] = useState(card.title)
  const [newContent, setNewContent] = useState(card.content)
  const [editing, setEditing] = useState(false)
  function handleChange(event) {
    if (event.target.name === 'editTitle') {
      setNewTitle(event.target.value)
    } else if (event.target.name === 'editContent') {
      setNewContent(event.target.value)
    } else {
      console.log('handleChange does not account for event name.')
    }
  }
  function handleEdit(id) {
    setEditing(!editing)
    dispatch({
      type: CARDSACTIONS.EDIT_CARD,
      id: id,
      title: newTitle,
      content: newContent,
    })
  }
  return (
    <Container>
      <FirstLine>
        {editing ? (
          <textarea
            type="text"
            name="editTitle"
            value={newTitle}
            onChange={handleChange}
          />
        ) : (
          <h3>{card.title}</h3>
        )}
        <Actions>
          <Remove
            type="button"
            onClick={() =>
              dispatch({ type: CARDSACTIONS.REMOVE_CARD, id: card.id })
            }
          />
          {editing ? (
            <Confirm type="button" onClick={() => handleEdit(card.id)} />
          ) : (
            <Edit type="button" onClick={() => setEditing(!editing)} />
          )}
        </Actions>
      </FirstLine>
      <Content>
        {editing ? (
          <textarea
            type="text"
            name="editContent"
            value={newContent}
            onChange={handleChange}
          />
        ) : (
          <p>{card.content}</p>
        )}
      </Content>
    </Container>
  )
}

Card.propTypes = {}
export default Card
