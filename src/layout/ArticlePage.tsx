import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { BasicPage } from '.';
import {
  GlossaryTooltip,
  CodeHighlighter,
  FeaturedContent,
  ImageCard,
} from '../components/articles';

export type BreadcrumbsProps = {
  field: string;
  area: string;
  title: string;
};

const StyledContentWrapper = styled.div`
  margin: 56px auto;

  p,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 90%;
    margin-left: 10%;
  }

  ul {
    width: calc(90% - 3rem);
    margin-left: 10%;
    padding: 0 0 0 3rem;
  }

  @media (max-width: 768px) {
    margin: 32px auto;
  }

  @media (max-width: 576px) {
    p,
    h2,
    h3,
    h4,
    h5,
    h6 {
      width: 100%;
      margin-left: 0;
    }

    ul {
      width: calc(100% - 2rem);
      margin-left: 0;
      padding: 0 0 0 2rem;
    }

    margin: 32px auto;
  }
`;

const StyledContentBodyWrapper = styled.div`
  width: 80%;
  margin-left: 20%;
`;

const BreadcrumbsContainer = styled.div`
  color: var(--lm-color-medium);
  font-size: 0.75rem;
  margin-bottom: 24px;
  display: inline-block;

  @media (max-width: 576px) {
    margin-bottom: 0;
  }
`;

const StyledTitle = styled.h1``;

const TitleBorder = styled.div`
  width: 30px;
  height: 4px;
  background-color: var(--lm-color-primary);
`;

const formatBreadcrumb = (b: string) => {
  const newStr = b.replace(/-/g, ' ');

  return newStr.charAt(0).toUpperCase() + newStr.slice(1);
};

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({
  field,
  area,
  title,
}) => {
  return (
    <BreadcrumbsContainer>
      <Link to={`/${field}`}>{formatBreadcrumb(field)}</Link>
      {' > '}
      <Link to={`/${field}/${area}`}>{formatBreadcrumb(area)}</Link>
      {' > '}
      {title}
    </BreadcrumbsContainer>
  );
};

const StyledBodyContent = styled.div`
  position: relative;
`;

const ArticlePage: FunctionComponent<any> = ({ data }) => {
  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter, body } = mdx;
  const { field, area, title } = frontmatter;

  return (
    <BasicPage>
      <StyledContentWrapper>
        <Breadcrumbs field={field} area={area} title={title} />
        <div>
          <StyledTitle>{title}</StyledTitle>
          <TitleBorder />
        </div>
        <StyledBodyContent className="blog-post-content">
          <MDXProvider
            components={{
              GlossaryTooltip,
              ImageCard,
              CodeHighlighter,
              FeaturedContent,
            }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </StyledBodyContent>
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
        field
        area
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
