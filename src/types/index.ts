// 다국어 텍스트 타입
export interface LocalizedText {
  ko: string;
  en: string;
}

// 배너 타입
export interface Banner {
  id: string;
  imageUrl: string;
  link: string;
  description?: string;
  buttonText?: string;
  supportedLanguages: ("ko" | "en")[];
  supportedPlatforms: ("android" | "ios")[];
}

// 즐겨찾기 타입
export interface Favorite {
  id: string;
  name: string;
  url: string;
  iconUrl: string;
  supportedLanguages: ("ko" | "en")[];
  supportedPlatforms: ("android" | "ios")[];
}

// 서비스 타입
export interface Service {
  id: string;
  name: string; // 제목은 다국어 없음
  description: LocalizedText; // description만 다국어
  iconUrl: string;
  url: string;
  networks?: string[];
  // 노출 조건
  supportedPlatforms: ("android" | "ios")[];
  supportedLanguages: ("ko" | "en")[];
  supportedEnvironments: ("development" | "staging" | "production")[];
}
