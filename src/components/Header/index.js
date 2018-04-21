import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <section id="header">
    <h1 style={{ marginBottom: '2rem' }}>
      <Link
        to="/"
        className="header__link"
      >
        Matt Catrett
      </Link>
    </h1>
  </section>
)

export default Header
