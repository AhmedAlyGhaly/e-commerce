import { PaletteMode } from "@mui/material";
import { lime, blueGrey, grey } from "@mui/material/colors";

export const theme = {
  palette: {
    primary: lime,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
        primary: lime,
        divider: lime[200],
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        primary: blueGrey,
        divider: blueGrey[700],
        background: {
          default: blueGrey[900],
          paper: blueGrey[900],
        },
        text: {
          primary: "#f4ff81",
          secondary: grey[500],
        },
      }),
  },
});

