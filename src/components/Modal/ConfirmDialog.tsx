import { TEXTS } from "../../constants";
import "./ConfirmDialog.css";

interface ConfirmDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmDialog({ message, onConfirm, onCancel }: ConfirmDialogProps) {
  return (
    <div className="dialog-overlay" onClick={onCancel}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="dialog-title">즐겨찾기 삭제</h3>
        <div className="dialog-divider" />
        <p className="dialog-message">{message}</p>
        <div className="dialog-actions">
          <button className="dialog-button dialog-cancel" onClick={onCancel}>
            {TEXTS.CANCEL}
          </button>
          <button className="dialog-button dialog-confirm" onClick={onConfirm}>
            {TEXTS.CONFIRM}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
