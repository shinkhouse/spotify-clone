export const environment = {
  production: true
};

export const spotify = {
    baseAPIUrl: 'https://api.spotify.com/v1',
    spotifyAuthorizeUrl: 'https://accounts.spotify.com/authorize',
    clientId: 'e66f794b2dca4f56b49217c7662dfa3c',
    scopes: [
        //Listening History
        'user-read-recently-played',
        'user-top-read',
        'user-read-playback-position',
        //Spotify Connect
        'user-read-playback-state',
        'user-modify-playback-state',
        'user-read-currently-playing',
        //Playback - For SDK Playback //https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
        'streaming',
        //Playlists
        'playlist-modify-public',
        'playlist-modify-private',
        'playlist-read-private',
        'playlist-read-collaborative',
        //Library
        'user-library-modify',
        'user-library-read',
        //Users - For SDK Playback //https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
        'user-read-email',
        'user-read-private',
        'user-follow-read',
    ],
};
