import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { getDesignTokens } from "../theme/theme";
import { useMode } from "../theme/useMode";

export const useColorTheme = () => {
  const { mode, toggle } = useMode();

  const toggleTheme = () => {
    toggle();
  };

  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleTheme,
  };
};
