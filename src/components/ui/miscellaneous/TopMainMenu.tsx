import React, { FunctionComponent, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { MainMenuButton } from '../buttons';
import { TopMenuSidebar } from './index';
import TopMenuIcon from '../../../assets/images/topMenuIcon.png';

export type TopMainMenuProps = {
  containerWidth: number;
};

const sharedDimensions = css`
  width: 24px;
  height: 20px;
`;

const StyledContainer = styled.div`
  ${sharedDimensions}
`;

const StyledSeparator = styled.span`
  color: var(--lm-color-secondary-shade);
  padding: 0 8px;
`;

const StyledImage = styled.img`
  ${sharedDimensions}

  &:hover {
    cursor: pointer;
  }
`;

const TopMainMenu: FunctionComponent<TopMainMenuProps> = ({
  containerWidth,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  /*
  useEffect(() => {
    if (containerWidth >= 530) {
      closeSidebar();
    }
  }, [containerWidth]);
  
   */

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <StyledContainer>
      <StyledImage src={TopMenuIcon} onClick={openSidebar} />
      <TopMenuSidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />
    </StyledContainer>
  );

  /*
  if (containerWidth < 530) {
    return (
      <div>
        <StyledImage src={TopMenuIcon} onClick={openSidebar}/>
        <TopMenuSidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      </div>
    )
  }

  return (
    <div>
      <MainMenuButton>Categories</MainMenuButton>
      <StyledSeparator>/</StyledSeparator>
      <MainMenuButton>Glossary</MainMenuButton>
      <StyledSeparator>/</StyledSeparator>
      <MainMenuButton>CV</MainMenuButton>
      <StyledSeparator>/</StyledSeparator>
      <MainMenuButton>Contact</MainMenuButton>
    </div>
  )

   */
};

export default TopMainMenu;
