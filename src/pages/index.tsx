import React, { FunctionComponent } from 'react';
import { BasicPage } from '../layout';
import { CategoryButtons, FeaturedText } from '../components/pages/home';

const Index: FunctionComponent = () => {
  return (
    <BasicPage>
      <FeaturedText>
        On Software Engineering, Analytics, and Business.
      </FeaturedText>
      <CategoryButtons />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        diam ex, porttitor ut ante et, tristique tincidunt nisi. Aliquam porta
        ligula quis ex varius, eget ornare sem ullamcorper. Cras leo nunc,
        dapibus ac nisi sed, mollis elementum arcu. Sed vulputate dignissim nunc
        in porttitor. Phasellus ultricies nisi maximus, commodo arcu eget,
        ornare elit. Praesent mattis sem in odio laoreet, non porttitor leo
        faucibus. Nulla ac mauris sit amet nulla accumsan tincidunt. Fusce erat
        nisl, convallis sed lobortis at, commodo at nisl. Nam bibendum molestie
        orci, et sollicitudin ligula ultrices quis. Vestibulum imperdiet posuere
        dignissim. Praesent imperdiet odio nec arcu ultrices sagittis. Praesent
        purus libero, condimentum ac porta et, consectetur eget mauris.
      </p>
    </BasicPage>
  );
};

export default Index;
