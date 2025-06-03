import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ pageTitle }) => {
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
  return <title>{pageTitle} | {data.site.siteMetadata.title}</title>;
};

export default Seo;
