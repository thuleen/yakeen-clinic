import { createTheme } from "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    white: PaletteColorOptions;
    yellow: PaletteColorOptions;
    green: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
    yellow: true;
    green: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    white: true;
    yellow: true;
    green: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: any) =>
  augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  palette: {
    white: createColor("#ffffff"),
    yellow: createColor("#e1b12c"),
    green: createColor("#27ae60"),
  },
  typography: {
    h1: {
      fontFamily: "Oswald",
    },
    h2: {
      fontFamily: "Oswald",
    },
    h3: {
      fontFamily: "Oswald",
    },
    h4: {
      fontFamily: "Oswald",
    },
    h5: {
      fontFamily: "Oswald",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "Oswald",
    },
    button: {
      fontFamily: "Oswald",
    },
  },
});

export default theme;
