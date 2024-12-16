import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button className={i18n.language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>
        En
      </button>
      <button className={i18n.language === 'ru' ? 'active' : ''} onClick={() => changeLanguage('ru')}>
        Ru
      </button>
    </div>
  );
};

export default LanguageSwitcher;