import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { BtnVariant, Button } from 'shared/ui/Button/Button';
// import cls from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };
    return (
        <Button
            variant={BtnVariant.CLEAR}
            className={classNames("", {}, [className])}
            onClick={toggleLanguage}
        >
            {i18n.language === 'en' ? 'Українська' : 'English'}
        </Button>
    );
};
