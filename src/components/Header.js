import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import * as constant from './abstracts/constants'

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: ${constant.green};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 3em;
  height: 64px;
  z-index: 10;
  svg {
    width: 1em;
    height: 1em;
    fill: white;
  }
  h1 {
    font-size: 2em;
    margin: 0;
  }
`
const Menu = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  transform: translateX(-30em);
  width: 30em;
  visibility: hidden;
  height: calc(100vh - 64px);
  background: ${constant.purple};
  transition: 0.3s ease;
  transition-property: transform, visibility;
  transition-delay: 0s, 0.3s;
  z-index: 5;
`
const show = css`
  visibility: visible;
  transform: translateX(0);
  transition: all 0.35s ease;
`
const Button = styled.button`
  background: ${constant.orange};
  width: 48px;
  height: 48px;
  border-radius: 50%;
`
const Header = ({ siteTitle }) => {
  const [isShown, setMenuState] = useState(false)
  function showMenu() {
    if (isShown === false) {
      setMenuState(true)
    } else {
      setMenuState(false)
    }
  }
  return (
    <Container>
      <Menu css={isShown ? show : null}>
        <h2>hey hey hey </h2>
      </Menu>
      <h1>
        {siteTitle}
      </h1>
      <Button onClick={showMenu}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="16" />
          <rect y="30" width="100" height="16" />
          <rect y="60" width="100" height="16" />
        </svg>
      </Button>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
