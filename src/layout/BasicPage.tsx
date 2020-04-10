import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { MainHeader } from '../components/ui';

const StyledLayout = styled.div`
  background: #fff !important;
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
`;

const BasicPage: FunctionComponent = ({ children }) => {
  return (
    <StyledLayout>
      <MainHeader />
      {children}
    </StyledLayout>
  );
};

export default BasicPage;
