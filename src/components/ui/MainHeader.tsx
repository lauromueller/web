import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { MainMenuButton } from './buttons';

const StyledLogo = styled.h4`
  margin: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const StyledHeader = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainHeader: FunctionComponent = props => {
  return (
    <StyledHeader {...props}>
      <StyledLogo>Lauro Müller</StyledLogo>
      <div>
        <MainMenuButton>Home</MainMenuButton>
        <MainMenuButton>CV</MainMenuButton>
        <MainMenuButton>Contact</MainMenuButton>
      </div>
    </StyledHeader>
  );
};

export default MainHeader;
