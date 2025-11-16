import { useState } from "react";
import type { Service } from "../../types";
import ServiceItem from "./ServiceItem";
import ServiceDetailModal from "../Modal/ServiceDetailModal";
import { TEXTS } from "../../constants";
import "./ServiceList.css";

interface ServiceListProps {
  services: Service[];
}

function ServiceList({ services }: ServiceListProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="service-list-section">
      <div className="service-list-header">
        <h2 className="service-list-title">{TEXTS.LIST_TITLE}</h2>
      </div>

      <div className="service-list-container">
        {services.map((service) => (
          <ServiceItem
            key={service.id}
            service={service}
            onClick={handleServiceClick}
          />
        ))}
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
