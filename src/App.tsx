import { Box, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { MainAppBar } from "./components";
import { useColorTheme } from "./hooks/useColorTheme";
import { NightModeToggle } from "./components/NightModeToggle";

export const App = () => {
    const { theme } = useColorTheme();


    return (
        <Box component="main" sx={{ p: 8 }} >
            <ThemeProvider theme={theme}>
                <MainAppBar />
                <Outlet />
                <NightModeToggle />
            </ThemeProvider>
        </Box>
    );
}

