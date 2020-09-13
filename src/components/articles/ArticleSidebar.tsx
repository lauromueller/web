import React, {
  FunctionComponent,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import { TableOfContents } from './Sidebar';

export type ArticleSidebarProps = {
  isMainContentOverTheTop: boolean;
  headings: any;
};

const StyledArticleSidebar = styled.div<{
  isOverTheTop: boolean;
  offsetLeft: number;
}>`
  width: 350px;
  ${({ isOverTheTop, offsetLeft }) => css`
    position: ${isOverTheTop ? 'fixed' : 'absolute'};
    ${isOverTheTop ? `left: ${offsetLeft}px;` : 'right: 0;'}
  `}

  top: 16px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const StyledSidebarContent = styled.div`
  margin-left: 20px;
  margin-top: 8px;
`;

const ArticleSidebar: FunctionComponent<ArticleSidebarProps> = ({
  isMainContentOverTheTop,
  headings,
}) => {
  const [offsetLeft, setOffsetLeft] = useState<number>(0);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarRef.current) {
      setOffsetLeft(sidebarRef.current.getBoundingClientRect().x);
    }
  }, [sidebarRef]);

  return (
    <StyledArticleSidebar
      ref={sidebarRef}
      isOverTheTop={isMainContentOverTheTop}
      offsetLeft={offsetLeft}
    >
      <StyledSidebarContent />
    </StyledArticleSidebar>
  );
};

export default ArticleSidebar;
