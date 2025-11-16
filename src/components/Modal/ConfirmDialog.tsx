import type { ReactNode } from "react";
import LocalizedText from "../common/LocalizedText";
import "./ConfirmDialog.css";

interface ConfirmDialogProps {
  message: ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmDialog({ message, onConfirm, onCancel }: ConfirmDialogProps) {
  return (
    <div className="dialog-overlay" onClick={onCancel}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="dialog-title">
          <LocalizedText id="dapp_favorite_title" defaultMessage="즐겨찾기" />
        </h3>
        <div className="dialog-divider" />
        <p className="dialog-message">{message}</p>
        <div className="dialog-actions">
          <button className="dialog-button dialog-cancel" onClick={onCancel}>
            <LocalizedText id="button_cancel" defaultMessage="취소" />
          </button>
          <button className="dialog-button dialog-confirm" onClick={onConfirm}>
            <LocalizedText id="button_confirm" defaultMessage="확인" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
