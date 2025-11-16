import type { Service } from "../../types";
import "./ServiceDetailModal.css";

interface ServiceDetailModalProps {
  service: Service;
  onClose: () => void;
}

function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const handleGoToService = () => {
    window.open(service.url, "_blank");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-header">
          <div className="modal-icon-wrapper">
            <img
              src={service.iconUrl}
              alt={service.name}
              className="modal-icon"
            />
          </div>
          <div className="modal-title-section">
            <h2 className="modal-title">{service.name}</h2>
            {service.networks && service.networks.length > 0 && (
              <p className="modal-subtitle">{service.networks.join(", ")}</p>
            )}
          </div>
        </div>

        <div className="modal-body">
          <p className="modal-url">{service.url}</p>
          <h3 className="modal-section-title">Description</h3>
          <p className="modal-description">{service.description}</p>
        </div>

        <div className="modal-footer">
          <button className="modal-go-button" onClick={handleGoToService}>
            Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailModal;
