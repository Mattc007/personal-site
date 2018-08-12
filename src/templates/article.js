import React from 'react'
import Link from 'gatsby-link'

const PostNavItem = ({ label, title, slug }) => (
  <div
    style={{ margin: '15px 0' }}
  >
    <div
      style={{ textTransform: 'uppercase',
               color: '#aaa',
               fontSize: '13px'  }}
    >
      {label}
    </div>
    <Link to={slug}>
        {title}
    </Link>
  </div>
)

const PostNav = ({ previous, next }) => (
  <div style={{ margin: '80px 0'}}>
    {previous &&
      <PostNavItem
        label='Previous'
        title={previous.frontmatter.title}
        slug={previous.fields.slug}
      />
    }
    {next &&
      <PostNavItem
        label='Next'
        title={next.frontmatter.title}
        slug={next.fields.slug}
      />
    }
  </div>
)

export default ({ data, pathContext }) => {
  const post = data.markdownRemark
  const next = pathContext.next
  const previous = pathContext.previous

  return (
    <div>
      <h1 style={{ margin: '40px 0' }}>
        {post.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostNav
        next={next}
        previous={previous}
      />
    </div>
  )
}

export const query = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
