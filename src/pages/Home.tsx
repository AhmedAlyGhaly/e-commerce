import { TextField, Stack, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ProductCard, ProductCardProps } from "./products";
import { supabase } from "../providers";
import { useProductFilter } from "../hooks";



export const Home = () => {
    const { t } = useTranslation();
    const [products, setProducts] = useState<ProductCardProps[]>([]);
    const { filteredResults, setFilter } = useProductFilter(products);

    async function getProducts() {
        const { data, error } = await supabase
            .from('products')
            .select();
        if (error) {
            console.error("Error fetching products:", error.message);
            return;
        }
        if (data) {
            console.log(data);
            setProducts(data);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    console.log(filteredResults)

    return (
        <>
            <Stack direction="row" spacing={2} sx={{ pt: 5, pb: 5 }}>
                <TextField
                    size="small"
                    placeholder='Search by Title...'
                    onChange={(e) => setFilter('title', e.target.value)}
                />
                <TextField
                    size="small"
                    placeholder='Search by Price...'
                    onChange={(e) => setFilter('price', e.target.value)}
                />
            </Stack>
            <Grid container spacing={2}>
                {filteredResults.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            images={product.images}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
