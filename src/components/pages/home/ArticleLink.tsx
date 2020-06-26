import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { TagButton } from '../../ui/buttons';
import { Article } from './ArticleList';

const StyledLinkWrapper = styled.div`
  padding: 40px 0 24px 0;
  border-bottom: 1px solid var(--lm-color-primary-light);
  display: inline-block;

  @media (max-width: 768px) {
    padding: 24px 0 12px 0;
  }
`;

const StyledIndicatorsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  p {
    margin: 4px 0;
    font-family: 'PT Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
  }
`;

const StyledIndicator = styled.div`
  margin-right: 12px;
`;

const StyledExcerpt = styled.p`
  margin-top: 0.67rem;
  margin-bottom: 0;
`;

export type ArticleLinkProps = {
  article: Article;
};

const ArticleLink: FunctionComponent<ArticleLinkProps> = ({ article }) => {
  const categories = article.frontmatter.categories
    .split(',')
    .map(str => str.trim());

  return (
    <StyledLinkWrapper>
      <Link to={article.frontmatter.slug}>
        <h3>{article.frontmatter.title}</h3>
      </Link>
      <StyledIndicatorsWrapper>
        <StyledIndicator>
          <p>
            <span role="img" aria-label="calendar">
              📅
            </span>
            {article.frontmatter.date}
          </p>
        </StyledIndicator>
        <StyledIndicator>
          <p>
            <span role="img" aria-label="clock">
              ⏱
            </span>
            {article.fields.readingTime.text}
          </p>
        </StyledIndicator>
      </StyledIndicatorsWrapper>
      <StyledExcerpt>{article.excerpt}</StyledExcerpt>
      <div>
        {categories.map(category => (
          <TagButton>{category}</TagButton>
        ))}
      </div>
    </StyledLinkWrapper>
  );
};

export default ArticleLink;
