import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  // States for the app.
  state = { images: [] };

  // Gets the search results and sets the state of the images.
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  }

  // Gets the image state length and returns the correct output.
  results = () => {
    const { images } = this.state;

    if(images.length == 1) {
      return `Found ${images.length} image`;
    } else if(images.length > 0) {
      return `Found ${images.length} images`;
    }
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <h3>{this.results()}</h3>
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

export default App;
