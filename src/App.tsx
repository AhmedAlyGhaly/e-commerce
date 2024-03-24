import { Box, ThemeProvider } from "@mui/material";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { MainAppBar } from "./components";
import { useColorTheme } from "./hooks/useColorTheme";
import { SignInForm } from "./pages";
import { supabase } from "./providers/instance";

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
        <Box component="main" sx={{ p: 8 }} >
            {!session ? <SignInForm /> :
                <ThemeProvider theme={theme}>
                    <MainAppBar />
                    <Outlet />
                </ThemeProvider>}
        </Box>
    );
}

