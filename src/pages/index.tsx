import React from 'react';
import { BasicPage } from '../layout';
import {
  ArticleList,
  AuthorIntroduction,
  CategoryButtons,
  FeaturedText,
} from '../components/pages/home';
import { UnderConstruction } from '../components/ui/miscellaneous';

const Index = () => {
  return (
    <BasicPage>
      <FeaturedText>
        On Software Engineering, AI, Analytics, and Business.
      </FeaturedText>
      {/*
      <CategoryButtons />
      <AuthorIntroduction />
      <ArticleList />
      */}
      <UnderConstruction />
    </BasicPage>
  );
};

export default Index;
