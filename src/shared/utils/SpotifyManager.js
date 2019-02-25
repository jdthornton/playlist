import { makePlaylist } from './PlaylistMaker';

const limit = 20;
const SPOTIFY_API_URL = 'https://api.spotify.com/v1'

function checkStatus(response) {
    if (response.ok) {
      return response;
    } else {
      throw new Error(response.statusText);
    }
  }

export const getToken = () =>
    fetch(`${API_URL}/token`, {
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
      .then(checkStatus)
      .then(response => response.json())

export const autocomplete = (name, token) =>
    fetch(`${SPOTIFY_API_URL}/search?type=track&q=${encodeURIComponent(name)}&limit=5`, {
        headers: { Authorization: `Bearer ${token}` }
    })
      .then(checkStatus)
      .then(response => response.json())

export const login = () => {
    return new Promise((resolve, reject) => {
        let url = 'https://accounts.spotify.com/en/authorize?response_type=token&client_id=' +
            SPOTIFY_APP_ID + '&redirect_uri=' + encodeURIComponent(DOMAIN_URL+"/spotify-redirect.html") +
            '&scope=' + encodeURIComponent('playlist-modify-public playlist-modify-private');
        let spotifyLoginWindow = window.open(
            url,
            'Spotify',
            'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=400,height=500'
        );
        var timer = setInterval(checkIfClosed, 500);
        function checkIfClosed() {
          if (spotifyLoginWindow.closed) {
              clearInterval(timer);
              reject()
          }
        }
        window.addEventListener('storage', (data) => {
            if (data.key === 'user_token') {
              resolve(data.newValue);
            }
        });
    })
}

export const getUser = (token) =>
    fetch(`${SPOTIFY_API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` }
    })
      .then(checkStatus)
      .then(response => response.json())

export const getPlaylistsByCategory = (id, token) =>
    fetch(`${SPOTIFY_API_URL}/browse/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
      .then(checkStatus)
      .then((response) => response.json())

export const getTracks = (track, token) => {
    return new Promise((resolve, reject) =>
        fetch(`${SPOTIFY_API_URL}/artists/${track.artists[0].id}/related-artists`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(checkStatus)
            .then(response => response.json())
            .then(({ artists }) => {
                var relatedArtists = artists.slice(0, limit - 1);
                if (relatedArtists.length) {
                    const trackList = [];
                    relatedArtists.push(track.artists[0])
                    for (var i = relatedArtists.length - 1; i >= 0; i--) {
                        var total = relatedArtists.length - 1;
                        fetch(`${SPOTIFY_API_URL}/artists/${artists[i].id}/top-tracks?country=US`, {
                            headers: { Authorization: `Bearer ${token}` }
                        })
                            .then(checkStatus)
                            .then(response => response.json())
                            .then(({ tracks }) => {
                                if (tracks.length) {

                                    for (var e = tracks.length - 1; e >= 0; e--) {
                                        trackList.push(tracks[e]);
                                        if (e === 0) {
                                            total -= 1;
                                            if (total === 0) {
                                                let tracks = makePlaylist(trackList, track.popularity)
                                                resolve(tracks);
                                            }
                                        }
                                    }
                                } else {
                                    total -= 1;
                                }
                            })
                    }
                } else {
                    throw new Error("Unable to make playlist")
                }
            })
        )
}
export const getPlaylistTracks = (url, token) =>
    fetch(url, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(checkStatus)
        .then(response => response.json())
        .then(({ items }) => {
            let length = items.length;
            let tracks = [];
            for (var i = 0; i < length; i++) {
                if(items[i].track){
                  tracks.push(items[i].track);
                }
            }
            return tracks;
        })


export const savePlaylist = (token, userId, name, isPublic, tracks) => {
    return new Promise((resolve, reject) =>
        fetch(`${SPOTIFY_API_URL}/users/${userId}/playlists`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}`, "Content-Type": 'application/json' },
            body: JSON.stringify({ name: name, public: isPublic })
        })
            .then(checkStatus)
            .then(response => response.json())
            .then(myPlaylist => {
                let trackList = tracks.map(track => track.uri);
                fetch(`${SPOTIFY_API_URL}/users/${userId}/playlists/${myPlaylist.id}/tracks`, {
                    method: 'POST',
                    headers: { Authorization: `Bearer ${token}` },
                    body: JSON.stringify({ uris: trackList })
                }).then(response => {
                    resolve(myPlaylist)
                })
            })
    )
}
