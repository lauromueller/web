import React, { FunctionComponent, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import UnderConstructionSvg from '../../../assets/images/sidebarUnderConstruction.inline.svg';
import CloseIcon from '../../../assets/images/closeIcon.png';

export type AnimationTopMenuSidebar = 'open' | 'close';

export type TopMenuSidebarProps = {
  isSidebarOpen: boolean | null;
  closeSidebar: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

type StyleProps = {
  animation: AnimationTopMenuSidebar;
};

const SIDEBAR_WIDTH = 300;

const StyledSidebarContainer = styled.div<StyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(var(--lm-color-dark-rgb), 0.7);
  opacity: 0;
  transition: 0.5s all cubic-bezier(0.09, 0.64, 0.43, 0.92);
  z-index: 9998;

  ${({ animation }) =>
    animation === 'open'
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

const StyledSidebar = styled.div<StyleProps>`
  position: fixed;
  top: 0;
  width: ${SIDEBAR_WIDTH}px;
  height: 100%;
  right: -${SIDEBAR_WIDTH}px;
  background-color: #fff;
  transition: 0.5s all cubic-bezier(0.09, 0.64, 0.43, 0.92);
  z-index: 9999;

  ${({ animation }) =>
    animation === 'open'
      ? css`
          right: 0;
        `
      : css`
          right: -${SIDEBAR_WIDTH}px;
        `}
`;

const SidebarContent = styled.div`
  margin: 24px;
`;

const CloseSidebarWrapper = styled.div`
  font-size: 0.8rem;
  margin: 16px 0;
  display: flex;
  justify-content: start;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  & span {
    margin-top: 2px;
  }
`;

const StyledImage = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;

const TopMenuSidebar: FunctionComponent<TopMenuSidebarProps> = ({
  closeSidebar,
  isSidebarOpen,
}) => {
  const [animation, setAnimation] = useState<AnimationTopMenuSidebar>('close');

  useEffect(() => {
    if (isSidebarOpen) {
      setAnimation('open');
    }
  }, [isSidebarOpen]);

  const dismissSidebar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnimation('close');
    setTimeout(() => closeSidebar(e), 500);
  };

  if (isSidebarOpen) {
    return (
      <div>
        <StyledSidebarContainer
          animation={animation}
          onClick={dismissSidebar}
        />
        <StyledSidebar animation={animation}>
          <SidebarContent>
            <CloseSidebarWrapper onClick={dismissSidebar}>
              <StyledImage src={CloseIcon} />
              <span>Close</span>
            </CloseSidebarWrapper>
            <UnderConstructionSvg />
            <h5 style={{ textAlign: 'center' }}>
              Also undergoing reconstruction :)
            </h5>
          </SidebarContent>
        </StyledSidebar>
      </div>
    );
  }

  return <div />;
};

export default TopMenuSidebar;
