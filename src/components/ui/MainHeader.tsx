import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MainMenuButton } from './buttons';

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--lm-color-dark);
  text-decoration: none;
`;

const StyledH4 = styled.h4`
  margin: 0;
  font-weight: 700;

  @media (min-width: 576px) {
    margin: -8px 0 0 0;
  }
`;

const StyledHeader = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    margin-top: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledSeparator = styled.span`
  color: var(--lm-color-secondary-shade);
`;

const MainHeader: FunctionComponent = props => {
  return (
    <StyledHeader {...props}>
      <StyledLink to="/">
        <StyledH4>Lauro Müller</StyledH4>
      </StyledLink>
      <div>
        {/*
        <MainMenuButton>Series</MainMenuButton>
        <StyledSeparator>/</StyledSeparator>
        */}
        <MainMenuButton>Glossary</MainMenuButton>
        <StyledSeparator>/</StyledSeparator>
        <MainMenuButton>CV</MainMenuButton>
        <StyledSeparator>/</StyledSeparator>
        <MainMenuButton>Contact</MainMenuButton>
      </div>
    </StyledHeader>
  );
};

export default MainHeader;
