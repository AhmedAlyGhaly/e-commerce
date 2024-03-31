import { TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../providers';

export const CreateCard = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const { error } = await supabase.from('products').insert([data]);

        if (error) {
            console.error(error);
            alert('Failed to create card. Please try again later.');
        } else {
            console.log('Card created successfully!');
            reset();
            navigate('/home');
        }
    };

    return (
        <Box sx={{ pt: 5 }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <TextField
                    id="title"
                    label="Title"
                    variant="outlined"
                    {...register("title", { required: true })}
                    error={!!errors.title}
                    helperText={errors.title && "Title is required"}
                />

                <TextField
                    id="description"
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    {...register("description", { required: true })}
                    error={!!errors.description}
                    helperText={errors.description && "Description is required"}
                />

                <TextField
                    id="price"
                    label="Price"
                    type="number"
                    variant="outlined"
                    {...register("price", { required: true, min: 0 })}
                    error={!!errors.price}
                    helperText={errors.price ? (errors.price.type === "required" ? "Price is required" : "Price must be a positive number") : ""}
                />

                <Button type="submit" variant="contained" color="primary">Create Card</Button>
            </form>
        </Box>
    );
};
