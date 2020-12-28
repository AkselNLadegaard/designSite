import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/Image'
import Seo from '../components/Seo'
import styled from '@emotion/styled'
import CardsList from '../components/designCards/CardsList'
import * as constant from '../components/abstracts/constants'
import StaticSVG from '../components/svgPlaybox'
import Article from '../components/Article'

const SiteStructure = styled.div`
  display: flex;
  width: 100%;
`
const SideBar = styled.aside`
  flex-basis: 30em;
  max-width: 30em;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  background-color: ${constant.blue};
  padding: 2em;
`
const Content = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background-color: floralwhite;
  overflow-y: scroll;
`
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <SiteStructure>
        <SideBar>
          <CardsList />
        </SideBar>
        <Content>
          <StaticSVG></StaticSVG>
          <Article></Article>
        </Content>
      </SiteStructure>
    </Layout>
  )
}

export default IndexPage
