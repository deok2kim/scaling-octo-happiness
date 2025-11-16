import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client";

export const useBannersQuery = () => {
  return useQuery({
    queryKey: ["banners"],
    queryFn: apiClient.getBanners,
  });
};

