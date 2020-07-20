import React from 'react';
import { BasicPage } from '../layout';
import {
  ArticleList,
  AuthorIntroduction,
  CategoryButtons,
  FeaturedText,
} from '../components/pages/home';

const Index = () => {
  return (
    <BasicPage>
      <FeaturedText>
        On Software Engineering, AI, Analytics, and Business.
      </FeaturedText>
      <CategoryButtons />
      <AuthorIntroduction />
      <ArticleList />
    </BasicPage>
  );
};

export default Index;
