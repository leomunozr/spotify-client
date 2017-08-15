import React from 'react';
import { searchArtists } from './spotify-api';
import ArtistsList from './ArtistsList';
import NothingFound from './common/NothingFound';

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
      search: this.props.match.params.search
    };
  }

  render() {
    if (this.state.artists.length)
      return (
        <ArtistsList {...this.getProps() } />
      );
    else
      return (
        <NothingFound />
      );
  }
}

export default ArtistsListContainer;
