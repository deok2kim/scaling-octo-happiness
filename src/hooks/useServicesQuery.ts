import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client";

export const useServicesQuery = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: apiClient.getServices,
  });
};

