import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton } from "@mui/material";
import { useColorTheme } from "../theme";

export const NightModeToggle = () => {
    const { mode, toggleTheme } = useColorTheme();

    const handleToggleClick = () => {
        toggleTheme();
    };

    return (

        <IconButton sx={{ ml: 1 }} onClick={handleToggleClick} color="inherit">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
};

