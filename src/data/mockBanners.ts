import type { Banner } from "../types";

// GitHub Raw URL 베이스
const IMAGE_BASE =
  "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images";

export const mockBanners: Banner[] = [
  // Campaign MAPO Airdrop - 한국어
  {
    id: "banner-mapo-kr",
    imageUrl: `${IMAGE_BASE}/banner_mapo_kr.png`,
    link: "https://store-kr.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol",
    supportedLanguages: ["ko"],
    supportedPlatforms: ["android", "ios"],
  },
  // Campaign MAPO Airdrop - 영어
  {
    id: "banner-mapo-en",
    imageUrl: `${IMAGE_BASE}/banner_mapo_en.png`,
    link: "https://store.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol",
    supportedLanguages: ["en"],
    supportedPlatforms: ["android", "ios"],
  },
  // D'CENT Wallet - 한국어
  {
    id: "banner-dcent-kr",
    imageUrl: `${IMAGE_BASE}/banner_dcent.png`,
    link: "https://store-kr.dcentwallet.com",
    description: "디센트 지문인증형 지갑으로 한층 더 강화된 보안을 경험하세요!",
    buttonText: "구매하기",
    supportedLanguages: ["ko"],
    supportedPlatforms: ["android", "ios"],
  },
  // D'CENT Wallet - 영어
  {
    id: "banner-dcent-en",
    imageUrl: `${IMAGE_BASE}/banner_dcent.png`,
    link: "https://store.dcentwallet.com",
    description: "Enhance your security with D'CENT biometric wallet",
    buttonText: "Buy Now",
    supportedLanguages: ["en"],
    supportedPlatforms: ["android", "ios"],
  },
  // D'CENT Blog - 한국어
  {
    id: "banner-blog-kr",
    imageUrl: `${IMAGE_BASE}/banner_blog.png`,
    link: "https://store-kr.dcentwallet.com/blogs/post",
    description:
      "새로운 디센트 블로그를 방문하여 최신 업데이트를 먼저 확인해보세요!",
    buttonText: "확인하기",
    supportedLanguages: ["ko"],
    supportedPlatforms: ["android", "ios"],
  },
  // D'CENT Blog - 영어
  {
    id: "banner-blog-en",
    imageUrl: `${IMAGE_BASE}/banner_blog.png`,
    link: "https://store.dcentwallet.com/blogs/post",
    description:
      "Visit the new D'CENT Blog to explore the latest updates first!",
    buttonText: "Explore",
    supportedLanguages: ["en"],
    supportedPlatforms: ["android", "ios"],
  },
];
