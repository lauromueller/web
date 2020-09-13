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

export type ArticleSidebarProps = {
  isMainContentOverTheTop: boolean;
};

const StyledArticleSidebar = styled.div<{
  isOverTheTop: boolean;
  offsetLeft: number;
}>`
  width: 300px;
  ${({ isOverTheTop, offsetLeft }) => css`
    position: ${isOverTheTop ? 'fixed' : 'absolute'};
    ${isOverTheTop ? `left: ${offsetLeft}px;` : 'right: 0;'}
  `}

  top: 16px;
`;

const StyledSidebarContent = styled.div`
  margin-left: 20px;
  margin-top: 8px;
`;

const StyledTOC = styled.div`
  border: 1px solid var(--lm-color-primary);
  padding: 16px;
  margin-bottom: 16px;
`;

const StyledRelatedArticles = styled.div`
  border: 1px solid var(--lm-color-tertiary);
  padding: 16px;
  margin-bottom: 16px;
`;

const ArticleSidebar: FunctionComponent<ArticleSidebarProps> = ({
  isMainContentOverTheTop,
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
      <StyledSidebarContent>
        <StyledTOC>Test</StyledTOC>
        <StyledRelatedArticles>Articles</StyledRelatedArticles>
      </StyledSidebarContent>
    </StyledArticleSidebar>
  );
};

export default ArticleSidebar;
