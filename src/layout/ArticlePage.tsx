import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { BasicPage } from '.';

const StyledContentWrapper = styled.div`
  margin: 80px auto;

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0 1.7rem;
  }

  @media (max-width: 768px) {
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: 0;
    }
    margin: 16px auto;
  }
`;

const ArticlePage: FunctionComponent<any> = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <BasicPage>
      <StyledContentWrapper>
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </StyledContentWrapper>
    </BasicPage>
  );
};

export default ArticlePage;

export const pageQuery = graphql`
  query($slug: String!, $area: String!, $field: String) {
    markdownRemark(
      frontmatter: {
        slug: { eq: $slug }
        area: { eq: $area }
        field: { eq: $field }
      }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
