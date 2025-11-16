import { useLanguage } from "../contexts/LanguageContext";
import { translations, type TranslationKey } from "../i18n/translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  return { t, language };
};

