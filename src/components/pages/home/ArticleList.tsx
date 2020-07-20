import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import ArticleLink from './ArticleLink';

export type Article = {
  id: string;
  excerpt: string;
  frontmatter: {
    date: string;
    slug: string;
    field: string;
    area: string;
    title: string;
    category: string;
    tags: string[];
  };
  fields: {
    readingTime: {
      text: string;
    };
  };
};

export type ArticleEdge = {
  node: Article;
};

export type ArticleList = {
  allMdx: {
    edges: ArticleEdge[];
  };
};

const StyledArticleListWrapper = styled.div`
  margin-top: 24px;

  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

const articlesQuery = graphql`
  query {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { draft: { eq: false } }
        fileAbsolutePath: { regex: "/(articles)/.*(mdx?)$/" }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            field
            area
            slug
            title
            tags
            category
          }
        }
      }
    }
  }
`;

const ArticleList: FunctionComponent = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery<ArticleList>(articlesQuery);

  const Articles = edges.map(edge => (
    <ArticleLink key={edge.node.id} article={edge.node} />
  ));

  return <StyledArticleListWrapper>{Articles}</StyledArticleListWrapper>;
};

export default ArticleList;
