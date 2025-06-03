import { Link } from 'gatsby'
import React from 'react'
import { container, heading, navbar, logo, navLinks, navLinkItem, navLinkText } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav className={navbar}>
        <Link className={logo} to='/'><h2>My Logo</h2></Link>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link className={navLinkText} to='/'>Home</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to='/about'>About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout