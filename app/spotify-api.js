
const baseUrl = 'https://api.spotify.com/v1';
const getAccessToken = () => 'BQCvhdFM4Qv9VaLVHuDAZg9IBrNTCSMmkh-CDOPcxeRGfpfN5f2cHtjnZf9X42CEbngaDPJDm2Eqq0a7lFuvnCPqdu_evnjYSnvZc7XDHyk8fzGw-Y-0Tan6qMjmIQsTZIh04bF38k4uYHCqzpAFDk-68CYn65J3NLeQX_DEK8W3eon6BAND6Qk';
const market = 'ES' /* TODO: cambiar por cada usuario */

const constructQuery = (params) => {
  return Object.entries(params)
    .reduce((query, [key, val]) => {
      return query + `${key}=${val}&`
    }, '')
    .slice(0, -1);
}

export const searchArtists = (search) => {
  const accessToken = getAccessToken();
  const params = {
    q: search,
    type: 'artist'
  }

  return fetch(`${baseUrl}/search?${constructQuery(params)}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
    .then(response => {
      if (response.status !== 200) {
        console.error("Something's not right", response.message);
        console.log(response);
        let error = new Error();
        throw error;
      }
      return response;
    })
    .then(res => res.json())
    .catch(err => err);
}

export const getArtist = (artistId) => {
  const accessToken = getAccessToken();

  return fetch(`${baseUrl}/artists/${artistId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => {
      if (response.status !== 200) {
        console.error("Something's not right");
        let error = new Error();
        throw error;
      }
      return response;
    })
    .then(res => res.json())
    .catch(err => err);
}

export const getAlbumsByArtist = (artistId) => {
  const accessToken = getAccessToken();
  const params = {
    album_type: 'album',
    market
   };
  const url = `${baseUrl}/artists/${artistId}/albums?${constructQuery(params)}`
  console.log(url)
  return fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => {
      if (response.status !== 200) {
        console.error("Something's not right");
        let error = new Error();
        throw error;
      }
      return response;
    })
    .then(res => res.json())
    .catch(err => err);
}

export const getAlbum = (albumId) => {
  const accessToken = getAccessToken();

  return fetch(`${baseUrl}/albums/${albumId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => {
      if (response.status !== 200) {
        console.error("Something's not right");
        let error = new Error();
        throw error;
      }
      return response;
    })
    .then(res => res.json())
    .catch(err => err);

}
