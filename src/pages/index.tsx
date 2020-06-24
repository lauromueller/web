import React, { FunctionComponent } from 'react';
import { BasicPage } from '../layout';
import { CategoryButtons, FeaturedText } from '../components/pages/home';

const Index: FunctionComponent = () => {
  return (
    <BasicPage>
      <FeaturedText>
        On Software Engineering, Artificial Intelligence, and Business
      </FeaturedText>
      <CategoryButtons />
    </BasicPage>
  );
};

export default Index;
