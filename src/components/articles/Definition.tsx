import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export type DefinitionProps = {
  title: string;
};

const StyledDefinitionWrapper = styled.div`
  background-color: var(--lm-color-light);
  border-left: 8px solid var(--lm-color-tertiary);
  margin: 32px 0;
`;

const StyledDefinitionTitle = styled.div`
  background-color: var(--lm-color-light-shade);
  padding: 10px !important;
  font-weight: 500;
`;

const StyledDefinitionContent = styled.div`
  padding: 32px 16px !important;

  & .katex-display {
    margin: 0 !important;
  }
`;

const Definition: FunctionComponent<DefinitionProps> = ({
  title,
  children,
}) => {
  return (
    <StyledDefinitionWrapper>
      <StyledDefinitionTitle>{title}</StyledDefinitionTitle>
      <StyledDefinitionContent>{children}</StyledDefinitionContent>
    </StyledDefinitionWrapper>
  );
};

export default Definition;
