import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client";
import { usePlatform } from "../contexts/PlatformContext";
import { useLanguage } from "../contexts/LanguageContext";

export const useServicesQuery = () => {
  const { platform } = usePlatform();
  const { language } = useLanguage();

  console.log("platform", platform);
  console.log("language", language);

  return useQuery({
    queryKey: ["services", platform, language],
    queryFn: () => apiClient.getServices({ platform, language }),
  });
};
