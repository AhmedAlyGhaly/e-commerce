import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ChangeLanguageSelect() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState('');



    const handleChangeLanguage = (event: SelectChangeEvent) => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en').catch(console.error);
        setLanguage(event.target.value as string);
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                onChange={handleChangeLanguage}
            >
                <MenuItem value={'en'}>English</MenuItem>
                <MenuItem value={'ar'}>Arabic</MenuItem>
            </Select>
        </FormControl>
    );
}
