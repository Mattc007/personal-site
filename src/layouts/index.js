import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './styles.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Matt Catrett"
      meta={[
        { name: 'description', content: 'Matt Catrett is a developer & product manager in Louisiana.' },
        { name: 'keywords', content: 'catrett, developer, product, louisiana' },
      ]}
    />
    <div style={{
      margin: '0 auto',
      maxWidth: 720,
      padding: '2rem'
    }}>
      <Header />
      <div>
        {children()}
      </div>
      <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
