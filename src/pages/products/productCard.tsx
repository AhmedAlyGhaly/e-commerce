import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { CartContext } from '../../context';

export interface ProductCardProps {
    id: string;
    title: string;
    description: string;
    price: string;
    images: string;

}

export const ProductCard: React.FC<
    React.PropsWithChildren<ProductCardProps>
> = (props) => {
    const { title, description, price, id, images } = props;
    const { addToCart } = useContext(CartContext);


    return (
        <Card key={id}>
            <CardMedia sx={{ height: 140 }} image={images} title="Product Image" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description: {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => addToCart(props)} size="small">
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    );
};
