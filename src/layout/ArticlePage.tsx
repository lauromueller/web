import React, {
  FunctionComponent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { withResizeDetector } from 'react-resize-detector';
import { BasicPage } from '.';
import {
  ArticleSidebar,
  CodeHighlighter,
  Definition,
  FeaturedContent,
  GlossaryTooltip,
  ImageCard,
} from '../components/articles';

export type BreadcrumbsProps = {
  field: string;
  area: string;
  title: string;
};

const StyledContentWrapper = styled.div`
  margin: 56px auto;
  width: 100%;

  @media (max-width: 768px) {
    margin: 32px auto;
  }

  @media (max-width: 576px) {
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
  max-width: 692px;
`;

const StyledMainContentWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 692px;
`;

const ArticlePage: FunctionComponent<any> = ({ data, height, width }) => {
  console.log(height, width);
  const [isOverTheTop, setIsOverTheTop] = useState<boolean>(false);
  const mainContentRef = useRef<HTMLDivElement>();

  const onScroll = useCallback(() => {
    if (mainContentRef.current) {
      const tempIsOver = mainContentRef.current.getBoundingClientRect().y < 0;
      if (isOverTheTop !== tempIsOver) {
        setIsOverTheTop(tempIsOver);
      }
    }
  }, [mainContentRef, isOverTheTop]);

  useEffect(() => {
    if (mainContentRef.current) {
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }

    return () => 1;
  }, [mainContentRef, isOverTheTop, setIsOverTheTop, onScroll]);

  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter, body } = mdx;
  const { field, area, title } = frontmatter;

  return (
    <BasicPage>
      <StyledContentWrapper>
        <Breadcrumbs field={field} area={area} title={title} />
        <StyledMainContentWrapper
          ref={mainContentRef as RefObject<HTMLDivElement>}
        >
          <StyledBodyContent className="blog-post-content">
            <div>
              <StyledTitle>{title}</StyledTitle>
              <TitleBorder />
            </div>
            <MDXProvider
              components={{
                CodeHighlighter,
                Definition,
                FeaturedContent,
                GlossaryTooltip,
                ImageCard,
              }}
            >
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </StyledBodyContent>
        </StyledMainContentWrapper>
      </StyledContentWrapper>
    </BasicPage>
  );
};

export default withResizeDetector(ArticlePage);

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
      headings {
        depth
        value
      }
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
