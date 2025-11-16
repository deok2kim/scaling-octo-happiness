import { useState, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { Service } from "../../types";
import ServiceItem from "./ServiceItem";
import ServiceDetailModal from "../Modal/ServiceDetailModal";
import { useTranslation } from "../../hooks/useTranslation";
import "./ServiceList.css";

interface ServiceListProps {
  services: Service[];
}

function ServiceList({ services }: ServiceListProps) {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  // TanStack Virtual 설정 (컨테이너 스크롤)
  // eslint-disable-next-line react-hooks/incompatible-library
  const virtualizer = useVirtualizer({
    count: services.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80,
    overscan: 5,
  });

  return (
    <div className="service-list-section">
      <div className="service-list-header">
        <h2 className="service-list-title">{t("dapp_list_title")}</h2>
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
            const service = services[virtualItem.index];
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
