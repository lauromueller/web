import React, { FunctionComponent } from 'react';
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
    padding: 0 1.7rem;
  }

  ol,
  ul {
    padding: 0 1.7rem 0 4rem;
  }

  @media (max-width: 768px) {
    margin: 32px auto;
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

    ol,
    ul {
      padding: 0 0 0 1.5rem;
    }

    margin: 32px auto;
  }
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

const formatBreadcrumb = (b: string) => {
  const newStr = b.replace('-', ' ');

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

const ArticlePage: FunctionComponent<any> = ({ data }) => {
  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter, body } = mdx;
  const { field, area, title } = frontmatter;

  return (
    <BasicPage>
      <StyledContentWrapper>
        <Breadcrumbs field={field} area={area} title={title} />
        <h1>{title}</h1>
        <div className="blog-post-content">
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
