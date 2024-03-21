import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box, IconButton } from "@mui/material";
import { useColorTheme } from "../hooks/useColorTheme";

export const NightModeToggle = () => {
    const { mode, toggleTheme } = useColorTheme();

    const handleToggleClick = () => {
        toggleTheme();
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                color: "text.primary",
                borderColor: "text.primary",
                border: "1px solid",
                borderRadius: 25,
                p: 2,
            }}
        >
            {mode} mode
            <IconButton sx={{ ml: 1 }} onClick={handleToggleClick} color="inherit">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    );
};

