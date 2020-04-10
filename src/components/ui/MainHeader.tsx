import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h4`
  margin: 0;
`;

const StyledHeader = styled.div`
  background: #fff;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainHeader: FunctionComponent = props => {
  return (
    <StyledHeader {...props}>
      <StyledLogo>Lauro Müller</StyledLogo>
      <div>Articles / About</div>
    </StyledHeader>
  );
};

export default MainHeader;
