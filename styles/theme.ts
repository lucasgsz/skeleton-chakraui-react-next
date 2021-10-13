import { theme as themeDefault, Theme as DefaultTheme } from "@chakra-ui/theme";

const theme: DefaultTheme = {
  ...themeDefault,
  fonts: {
    ...themeDefault.fonts,
    body: "Roboto",
  },
};

export default theme;
