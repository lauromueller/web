import React, { FunctionComponent, useState } from 'react';
import styled, { css } from 'styled-components';
import { TopMenuSidebar } from './index';
import TopMenuIcon from '../../../assets/images/topMenuIcon.png';

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

const TopMainMenu: FunctionComponent = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

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
};

export default TopMainMenu;
