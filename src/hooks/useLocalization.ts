import { useLanguage } from "../contexts/LanguageContext";
import { translations, type TranslationKey } from "../i18n/translations";

interface LocalizeTextParams {
  id: TranslationKey;
  defaultMessage?: string;
}

export const useLocalization = () => {
  const { language, setLanguage } = useLanguage();

  const localizeText = ({ id, defaultMessage }: LocalizeTextParams): string => {
    return translations[language][id] || defaultMessage || "";
  };

  return {
    localizeText,
    language,
    setLanguage,
  };
};
