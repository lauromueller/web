import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

const outlinedStyle = css`
  letter-spacing: 0.05em;
  font-weight: 700;
  font-size: 0.7rem;
  border: 1px solid var(--lm-color-tertiary);
  border-radius: 50px;
  padding: 6px 10px;
  margin-right: 8px;
  margin-top: 12px;
  background-color: transparent;
  color: var(--lm-color-tertiary);

  transition: all 0.3s;

  &:hover {
    background-color: var(--lm-color-tertiary);
    cursor: pointer;
    color: white;
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

const CategoryButton: FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default CategoryButton;
