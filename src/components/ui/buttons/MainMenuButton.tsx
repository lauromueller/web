import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

const outlinedStyle = css`
  letter-spacing: 0.05em;
  border: 0;
  padding: 0;
  background-color: transparent;
  color: var(--lm-color-primary);
  font-size: 1rem;
  transition: all 0.4s;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }

  &:active {
    border: 0 !important;
    border-radius: var(--border-radius-default);
    color: var(--lm-color-primary-tint);
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const StyledButton = styled.button`
  ${outlinedStyle}
`;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const MainMenuButton: FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => <StyledButton {...rest}>{children}</StyledButton>;

export default MainMenuButton;
