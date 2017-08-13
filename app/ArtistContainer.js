import React from 'react';
import { getArtist, getAlbumsByArtist } from './spotify-api';
import Artist from './Artist';

class ArtistContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      artist: {}
    };
  }

  componentDidMount() {
    const artistId = this.props.match.params.id;
    getArtist(artistId)
      .then(artist => this.setState({ artist }));
    getAlbumsByArtist(artistId)
      .then(res => {
        let albums = res.items;
        this.setState({ albums });
      });
  }

  getProps() {
    return {
      albums: this.state.albums,
      artist: this.state.artist
    }
  }

  render() {
    return (
      <Artist {...this.getProps()} />
    );
  }
}

export default ArtistContainer;
