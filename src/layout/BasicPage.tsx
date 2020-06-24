import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { MainHeader } from '../components/ui';

const StyledLayout = styled.div`
  background: #fff !important;
  min-height: 100vh;
  max-width: 800px;
  margin: 24px auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    margin: 16px auto;
  }
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
