// 배너 타입
export interface Banner {
  id: string;
  imageUrl: string;
  link: string;
  description?: string;
  buttonText?: string;
}

// 즐겨찾기 타입
export interface Favorite {
  id: string;
  name: string;
  url: string;
  iconUrl: string;
}

// 서비스 타입
export interface Service {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  url: string;
  networks?: string[];
  // 노출 조건
  platforms?: ('android' | 'ios')[];
  languages?: ('ko' | 'en')[];
  environments?: ('dev' | 'stage' | 'prod')[];
}

