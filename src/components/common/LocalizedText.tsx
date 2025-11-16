import type { TranslationKey } from "../../i18n/translations";
import { useLocalization } from "../../hooks/useLocalization";

interface LocalizedTextProps {
  id: TranslationKey;
  defaultMessage?: string;
}

function LocalizedText({ id, defaultMessage }: LocalizedTextProps) {
  const { localizeText } = useLocalization();
  return <>{localizeText({ id, defaultMessage })}</>;
}

export default LocalizedText;
