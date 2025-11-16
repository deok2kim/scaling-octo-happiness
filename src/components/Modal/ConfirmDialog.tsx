import { useTranslation } from "../../hooks/useTranslation";
import "./ConfirmDialog.css";

interface ConfirmDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmDialog({ message, onConfirm, onCancel }: ConfirmDialogProps) {
  const { t } = useTranslation();

  return (
    <div className="dialog-overlay" onClick={onCancel}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="dialog-title">{t("dapp_favorite_title")}</h3>
        <div className="dialog-divider" />
        <p className="dialog-message">{message}</p>
        <div className="dialog-actions">
          <button className="dialog-button dialog-cancel" onClick={onCancel}>
            {t("button_cancel")}
          </button>
          <button className="dialog-button dialog-confirm" onClick={onConfirm}>
            {t("button_confirm")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
