import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  border-radius: 8px;
  border: 1px solid var(--lm-color-secondary-shade);
  box-shadow: 0 0 12px -2px var(--lm-color-secondary-shade);
  margin: 40px 0;
`;

const ImageCard: FunctionComponent = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ImageCard;
