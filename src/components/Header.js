import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import * as constant from './abstracts/constants'

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: hotpink;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 3em;
  height: 64px;

  svg {
    width: 1em;
    height: 1em;
  }
  h1 {
    font-size: 2em;
  }
`
const Menu = styled.div`
  position: absolute;
  top: 0;
  left: -30em;
  width: 30em;
  visibility: hidden;
  height: 100vh;
  background: orange;
  transition: 0.3s ease;
  transition-property: left, visibility;
  transition-delay: 0s, 0.3s;
`
const show = css`
  visibility: visible;
  left: 0;
  transition: all 0.35s ease;
`
const Button = styled.button`
  background: darkred;
  outline: none;
  border: none;
  width: 128px;
  height: 48px;
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
      {console.log(isShown)}
      <Menu css={isShown ? show : null}>
        <h2>hey hey hey </h2>
      </Menu>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Button onClick={showMenu}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20" />
          <rect y="30" width="100" height="20" />
          <rect y="60" width="100" height="20" />
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
