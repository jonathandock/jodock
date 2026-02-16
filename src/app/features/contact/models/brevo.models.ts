export interface BrevoApiSuccess {
  id: number;
}

export interface BrevoApiError {
  message: string;
  code: string;
}

export type BrevoApiResult<T> = { success: boolean; data: T } | { success: boolean; error: string };
