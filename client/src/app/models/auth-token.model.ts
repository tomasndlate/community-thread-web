export interface AuthToken {
  accessToken: string;
}

export interface AuthTokenResponse {
  status: string;
  code: number;
  message: string;
  data: AuthToken;
}
