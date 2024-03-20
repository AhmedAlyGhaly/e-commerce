import { Box } from "@mui/material";
import { MainAppBar } from "./components";
import { Outlet } from "react-router-dom";

export const App = () => {
    return (
        <Box component="main" sx={{ p: 8 }} >
            <MainAppBar />
            <Outlet />
        </Box>
    );
}

