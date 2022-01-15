// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
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
    ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
