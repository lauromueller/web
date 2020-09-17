import React, { FunctionComponent } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export type ExampleStyleProps = {
  alignEquationsLeft?: boolean;
};

export type ExampleProps = ExampleStyleProps & {
  title: string;
};

const StyledExampleWrapper = styled.div`
  background-color: var(--lm-color-light);
  border-left: 8px solid var(--lm-color-primary-tint);
  margin: 32px 0;
`;

const StyledExampleTitle = styled.div`
  background-color: var(--lm-color-primary-tint);
  padding: 10px 2px !important;
  font-weight: 500;
  color: var(--lm-color-light);
`;

const StyledExampleContent = styled.div<ExampleStyleProps>`
  padding: 16px !important;

  p:first-child {
    margin-top: 0 !important;
  }

  & .katex-display {
    margin: 0 !important;
  }

  .gatsby-resp-image-wrapper {
    margin: 0 !important;
  }

  ${({ alignEquationsLeft }): FlattenSimpleInterpolation =>
    alignEquationsLeft
      ? css`
          & .katex-display > .katex > .katex-html {
            display: block;
            text-align: left !important;
            white-space: nowrap;
            margin-left: 2rem !important;

            @media (max-width: 576px) {
              margin-left: 1rem !important;
            }
          }
        `
      : css``}
`;

const Example: FunctionComponent<ExampleProps> = ({
  title,
  children,
  alignEquationsLeft = false,
}) => {
  return (
    <StyledExampleWrapper>
      <StyledExampleTitle>{title}</StyledExampleTitle>
      <StyledExampleContent alignEquationsLeft={alignEquationsLeft}>
        {children}
      </StyledExampleContent>
    </StyledExampleWrapper>
  );
};

export default Example;
