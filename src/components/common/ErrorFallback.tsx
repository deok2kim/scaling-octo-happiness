import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import type { FallbackProps } from "react-error-boundary";
import "./ErrorFallback.css";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const { reset } = useQueryErrorResetBoundary();

  const handleReset = () => {
    reset();
    resetErrorBoundary();
  };

  return (
    <div className="error-fallback">
      <h2>문제가 발생했습니다</h2>
      <p className="error-message">
        {error?.message || "데이터를 불러오는 중 오류가 발생했습니다"}
      </p>
      <button className="error-retry-button" onClick={handleReset}>
        다시 시도
      </button>
    </div>
  );
}

export default ErrorFallback;

