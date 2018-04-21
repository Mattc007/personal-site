import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  return (
    <div>
      <section
        id="about-me"
        style={{
          border: '1px solid #eee',
          // background: '#eee',
          padding: '15px 10px 0'
        }}
      >
        <p>I'm a human who likes learning new stuff and making things. I work on building software products.</p>
        <ul>
          <li>Github: <a href="https://github.com/Mattc007" target="_blank">https://github.com/Mattc007</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/mattcatrett" target="_blank">https://www.linkedin.com/in/mattcatrett</a></li>
          <li>Email: [first initial][last name]@gmail.com</li>
        </ul>
      </section>
      <section id="articles">
        <h4>
          Things I've Written
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) =>
          <div key={node.id}>
            <h3>
              <Link
                to={node.fields.slug}
              >
                {node.frontmatter.title}
              </Link>
              <span
                style={{
                        fontSize: '0.7em',
                        marginLeft: '10px'
                      }}
              >
                {node.frontmatter.date}
              </span>
            </h3>
          </div>
        )}
      </section>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
