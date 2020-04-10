import React from "react"
import { Helmet } from "react-helmet"
import { Navbar, Footer } from "../components"
import styled from "@emotion/styled"
// import "./all.sass"
import "../styles/index.scss"
import useSiteMetadata from "./SiteMetadata"
import { withPrefix } from "gatsby"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const MainWrapper = styled.div`
    margin: 0 auto;
    padding: 1rem;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: var(--textNormal);
    flex-grow: 1;
    justify-content: space-around;
  `
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
