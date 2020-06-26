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
    title: string;
    level: string;
    categories: string;
    draft: string;
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
  allMarkdownRemark: {
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            level
            categories
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;

const ArticleList: FunctionComponent = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery<ArticleList>(articlesQuery);

  const Articles = edges
    .filter(edge => !edge.node.frontmatter.draft)
    .map(edge => <ArticleLink key={edge.node.id} article={edge.node} />);

  return <StyledArticleListWrapper>{Articles}</StyledArticleListWrapper>;
};

export default ArticleList;
