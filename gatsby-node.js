const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
            next {
              frontmatter { title }
              fields { slug }
            }
            previous {
              frontmatter { title }
              fields { slug }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node, next, previous }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/article.js'),
          context: {
            slug: node.fields.slug,
            next,
            previous,
          },
        })
      })
      resolve()
    })
  })
}
