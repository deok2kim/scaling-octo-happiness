import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client";
import { usePlatform } from "../contexts/PlatformContext";
import { useLanguage } from "../contexts/LanguageContext";

export const useBannersQuery = () => {
  const { platform } = usePlatform();
  const { language } = useLanguage();

  return useQuery({
    queryKey: ["banners", platform, language],
    queryFn: () => apiClient.getBanners({ platform, language }),
  });
};

