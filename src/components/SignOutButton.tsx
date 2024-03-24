import { Button } from '@mui/material';
import { supabase } from '../providers/instance';

export const SignOutButton = () => {
    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                throw error;
            }
            console.log('User signed out successfully.');
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };

    return (
        <Button variant="contained" size="small" onClick={handleSignOut}>
            Sign Out
        </Button>
    );
};

