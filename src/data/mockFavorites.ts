import type { Favorite } from "../types";

const IMAGE_BASE =
  "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images";

export const mockFavorites: Favorite[] = [
  {
    id: "fav-1",
    name: "OpenSea",
    url: "https://opensea.io",
    iconUrl: `${IMAGE_BASE}/icon_opensea.png`,
  },
  {
    id: "fav-2",
    name: "MoonPay",
    url: "https://buy.moonpay.com/v2/buy",
    iconUrl: `${IMAGE_BASE}/icon_moonpay.png`,
  },
  {
    id: "fav-3",
    name: "Rarible",
    url: "https://rarible.com/",
    iconUrl: `${IMAGE_BASE}/icon_rarible.png`,
  },
];
