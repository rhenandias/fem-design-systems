import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { defaultTheme, typeScale } from "../utils";

const BUTTON_MODIFIERS = {
  small: () => `
    padding: 4px 28px;
    min-width: 114px;
    min-height: 29px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 24px 64px;
    min-width: 244px;
    min-height: 51px;
  `,
};

const Button = styled.button`
  border: none;
  padding: 12px 64px;
  font-size: ${typeScale.paragraph};
  min-width: 186px;
  min-height: 45px;
  cursor: pointer;

  transition: background-color 0.2 linear, color 0.2s linear;

  &:hover:enabled {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 1px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 1px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    cursor: auto;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const PrimaryButton = styled(Button)`
  color: white;
  background-color: ${defaultTheme.primaryColor};

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButton = styled(Button)`
  color: ${defaultTheme.primaryColor};
  background-color: white;
  border: 1px solid ${defaultTheme.primaryColor};

  &:disabled {
    background-color: none;
    color: ${defaultTheme.disabled};
    border: 1px solid ${defaultTheme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const TertiaryButton = styled(Button)`
  color: ${defaultTheme.primaryColor};
  background-color: white;

  &:disabled {
    background-color: none;
    color: ${defaultTheme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
