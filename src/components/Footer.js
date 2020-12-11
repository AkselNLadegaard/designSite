import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import * as constant from './abstracts/constants'

const Container = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 12em;
  background: orangered;
`

const Content = styled.div`
  ${constant.mq[2]} {
    max-width: ${constant.maxWidth};
  }
`
const Footer = ({siteTitle}) => (
  <Container>
    <Content>
      <h1>This is a nice footer</h1>
        <p>{siteTitle}</p>
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
