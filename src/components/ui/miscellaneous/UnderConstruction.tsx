import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import UnderConstructionSvg from '../../../assets/images/underConstruction.inline.svg';

const StyledContainer = styled.div`
  max-width: 300px;
  margin: 80px auto 80px;

  @media (max-width: 576px) {
    margin: 20px auto 80px;
  }
`;

const StyledText = styled.h4`
  text-align: center;
  margin-top: 0;
  color: var(--lm-color-primary-tint);
`;

const UnderConstruction: FunctionComponent = () => {
  return (
    <StyledContainer>
      <UnderConstructionSvg />
      <StyledText>Undergoing a complete redesign!</StyledText>
    </StyledContainer>
  );
};

export default UnderConstruction;
