import { useState, useRef, useEffect } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { Service } from "../../types";
import ServiceItem from "./ServiceItem";
import ItemCardSkeleton from "../common/ItemCardSkeleton";
import LocalizedText from "../common/LocalizedText";
import ServiceDetailModal from "../Modal/ServiceDetailModal";
import { useServicesQuery } from "../../hooks/useServicesQuery";
import "./ServiceList.css";

function ServiceList() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useServicesQuery();

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  // 모든 페이지의 데이터를 평탄화
  const allServices = data?.pages.flatMap((page) => page.data) ?? [];

  // TanStack Virtual 설정 (컨테이너 스크롤)
  // eslint-disable-next-line react-hooks/incompatible-library
  const virtualizer = useVirtualizer({
    count: allServices.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80,
    overscan: 5,
  });

  // 무한 스크롤: 끝에 도달하면 다음 페이지 로드
  useEffect(() => {
    const lastItem = virtualizer.getVirtualItems().at(-1);

    if (!lastItem) return;

    if (
      lastItem.index >= allServices.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    virtualizer.getVirtualItems(),
    allServices.length,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  ]);

  return (
    <div className="service-list-section">
      <div className="service-list-header">
        <h2 className="service-list-title">
          <LocalizedText id="dapp_list_title" defaultMessage="목록" />
        </h2>
      </div>

      <div
        ref={parentRef}
        className="service-list-container"
        style={{
          height: "500px",
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {virtualizer.getVirtualItems().map((virtualItem) => {
            const service = allServices[virtualItem.index];
            return (
              <div
                key={virtualItem.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                <ServiceItem service={service} onClick={handleServiceClick} />
              </div>
            );
          })}
        </div>
        {isFetchingNextPage && (
          <div className="service-list-skeleton-more">
            {Array.from({ length: 3 }).map((_, index) => (
              <ItemCardSkeleton key={`loading-${index}`} />
            ))}
          </div>
        )}
      </div>

      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default ServiceList;
