import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MainMenuButton } from '../buttons';
import { TopMenuSidebar } from './index';
import TopMenuIcon from '../../../assets/images/topMenuIcon.png';

export type TopMainMenuProps = {
  containerWidth: number;
};

const StyledSeparator = styled.span`
  color: var(--lm-color-secondary-shade);
  padding: 0 8px;
`;

const StyledImage = styled.img`
  width: 20px;
  height: 16px;
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
    <div>
      <StyledImage src={TopMenuIcon} onClick={openSidebar} />
      <TopMenuSidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />
    </div>
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
