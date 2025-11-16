import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client";

export const useFavoritesQuery = () => {
  return useQuery({
    queryKey: ["favorites"],
    queryFn: apiClient.getFavorites,
  });
};

