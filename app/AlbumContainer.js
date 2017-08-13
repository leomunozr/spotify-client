import React from 'react';
import { getAlbum } from './spotify-api';
import Album from './Album';

class AlbumContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      album: { tracks: { items: [] } }
    }
  }

  componentDidMount() {
    const albumId = this.props.match.params.id;
    getAlbum(albumId)
      .then(album => this.setState({ album }))
  }

  getProps() {
    return {
      album: this.state.album
    }
  }

  render() {
    return (
      <Album {...this.getProps()} />
    );
  }
}

export default AlbumContainer;
