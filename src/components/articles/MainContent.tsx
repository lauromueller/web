import React, {
  FunctionComponent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { ArticleSidebar } from './index';

export type MainContentProps = {
  articleIdentifier: string;
};

const StyledMainContentWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledArticleBody = styled.div`
  max-width: 600px;
  position: absolute;
  left: 0;
  top: 0;
`;

const MainContent: FunctionComponent<MainContentProps> = ({
  children,
  articleIdentifier,
}) => {
  const [isOverTheTop, setIsOverTheTop] = useState<boolean>(false);
  const mainContentRef = useRef<HTMLDivElement>();

  const onScroll = useCallback(() => {
    if (mainContentRef.current) {
      const tempIsOver = mainContentRef.current.getBoundingClientRect().y < 0;
      if (isOverTheTop !== tempIsOver) {
        setIsOverTheTop(tempIsOver);
      }
    }
  }, [mainContentRef, isOverTheTop]);

  useEffect(() => {
    if (mainContentRef.current) {
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }

    return () => 1;
  }, [mainContentRef, isOverTheTop, setIsOverTheTop, onScroll]);

  return (
    <StyledMainContentWrapper>
      <StyledArticleBody ref={mainContentRef as RefObject<HTMLDivElement>}>
        {children}
      </StyledArticleBody>
      <ArticleSidebar isMainContentOverTheTop={isOverTheTop} />
    </StyledMainContentWrapper>
  );
};

export default MainContent;
