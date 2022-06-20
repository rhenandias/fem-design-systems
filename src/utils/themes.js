import { primary, neutral, yellow, red, green } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: primary[200],
  primaryHoverColor: primary[300],
  primaryActiveColor: primary[100],

  textColor: neutral[600],
  textColorOnPrimary: neutral[100],
  textColorInverted: neutral[100],

  disabled: neutral[400],
  textOnDisabled: neutral[100],

  primaryFont,

  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
