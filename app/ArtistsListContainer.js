import React from 'react';
import { searchArtists } from './spotify-api';
import ArtistsList from './ArtistsList';

class ArtistsListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
  }

  componentDidMount() {
    const search = this.props.match.params.search;
    searchArtists(search)
      .then(res => {
        let artists = res.artists.items;
        this.setState({ artists });
      });
  }

  getProps() {
    return {
      artists: this.state.artists,
      search: this.props.search
    };
  }

  render() {
    return (
      <ArtistsList {...this.getProps() } />
    );
  }
}

export default ArtistsListContainer;
