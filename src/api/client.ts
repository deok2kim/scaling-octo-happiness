import type { Service, Banner, Favorite } from "../types";
import { config } from "../config/env";
import { mockServices } from "../data/mockServices";
import { mockBanners } from "../data/mockBanners";
import { mockFavorites } from "../data/mockFavorites";

// Fake delay to simulate real API
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Platform = "android" | "ios";
type Language = "ko" | "en";

interface ApiParams {
  platform: Platform;
  language: Language;
}

export const apiClient = {
  getBanners: async ({ platform, language }: ApiParams): Promise<Banner[]> => {
    if (config.isDevelopment) {
      await delay(500);
      // dev 환경에서는 필터링된 mock 데이터 반환
      return mockBanners.filter(
        (banner) =>
          banner.supportedPlatforms.includes(platform) &&
          banner.supportedLanguages.includes(language)
      );
    }

    const response = await fetch(
      `${config.apiBaseUrl}/api/banners?platform=${platform}&lang=${language}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch banners");
    }
    return response.json();
  },

  getFavorites: async ({
    platform,
    language,
  }: ApiParams): Promise<Favorite[]> => {
    if (config.isDevelopment) {
      await delay(300);
      // dev 환경에서는 필터링된 mock 데이터 반환
      return mockFavorites.filter(
        (favorite) =>
          favorite.supportedPlatforms.includes(platform) &&
          favorite.supportedLanguages.includes(language)
      );
    }

    const response = await fetch(
      `${config.apiBaseUrl}/api/favorites?platform=${platform}&lang=${language}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch favorites");
    }
    return response.json();
  },

  getServices: async ({
    platform,
    language,
  }: ApiParams): Promise<Service[]> => {
    if (config.isDevelopment) {
      await delay(800);
      // dev 환경에서는 필터링된 mock 데이터 반환
      return mockServices.filter(
        (service) =>
          service.supportedPlatforms.includes(platform) &&
          service.supportedLanguages.includes(language) &&
          service.supportedEnvironments.includes(
            config.environment as "development" | "staging" | "production"
          )
      );
    }

    const response = await fetch(
      `${config.apiBaseUrl}/api/services?platform=${platform}&lang=${language}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }
    return response.json();
  },
};
