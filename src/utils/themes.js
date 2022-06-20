import { primary, neutral } from "./colors";
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
};
