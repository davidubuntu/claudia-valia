import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import media from "../styles/media"
import { PreviewCompatibleImage,Layout } from "../components"

export const IndexPageTemplate = ({
  image,
  mainheader,
}) => {
  const HeaderImage = styled.div`
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
  `
  const IndexPage = styled.div``
  const Section = styled.section``
  const DescriptionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    padding: 7.5rem 25vw calc((.4rem + .5vw) * 13.5);
    text-align: center;
    line-height: 2;
    ${media.laptop`
       padding: 6rem 10vw calc((.4rem + .5vw) * 12);
    `}
    ${media.tablet`
       padding: 5rem 5vw calc((.4rem + .5vw) * 12);
    `}
    ${media.mobileL`
       padding: 5rem 11vw calc((.4rem + .5vw) * 12);
    `}
  `
  const Description = styled.p`
    font-size: 14px;
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 0, 0);
    font-weight: 300;
  `
  const DescriptionTitle = styled.span`
    font-weight: bold;
  `

  return (
    <IndexPage>
      <HeaderImage>
        <PreviewCompatibleImage imageInfo={{ image: image }} />
      </HeaderImage>
      <Section>
        <DescriptionWrapper>
          <Description>
            <DescriptionTitle>{mainheader.title} </DescriptionTitle>
            {mainheader.description}
          </Description>
        </DescriptionWrapper>
      </Section>
{/*        <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainheader.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainheader.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features
                    gridItems={intro.blurbs}
                    heading={intro.heading}
                    description={intro.description}
                  />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </IndexPage>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mainheader: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        mainheader={frontmatter.mainheader}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainheader {
          title
          description
        }
      }
    }
  }
`
