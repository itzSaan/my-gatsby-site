import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import {
  container,
  heading,
  navbar,
  logo,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  // Get static data from graphql data layer
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <p>{data.site.siteMetadata.description}</p>
      <nav className={navbar}>
        <Link className={logo} to="/">
          <h2>My Logo</h2>
        </Link>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
