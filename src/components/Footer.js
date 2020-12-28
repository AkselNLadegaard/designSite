import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import * as constant from './abstracts/constants'

const Container = styled.footer`
  display: flex;
  width: 100%;
  min-height: 12em;
  background: orangered;
  padding: 2em;
`

const Content = styled.div`
  ${constant.mq[2]} {
    max-width: ${constant.maxWidth};
  }
`
const Footer = ({ siteTitle }) => (
  <Container>
    <Content>
      <h1>{siteTitle}</h1>
      <p>This is a nice footer</p>
      <p>Contact information:</p>
      <ul>
        <li>+45 12345678</li>
        <li>House 23, 1 th, Copenhagen</li>
      </ul>
    </Content>
  </Container>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
