import { useState, useEffect } from "react";

export interface Product {
    id: string;
    title: string;
    description: string;
    price: string;
}

export interface ProductFilter {
    title: string;
    price: string;
    description: string;
}

export const useProductFilter = (products: Product[]) => {
    const [filteredResults, setFilteredResults] = useState<Product[]>(products);
    const [filters, setFilters] = useState<ProductFilter>({
        title: '',
        price: '',
        description: ''
    });

    useEffect(() => {
        applyFilters();
    }, [filters, products]);

    const applyFilters = () => {
        const filteredData = products.filter((product) => {
            const titleMatch = product.title.toLowerCase().includes(filters.title.toLowerCase());
            const priceMatch = product.price.toLowerCase().includes(filters.price.toLowerCase());
            const descriptionMatch = product.description.toLowerCase().includes(filters.description.toLowerCase());

            return titleMatch && priceMatch && descriptionMatch;
        });
        setFilteredResults(filteredData);
    };

    const setFilter = (filterName: keyof ProductFilter, value: string) => {
        setFilters(prevState => ({
            ...prevState,
            [filterName]: value
        }));
    };

    return { filteredResults, setFilter };
};
