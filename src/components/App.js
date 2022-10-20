import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

import { Main } from './App.styled';

export class App extends Component {
  state = {
    search: null,
  };

  hendleFormSubmit = search => {
    if (this.state.search === search) {
      toast.warning('Choose deferent');
      return;
    }
    this.setState({ search: search });
    toast.success('Ok, loading...');
  };

  render() {
    const { search } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.hendleFormSubmit} />
        <Main>
          <ImageGallery searchImages={search} />
          <ToastContainer autoClose={2000} hideProgressBar={true} />
        </Main>
      </div>
    );
  }
}
