import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

const sharedDimensions = css`
  width: 24px;
  height: 20px;
`;

const StyledContainer = styled.div`
  ${sharedDimensions}
`;

const TopMainMenu: FunctionComponent = () => {
  return <StyledContainer>My menu</StyledContainer>;
};

export default TopMainMenu;
