import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  padding: 0px 5rem;
  @media (max-width: 768px) and (orientation: landscape) {
    padding: 0rem 1rem;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo-valia-dark" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      <Img
        // imgStyle={{ objectFit: "contain" }}
        fixed={data.file.childImageSharp.fixed}
        alt="logo"
      />
    </LogoWrap>
  )
}

export default Logo
