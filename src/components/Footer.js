import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Social from "./Social"
import styled from "@emotion/styled"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const FooterWrap = styled.footer`
    margin-top: 3rem;

    p {
      font-size: 0.8rem;
    }
  `

  return (
    <FooterWrap>
      <Social />
      <p>
        Made by {data.site.siteMetadata.author}, &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </FooterWrap>
  )
}

export default Footer
