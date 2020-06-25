import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

const outlinedStyle = css`
  letter-spacing: 0.05em;
  font-weight: 700;
  border: 0;
  border-radius: 50px;
  padding: 8px 16px;
  margin: 0 4px;
  background-color: transparent;
  color: var(--lm-color-primary);
  font-size: 1.2rem;
  transition: all 0.4s;

  &:hover {
    background-color: var(--lm-color-primary-light);
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px;
    margin: 0 2px;
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
