import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../../providers';
interface SignInFormProps { }

interface FormValues {
    email: string;
    password: string;
}
export const SignInForm: React.FC<SignInFormProps> = () => {
    const {
        formState: { errors, isSubmitting },
        handleSubmit,
        register,
        setError,
    } = useForm<FormValues>();
    const [showPassword, setShowPassword] = useState(false);


    const handleFormSubmit = async (formData: FormValues) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        });

        if (error) {
            setError('root', { message: error.message });
        } else {
            console.log(data);
        }
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box
            component="form"
            onSubmit={event => {
                handleSubmit(handleFormSubmit)(event).catch(console.error);
            }}
        >
            <Typography
                sx={{ mb: 2 }}
                variant="h4"
            >
                Sign In
            </Typography>
            <TextField
                {...register('email', {
                    required: 'required',
                })}
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                label='username'
                sx={{ mb: 2 }}
                variant="outlined" />
            <TextField
                {...register('password', {
                    required: 'required',
                })}
                fullWidth
                InputProps={{
                    endAdornment: (
                        <IconButton
                            edge="end"
                            onClick={handleTogglePasswordVisibility}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    ),
                }}

                error={!!errors.password}
                helperText={errors.password?.message}
                type={showPassword ? 'text' : 'password'}

                label='password'
                sx={{ mb: 2 }}
                variant="outlined" />
            <Button
                fullWidth
                disabled={isSubmitting}
                sx={{ mb: 2 }}
                type="submit"
                variant="contained"
            >
                Sign In
            </Button>
        </Box>
    )
}