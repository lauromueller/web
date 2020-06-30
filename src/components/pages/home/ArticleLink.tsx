import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { TagButton } from '../../ui/buttons';
import { Article } from './ArticleList';
import { parseArticleUrl } from '../../../utils';

const StyledLinkWrapper = styled.div`
  padding: 40px 0 24px 0;
  border-bottom: 1px solid var(--lm-color-light);
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
  margin-right: 16px;
`;

const StyledExcerpt = styled.p`
  margin-top: 0.67rem;
  margin-bottom: 0;

  p {
    margin-bottom: 0.5rem;
  }
`;

const StyledIcon = styled(props => <span {...props} />)`
  margin-right: 4px;
`;

export type ArticleLinkProps = {
  article: Article;
};

const ArticleLink: FunctionComponent<ArticleLinkProps> = ({ article }) => {
  const tags = article.frontmatter.tags.split(',').map(str => str.trim());

  const { field, area, slug } = article.frontmatter;

  return (
    <StyledLinkWrapper>
      <Link to={`${field}/${area}/${slug}`}>
        <h3>{article.frontmatter.title}</h3>
      </Link>
      <StyledIndicatorsWrapper>
        <StyledIndicator>
          <p>
            <StyledIcon role="img" aria-label="calendar">
              📅
            </StyledIcon>
            {article.frontmatter.date}
          </p>
        </StyledIndicator>
        <StyledIndicator>
          <p>
            <StyledIcon role="img" aria-label="clock">
              ⏱
            </StyledIcon>
            {article.fields.readingTime.text}
          </p>
        </StyledIndicator>
      </StyledIndicatorsWrapper>
      <StyledExcerpt dangerouslySetInnerHTML={{ __html: article.excerpt }} />
      <div>
        {tags.map(tag => (
          <TagButton>{tag}</TagButton>
        ))}
      </div>
    </StyledLinkWrapper>
  );
};

export default ArticleLink;
