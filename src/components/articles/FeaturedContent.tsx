import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { TagButton } from '../ui/buttons';

export type FeaturedContentProps = {
  tags?: string[];
};

const FeaturedContentText = styled.p`
  font-family: 'PT Serif', serif;
  font-style: italic;
  font-size: 1.25rem;
  line-height: 2rem;
  padding: unset !important;
  letter-spacing: 0.01rem !important;
  width: 100% !important;
  margin-left: unset !important;

  @media (max-width: 576px) {
    font-size: 1.125rem;
    line-height: 1.7rem;
  }
`;

const FeaturedTags = styled.div`
  margin-bottom: 20px;
`;

const FeaturedContentWrapper = styled.div`
  border-bottom: 1px solid var(--lm-color-secondary-shade);
`;

const FeaturedContent: FunctionComponent<{ tags: string[] }> = ({
  tags,
  children,
}) => {
  return (
    <FeaturedContentWrapper>
      <FeaturedContentText>{children}</FeaturedContentText>
      {tags && (
        <FeaturedTags>
          {tags.map(tag => (
            <TagButton>{tag}</TagButton>
          ))}
        </FeaturedTags>
      )}
    </FeaturedContentWrapper>
  );
};

export default FeaturedContent;
