
const baseUrl = 'https://api.spotify.com/v1';
const getAccessToken = () => 'BQB06GePgWTuBLNKY9oTuDGdAiuGOQQr5CRUCzWmRKaB32DYenua3rsoj7KTwImC7K47vUewtTEyzs61_j0U05RPI7UcZYpt3Pqz9I7AsPLX-CDR1ac5DLddmV-HmZrVCYmabkqmf2_qdt3x9OikL6gT40U6kIvgHi2bw3X6okVIWxWX8GT8z18';
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
