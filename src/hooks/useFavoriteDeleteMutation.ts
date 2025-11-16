import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../api/client";
import { usePlatform } from "../contexts/PlatformContext";
import { useLanguage } from "../contexts/LanguageContext";
import type { Favorite } from "../types";

export const useFavoriteDeleteMutation = () => {
  const queryClient = useQueryClient();
  const { platform } = usePlatform();
  const { language } = useLanguage();

  return useMutation({
    mutationFn: (favoriteId: string) => apiClient.deleteFavorite(favoriteId),
    onSuccess: (_, deletedId) => {
      // 캐시에서 직접 제거
      queryClient.setQueryData<Favorite[]>(
        ["favorites", platform, language],
        (oldData) => {
          if (!oldData) return [];
          return oldData.filter((fav) => fav.id !== deletedId);
        }
      );
    },
  });
};
