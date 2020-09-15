import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export type DefinitionProps = {
  title: string;
};

const StyledExampleWrapper = styled.div`
  background-color: var(--lm-color-light);
  border-left: 8px solid var(--lm-color-primary);
  margin: 32px 0;
`;

const StyledExampleTitle = styled.div`
  background-color: var(--lm-color-light-shade);
  padding: 10px !important;
  font-weight: 500;
`;

const StyledExampleContent = styled.div`
  padding: 32px 16px !important;

  & .katex-display {
    margin: 0 !important;
  }
`;

const Example: FunctionComponent<DefinitionProps> = ({ title, children }) => {
  return (
    <StyledExampleWrapper>
      <StyledExampleTitle>{title}</StyledExampleTitle>
      <StyledExampleContent>{children}</StyledExampleContent>
    </StyledExampleWrapper>
  );
};

export default Example;
