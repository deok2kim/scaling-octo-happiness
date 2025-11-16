import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client";
import { usePlatform } from "../contexts/PlatformContext";
import { useLanguage } from "../contexts/LanguageContext";

interface UseServicesQueryParams {
  search?: string;
}

export const useServicesQuery = ({ search = "" }: UseServicesQueryParams = {}) => {
  const { platform } = usePlatform();
  const { language } = useLanguage();

  return useSuspenseInfiniteQuery({
    queryKey: ["services", platform, language, search],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getServices({ platform, language, page: pageParam, size: 20, search }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });
};
