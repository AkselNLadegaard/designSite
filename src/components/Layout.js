import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/react'
import * as reset from './normalizer/reset'
import Header from './Header'

const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
      query SiteTitleQuery {
         site {
            siteMetadata {
               title
            }
         }
      }
   `)

   return (
      <>
         <Global
            styles={css`
               ${reset.Reset};
               ${reset.BoxSizing};
            `}
         />
         <Header siteTitle={data.site.siteMetadata.title} />
         <div>
            <main>{children}</main>
            <footer>
               <h1>This is the footer</h1>
            </footer>
         </div>
      </>
   )
}

Layout.propTypes = {
   children: PropTypes.node.isRequired,
}

export default Layout
