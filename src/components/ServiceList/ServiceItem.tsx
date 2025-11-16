import type { Service } from "../../types";
import { useLanguage } from "../../contexts/LanguageContext";
import ItemCard from "../common/ItemCard";

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
    <ItemCard
      iconUrl={service.iconUrl}
      iconAlt={service.name}
      title={service.name}
      subtitle={service.description[language]}
      onClick={handleClick}
    />
  );
}

export default ServiceItem;
