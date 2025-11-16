import type { Service } from "../../types";
import { useLanguage } from "../../contexts/LanguageContext";
import "./ServiceItem.css";

interface ServiceItemProps {
  service: Service;
  onClick: (service: Service) => void;
}

function ServiceItem({ service, onClick }: ServiceItemProps) {
  const { language } = useLanguage();

  const handleClick = () => {
    onClick(service);
  };

  return (
    <div className="service-item" onClick={handleClick}>
      <div className="service-icon-wrapper">
        <img src={service.iconUrl} alt={service.name} className="service-icon" />
      </div>
      <div className="service-info">
        <h3 className="service-name">{service.name}</h3>
        <p className="service-description">{service.description[language]}</p>
      </div>
    </div>
  );
}

export default ServiceItem;

