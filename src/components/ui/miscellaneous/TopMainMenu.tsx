import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import YoutubeLogo from '../../../assets/images/youtube-logo.inline.svg';
import GitHubLogo from '../../../assets/images/github-logo.inline.svg';
import LinkedInLogo from '../../../assets/images/linked-in-logo.inline.svg';
import EmailLogo from '../../../assets/images/email-logo.inline.svg';

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  & svg {
    width: 32px;
    height: 32px;
    :not(:last-child) {
      margin-right: 8px;
    }
  }
`;

const TopMainMenu: FunctionComponent = () => {
  return (
    <StyledContainer>
      <YoutubeLogo />
      <GitHubLogo />
      <LinkedInLogo />
      <EmailLogo />
    </StyledContainer>
  );
};

export default TopMainMenu;
