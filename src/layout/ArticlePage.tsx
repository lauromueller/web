import React, { FunctionComponent } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { BasicPage } from '.';
import {
  GlossaryTooltip,
  CodeHighlighter,
  ImageCard,
} from '../components/articles';

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
    margin: 40px auto;
  }

  @media (max-width: 576px) {
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
  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter, body } = mdx;

  console.log(frontmatter.authors);

  return (
    <BasicPage>
      <StyledContentWrapper>
        <h1>{frontmatter.title}</h1>
        <div className="blog-post-content">
          <MDXProvider
            components={{ GlossaryTooltip, ImageCard, CodeHighlighter }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </StyledContentWrapper>
    </BasicPage>
  );
};

export default ArticlePage;

export const pageQuery = graphql`
  query($slug: String!, $area: String!, $field: String) {
    mdx(
      frontmatter: {
        slug: { eq: $slug }
        area: { eq: $area }
        field: { eq: $field }
      }
    ) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        authors {
          firstname
          lastname
        }
      }
    }
  }
`;
