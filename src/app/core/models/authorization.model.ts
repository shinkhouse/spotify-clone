export interface AuthState extends SpotifyApi.CurrentUsersProfileResponse {
    accessToken: string | null;
    tokenType: string | null;
    expiresIn: number;
    state: string | null;
}
