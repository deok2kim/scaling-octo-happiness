export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  environment: import.meta.env.VITE_ENV as 'development' | 'staging' | 'production',
  isDevelopment: import.meta.env.VITE_ENV === 'development',
  isStaging: import.meta.env.VITE_ENV === 'staging',
  isProduction: import.meta.env.VITE_ENV === 'production',
};

