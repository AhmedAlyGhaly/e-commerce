import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../providers/instance";

interface Country {
    id: number;
    name: string;
}

export const AllCategories = () => {
    const { t } = useTranslation();
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        const { data, error } = await supabase.from("countries").select();
        if (error) {
            console.error("Error fetching countries:", error.message);
            return;
        }
        if (data) {
            setCountries(data as Country[]);
        }
    }

    return (
        <>
            <h1>{t('home.all_categories')}</h1>
            <ul>
                {countries.map((country) => (
                    <li key={country.id}>{country.name}</li>
                ))}
            </ul>
        </>
    );
};
