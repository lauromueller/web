import React from 'react';
import styled from 'styled-components';
import FeaturedImage from '../../../assets/images/featured-image.png';

const StyledWrapper = styled.div`
  margin: 28px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 576px) {
    margin: 28px 0 0 0;
  }
`;

const StyledImage = styled.img`
  border-radius: 100rem;
  margin-right: 16px;
  height: 96px;
  width: auto;
  object-fit: cover;
  object-position: center center;
  -webkit-box-shadow: 0 0 10px 0 rgba(196, 196, 196, 1);
  -moz-box-shadow: 0 0 10px 0 rgba(196, 196, 196, 1);
  box-shadow: 0 0 10px -2px #aaaaaa;
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledH5 = styled.h5`
  margin: 0;
  color: #666666;
`;

const StyledH6 = styled.h6`
  margin-top: 8px;
  color: #666666;
`;

const AuthorIntroduction = () => {
  return (
    <StyledWrapper>
      <StyledImage src={FeaturedImage} />
      <StyledDescriptionWrapper>
        <StyledH5>A blog by Lauro Fialho Müller</StyledH5>
        <StyledH6>Learning afficionado.</StyledH6>
      </StyledDescriptionWrapper>
    </StyledWrapper>
  );
};

export default AuthorIntroduction;
