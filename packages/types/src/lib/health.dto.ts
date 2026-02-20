/**
 * Response shape for the health/status endpoint.
 * Indicates API and database connectivity.
 */
export interface HealthResponse {
  api: 'ok';
  database: 'connected' | 'error';
  timestamp: string;
}
