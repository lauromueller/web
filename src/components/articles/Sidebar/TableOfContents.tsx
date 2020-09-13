import React, { FunctionComponent, useContext, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { slugger } from '../../../utils';

export type TableOfContentsHeadingProps = {
  value: string;
  depth: number;
};

export type TableOfContentsProps = {
  headings: TableOfContentsHeadingProps[];
};

const StyledTopBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 1px;
  width: 100px;
  background-image: linear-gradient(
    to right,
    var(--lm-color-primary),
    var(--lm-color-tertiary)
  );
`;

const StyledLeftBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  width: 1px;
  background-image: linear-gradient(
    to bottom,
    var(--lm-color-primary),
    var(--lm-color-tertiary)
  );
`;

const StyledBottomBorder = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 1px;
  width: 100px;
  background-image: linear-gradient(
    to left,
    var(--lm-color-primary),
    var(--lm-color-tertiary)
  );
`;

const StyledRightBorder = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100px;
  width: 1px;
  background-image: linear-gradient(
    to top,
    var(--lm-color-primary),
    var(--lm-color-tertiary)
  );
`;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  display: inline-block;
`;

const StyledContent = styled.div`
  margin: 1rem;
`;

const StyledLineWrapper = styled.div`
  margin: 24px 0;
`;

const StyledLine = styled.div<{ depth: number }>`
  margin: 8px 0;
  ${({ depth }) => css`
    margin-left: ${(depth - 2) * 16}px;
  `}

  a {
    color: var(--lm-color-dark);
    text-decoration: none;
  }
`;

const TableOfContents: FunctionComponent<TableOfContentsProps> = ({
  headings,
}) => {
  slugger.reset();

  return (
    <StyledContainer>
      <StyledTopBorder />
      <StyledLeftBorder />
      <StyledBottomBorder />
      <StyledRightBorder />
      <StyledContent>
        <h5>Table of contents</h5>
        <StyledLineWrapper>
          {headings
            .filter(heading => heading.depth !== 1)
            .map(heading => (
              <StyledLine key={heading.value} depth={heading.depth}>
                <Link to={`#${slugger.slug(heading.value)}`}>
                  {heading.value}
                </Link>
              </StyledLine>
            ))}
        </StyledLineWrapper>
      </StyledContent>
    </StyledContainer>
  );
};

export default TableOfContents;
