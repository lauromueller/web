import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { CategoryButton } from '../../ui';

const StyledCategoryButtons = styled.div``;

const CategoryButtons: FunctionComponent = () => {
  return (
    <StyledCategoryButtons>
      <CategoryButton>Agile Practices</CategoryButton>
      <CategoryButton>Visual Analytics</CategoryButton>
      <CategoryButton>Machine Learning</CategoryButton>
    </StyledCategoryButtons>
  );
};

export default CategoryButtons;
