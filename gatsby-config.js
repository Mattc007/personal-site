module.exports = {
  siteMetadata: {
    title: 'Matt Catrett',
  },
  plugins:[
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name: 'src',
        path: 'src/'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options:{
        pathToConfigModule: 'src/utils/typography.js'
      }
    }
  ]
}
