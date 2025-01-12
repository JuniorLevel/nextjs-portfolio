export interface RequestOptions extends RequestInit {
  headers?: {
    accept: string;
    'X-API-KEY': string;
  };
}
