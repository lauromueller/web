import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledFeaturedText = styled.h3`
  font-weight: 700;
  margin: 80px 0 12px 0;

  @media (max-width: 768px) {
    margin: 48px 0 12px 0;
  }
`;

const FeaturedText: FunctionComponent = ({ children, ...rest }) => {
  return <StyledFeaturedText {...rest}>{children}</StyledFeaturedText>;
};

export default FeaturedText;
