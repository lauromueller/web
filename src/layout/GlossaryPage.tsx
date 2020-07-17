import React, { FunctionComponent } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
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

const GlossaryPage: FunctionComponent<any> = ({ data }) => {
  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter, body } = mdx;

  console.log(frontmatter.authors);

  return (
    <BasicPage>
      <StyledContentWrapper>
        <h1>{frontmatter.title}</h1>
        <div className="blog-post-content">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </StyledContentWrapper>
    </BasicPage>
  );
};

export default GlossaryPage;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
      }
    }
  }
`;
