import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

const filledStyled = css`
  letter-spacing: 0.05em;
  font-weight: 700;
  font-size: 0.8rem;
  border-radius: 4px;
  padding: 6px 10px;
  border: 0;
  background-color: var(--lm-color-dark);
  color: var(--lm-color-secondary);

  transition: all 0.3s;

  &:hover {
    background-color: var(--lm-color-dark-tint);
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;

const StyledButton = styled.button`
  ${filledStyled}
`;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const CopyCodeButton: FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default CopyCodeButton;
