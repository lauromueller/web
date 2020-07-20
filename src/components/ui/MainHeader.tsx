import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { withResizeDetector } from 'react-resize-detector';
import FeaturedImage from '../../assets/images/featuredImage2.png';
import { TopMainMenu } from './miscellaneous';

export type MainHeaderProps = {
  width: number;
};

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--lm-color-dark);
  text-decoration: none;
  width: 48px;
  height: 48px;

  @media (max-width: 576px) {
    width: 36px;
    height: 36px;
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
  height: 48px;

  @media (max-width: 576px) {
    width: 36px;
    height: 36px;
  }
`;

const MainHeader: FunctionComponent<MainHeaderProps> = ({
  width,
  ...props
}) => {
  return (
    <StyledHeader {...props}>
      <StyledLink to="/">
        <StyledImage src={FeaturedImage} />
      </StyledLink>
      <TopMainMenu containerWidth={width} />
    </StyledHeader>
  );
};

export default withResizeDetector(MainHeader);
