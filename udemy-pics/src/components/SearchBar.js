import React from 'react';

class SearchBar extends React.Component {
  // States
  state = { term: '' };

  // Function that is ran when the form is submitted.
  onFourmSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui raised inverted segment teal'>
        <form onSubmit={this.onFourmSubmit} className='ui form'>
          <div className='field'>
            <input 
              name='search'
              onChange={(e) => this.setState({ term: e.target.value })} 
              type='text' 
              value={this.state.term}
              autoComplete='off' 
              placeholder='Search for an image'
            />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;
