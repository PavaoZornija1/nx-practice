/**
 * Response shape for the shared hello endpoint.
 * Used by both Site Manager and Dispatcher frontends.
 */
export interface HelloResponse {
  message: string;
  timestamp: string;
}
