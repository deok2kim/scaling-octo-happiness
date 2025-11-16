import type { Banner } from "../types";

// GitHub Raw URL 베이스
const IMAGE_BASE =
  "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images";

export const mockBanners: Banner[] = [
  {
    id: "banner-1",
    imageUrl: `${IMAGE_BASE}/banner_mapo_kr.png`,
    link: "https://store-kr.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol",
  },
  {
    id: "banner-2",
    imageUrl: `${IMAGE_BASE}/banner_dcent.png`,
    link: "https://store-kr.dcentwallet.com",
    description: "디센트 지문인증형 지갑으로 한층 더 강화된 보안을 경험하세요!",
    buttonText: "구매하기",
  },
  {
    id: "banner-3",
    imageUrl: `${IMAGE_BASE}/banner_blog.png`,
    link: "https://store-kr.dcentwallet.com/blogs/post",
    description:
      "새로운 디센트 블로그를 방문하여 최신 업데이트를 먼저 확인해보세요!",
    buttonText: "확인하기",
  },
];
