import { useTranslation } from "react-i18next"

export const AllCategories = () => {
    const { t } = useTranslation()
    return (
        <h1>{t('home.all_categories')}</h1>
    )
}