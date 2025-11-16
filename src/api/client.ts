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

interface ServicesParams extends ApiParams {
  page?: number;
  size?: number;
  search?: string;
}

interface ServicesResponse {
  data: Service[];
  hasMore: boolean;
  nextPage: number | null;
  total: number;
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
      await delay(1000);
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
    page = 1,
    size = 20,
    search = "",
  }: ServicesParams): Promise<ServicesResponse> => {
    if (config.isDevelopment) {
      await delay(1000);
      // dev 환경에서는 필터링된 mock 데이터 반환
      let filtered = mockServices.filter(
        (service) =>
          service.supportedPlatforms.includes(platform) &&
          service.supportedLanguages.includes(language) &&
          service.supportedEnvironments.includes(
            config.environment as "development" | "staging" | "production"
          )
      );

      // 검색어가 있으면 추가 필터링
      if (search.trim()) {
        const keyword = search.toLowerCase();
        filtered = filtered.filter((service) => {
          const nameMatch = service.name.toLowerCase().includes(keyword);
          const descMatch = service.description[language]
            .toLowerCase()
            .includes(keyword);
          return nameMatch || descMatch;
        });
      }

      // 필터링 결과가 없으면 빈 응답 반환
      if (filtered.length === 0) {
        return {
          data: [],
          hasMore: false,
          nextPage: null,
          total: 0,
        };
      }

      // 무한 스크롤 테스트를 위해 데이터를 반복해서 생성 (총 100개)
      const repeatedData = Array.from(
        { length: Math.ceil(100 / filtered.length) },
        () => filtered
      )
        .flat()
        .slice(0, 100)
        .map((service, index) => ({ ...service, id: `service-${index + 1}` }));

      const start = (page - 1) * size;
      const end = start + size;
      const paginatedData = repeatedData.slice(start, end);
      const hasMore = end < repeatedData.length;

      return {
        data: paginatedData,
        hasMore,
        nextPage: hasMore ? page + 1 : null,
        total: repeatedData.length,
      };
    }

    const searchParam = search ? `&search=${encodeURIComponent(search)}` : "";
    const response = await fetch(
      `${config.apiBaseUrl}/api/services?platform=${platform}&lang=${language}&page=${page}&size=${size}${searchParam}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }
    return response.json();
  },

  deleteFavorite: async (favoriteId: string): Promise<void> => {
    if (config.isDevelopment) {
      await delay(800);
      // dev 환경에서는 50% 확률로 실패
      if (Math.random() < 0.5) {
        throw new Error("즐겨찾기 삭제에 실패했습니다");
      }
      return;
    }

    const response = await fetch(
      `${config.apiBaseUrl}/api/favorites/${favoriteId}`,
      { method: "DELETE" }
    );
    if (!response.ok) {
      throw new Error("Failed to delete favorite");
    }
  },
};
