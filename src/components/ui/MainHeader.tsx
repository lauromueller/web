import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MainMenuButton } from './buttons';
import FeaturedImage from '../../assets/images/featuredImage.png';

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
  }
`;

const StyledImage = styled.img`
  width: 48px;
  height: auto;

  @media (max-width: 576px) {
    width: 36px;
  }
`;

const StyledSeparator = styled.span`
  color: var(--lm-color-secondary-shade);
  padding: 0 8px;
`;

const MainHeader: FunctionComponent = props => {
  return (
    <StyledHeader {...props}>
      <StyledLink to="/">
        <StyledImage src={FeaturedImage} />
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
