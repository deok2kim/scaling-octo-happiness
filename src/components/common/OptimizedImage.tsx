import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

function OptimizedImage({
  src,
  alt,
  className,
  loading = "lazy",
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [useWebP, setUseWebP] = useState(true);

  // .png 또는 .jpg를 .webp로 변환
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  const handleError = () => {
    // WebP 실패 시 원본 이미지로 fallback
    if (useWebP) {
      setUseWebP(false);
      setImgSrc(src);
    }
  };

  return (
    <img
      src={useWebP ? webpSrc : imgSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
    />
  );
}

export default OptimizedImage;
