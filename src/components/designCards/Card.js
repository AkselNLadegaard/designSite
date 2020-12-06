import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import * as constant from '../abstracts/constants'
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${constant.white};
  border-radius: ${constant.borderRadius};
  box-shadow: 2px 4px 0px rgba(0, 0, 0, 0.5);
  padding: 1em;
  position: relative;
  h3 {
    width: calc(100% - 48px);
  }
  input[type='text'] {
    border: solid 1px black;
  }
`
const Content = styled.div`
  width: 100%;
`
const Actions = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 48px;
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
const Card = ({ card, onRemove, onEdit, onSave  }) => {
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
    setEditing(false)
    onSave(id, newTitle, newContent)

  }
  return (
    <Container key={card.id}>
      {editing ? (
        <input
          type="text"
          name="editTitle"
          value={newTitle}
          onChange={handleChange}
        />
      ) : (
        <h3>{card.title}</h3>
      )}
      <Actions>
        <Remove type="button" onClick={() => onRemove(card.id)} />
        {editing ? (
          <Confirm type="button" onClick={() => handleEdit(card.id)} />
        ) : (
          <Edit type="button" onClick={() => setEditing(true)} />
        )}
      </Actions>

      <Content>
        {editing ? (
          <input
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
