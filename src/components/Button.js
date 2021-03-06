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
    padding: 12px 64px;
    min-width: 244px;
    min-height: 51px;
  `,
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};

    &:hover:enabled, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 1px solid ${defaultTheme.status.warningColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  error: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};

    &:hover:enabled, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 1px solid ${defaultTheme.status.errorColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive}
    }
  `,
  success: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};

    &:hover:enabled, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 1px solid ${defaultTheme.status.successColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive}
    }
  `,
  warningSecondary: () => `
    background: none;
    border: 1px solid ${defaultTheme.status.warningColor};
    color: ${defaultTheme.status.warningColor};

    &:hover:enabled {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 1px solid ${defaultTheme.status.warningColorHover};
      border-color: ${defaultTheme.status.warningColorHover};
      color: ${defaultTheme.status.textColorInverted};
    }

    &:focus {
      outline: 1px solid ${defaultTheme.status.warningColorHover};
      outline-offset: 1px;
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  errorSecondary: () => `
    background: none;
    border: 1px solid ${defaultTheme.status.errorColor};
    color: ${defaultTheme.status.errorColor};

    &:hover:enabled {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 1px solid ${defaultTheme.status.errorColorHover};
      border-color: ${defaultTheme.status.errorColorHover};
    }

    &:focus {
      outline: 1px solid ${defaultTheme.status.errorColorHover};
      outline-offset: 1px;
    }

    &:active {
      background-color: ${defaultTheme.status.errorColorActive}
      color: ${defaultTheme.textColorInverted};
    }
  `,
  successSecondary: () => `
    background: none;
    border: 1px solid ${defaultTheme.status.successColor};
    color: ${defaultTheme.status.successColor};

    &:hover:enabled {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 1px solid ${defaultTheme.status.successColorHover};
      border-color: ${defaultTheme.status.successColorHover};
    }

    &:focus {
      outline: 1px solid ${defaultTheme.status.successColorHover};
      outline-offset: 1px;
    }

    &:active {
      background-color: ${defaultTheme.status.successColorActive}
      color: ${defaultTheme.textColorInverted};
    }
  `,
};

const Button = styled.button`
  border: none;
  padding: 12px 64px;
  font-size: ${typeScale.paragraph};
  min-width: 186px;
  min-height: 45px;
  cursor: pointer;

  flex-grow: 0;

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

  &:hover:enabled {
    border-color: ${defaultTheme.primaryHoverColor};
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
