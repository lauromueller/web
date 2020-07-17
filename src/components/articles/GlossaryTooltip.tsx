import React, { FunctionComponent } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Glossary } from '../ui';

export type GlossaryTooltipProps = {
  slug: string;
};

const StyledHeader = styled.h5`
  text-align: left !important;
  margin: 16px 0 !important;
  padding: 0 !important;
`;

const StyledContent = styled.p`
  width: 250px !important;
  padding: 0 !important;
  font-size: 0.8rem !important;
  line-height: 1rem !important;
  font-family: 'PT Sans', sans-serif !important;
  margin-bottom: 16px !important;
`;

const StyledHR = styled.hr`
  height: 1px !important;
  border: none !important;
  background-color: var(--lm-color-secondary) !important;
`;

const StyledLink = styled(props => <Link {...props} />)`
  font-family: 'PT Sans', sans-serif !important;
  display: block !important;
  text-align: right !important;
  margin-bottom: 8px !important;
`;

const StyledA = styled.a`
  color: var(--lm-color-dark);
  border-bottom: 1px dashed var(--lm-color-dark) !important;
`;

const GlossaryTooltip: FunctionComponent<GlossaryTooltipProps> = ({
  slug,
  children,
}) => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        limit: 1000000
        filter: { fileAbsolutePath: { regex: "/(glossary)/.*(mdx?)$/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
            excerpt
          }
        }
      }
    }
  `);

  const { excerpt, title } = data.allMdx.edges
    .filter(({ node }: any) => node.frontmatter.slug === slug)
    .map(({ node }: any) => ({
      excerpt: node.excerpt,
      title: node.frontmatter.title,
    }))[0];

  const dataId = title + slug;

  return (
    <>
      <StyledA data-tip data-for={dataId} data-place="top">
        {children}
      </StyledA>
      <Glossary id={dataId}>
        <StyledHeader>{title}</StyledHeader>
        <StyledHR />
        <StyledContent>{excerpt}</StyledContent>
        <StyledLink to={`/${slug}`}>See full definition</StyledLink>
      </Glossary>
    </>
  );
};

export default GlossaryTooltip;
