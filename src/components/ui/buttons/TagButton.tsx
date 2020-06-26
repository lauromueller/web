import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

export type ButtonStyleProps = {
  type?: 'solid' | 'outlined';
  shape?: 'rounded' | 'pill';
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'light'
    | 'medium'
    | 'dark';
  borderRadius?: number;
};

const outlinedStyle = css`
  letter-spacing: 0.05em;
  font-weight: 700;
  font-size: 0.7rem;
  border: 1px solid var(--lm-color-success-shade);
  border-radius: 50px;
  padding: 6px 10px;
  margin-right: 8px;
  margin-top: 12px;
  background-color: transparent;
  color: var(--lm-color-success);

  transition: all 0.3s;

  &:hover {
    background-color: var(--lm-color-success-shade);
    cursor: pointer;
    color: var(--lm-color-success-contrast);
  }

  &:focus {
    outline: 0;
  }

  &:active {
    border-radius: var(--border-radius-default);
  }
`;

const StyledButton = styled.button`
  ${outlinedStyle}
`;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const TagButton: FunctionComponent<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default TagButton;
