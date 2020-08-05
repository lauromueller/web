import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { TagButton } from '../ui/buttons';

export type FeaturedContentProps = {
  tags: string[];
};

const FeaturedContentText = styled.p`
  font-family: 'PT Serif', serif;
  font-style: italic;
  font-size: 1.25rem;
  line-height: 2rem;
  padding: unset !important;

  @media (max-width: 576px) {
    font-size: 1.125rem;
    line-height: 1.7rem;
  }
`;

const FeaturedTags = styled.div``;

const FeaturedContentWrapper = styled.div`
  border-bottom: 1px solid var(--lm-color-secondary-shade);
`;

const FeaturedContent: FunctionComponent<{ tags: string[] }> = ({
  tags,
  children,
}) => {
  return (
    <FeaturedContentWrapper>
      <FeaturedTags>
        {tags.map(tag => (
          <TagButton>{tag}</TagButton>
        ))}
      </FeaturedTags>
      <FeaturedContentText>{children}</FeaturedContentText>
    </FeaturedContentWrapper>
  );
};

export default FeaturedContent;
