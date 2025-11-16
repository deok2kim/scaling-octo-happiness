import type { Service, Banner, Favorite } from "../types";
import { config } from "../config/env";
import { mockServices } from "../data/mockServices";
import { mockBanners } from "../data/mockBanners";
import { mockFavorites } from "../data/mockFavorites";

// Fake delay to simulate real API
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiClient = {
  getBanners: async (): Promise<Banner[]> => {
    if (config.isDevelopment) {
      await delay(500);
      return mockBanners;
    }

    const response = await fetch(`${config.apiBaseUrl}/api/banners`);
    if (!response.ok) {
      throw new Error("Failed to fetch banners");
    }
    return response.json();
  },

  getFavorites: async (): Promise<Favorite[]> => {
    if (config.isDevelopment) {
      await delay(300);
      return mockFavorites;
    }

    const response = await fetch(`${config.apiBaseUrl}/api/favorites`);
    if (!response.ok) {
      throw new Error("Failed to fetch favorites");
    }
    return response.json();
  },

  getServices: async (): Promise<Service[]> => {
    if (config.isDevelopment) {
      await delay(800);
      return mockServices;
    }

    const response = await fetch(`${config.apiBaseUrl}/api/services`);
    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }
    return response.json();
  },
};
