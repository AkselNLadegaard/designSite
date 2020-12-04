import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/Image'
import Seo from '../components/Seo'
import styled from '@emotion/styled'

const SiteStructure = styled.div`
  display: flex;
  width: 100%;
`
const SideBar = styled.aside`
  flex-basis: 30em;
  max-width: 30em;
  background-color: maroon;
  padding: 2em;
`
const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: aquamarine;
`
const IndexPage = () => {

  return (
      <Layout>
        <Seo title="Home"/>
        <SiteStructure>
          <SideBar>
            <h2>here We have SIDEBAR!!!</h2>
          </SideBar>
          <Content>
            <ul>
              <li>List 1</li>
              <li>List 1</li>
              <li>List 1</li>
              <li>List 1</li>
              <li>List 1</li>
              <li>List 1</li>
              <li>List 1</li>
            </ul>
            <Link to="/page-2/">Go to page 2</Link>
          </Content>
        </SiteStructure>
      </Layout>
  )
}

export default IndexPage
