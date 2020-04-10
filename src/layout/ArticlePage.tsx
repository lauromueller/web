import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { BasicPage } from '.';

declare interface ArticlePageProps {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const StyledContent = styled.div`
  max-width: 700px;
  margin: auto;

  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 10% 1.5em;
    color: #333;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Helvetica Neue', sans-serif;
  }

  p,
  span {
    font-family: 'Palatino', serif;
    font-size: 1.2em;
  }

  img {
    margin: 0 2.5%;
  }
`;

const ArticlePage: FunctionComponent<ArticlePageProps> = ({
  data: { mdx },
}) => {
  return (
    <BasicPage>
      <StyledContent>
        <h1 style={{ textAlign: `center` }}>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </StyledContent>
    </BasicPage>
  );
};

export default ArticlePage;

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
