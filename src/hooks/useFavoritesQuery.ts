import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client";
import { usePlatform } from "../contexts/PlatformContext";
import { useLanguage } from "../contexts/LanguageContext";

export const useFavoritesQuery = () => {
  const { platform } = usePlatform();
  const { language } = useLanguage();

  return useQuery({
    queryKey: ["favorites", platform, language],
    queryFn: () => apiClient.getFavorites({ platform, language }),
  });
};

