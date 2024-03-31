import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { MainAppBar } from "./components";
import { SignInForm } from "./pages";
import { supabase } from "./providers";
import { useColorTheme } from "./theme";
import { CartProvider } from "./context";

export const App = () => {
    const { theme } = useColorTheme();
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box component="main" sx={{ p: 8, bgcolor: 'background.paper', minHeight: '100vh' }} >
                {!session ?
                    <SignInForm /> :
                    <CartProvider><MainAppBar /><Outlet /></CartProvider>
                }
            </Box>
        </ThemeProvider>
    );
}

