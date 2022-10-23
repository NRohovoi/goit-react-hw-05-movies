import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pixabay from './PixabayApi';

import SearchBar from './SearchBar/SearchBar';
import Loader from 'components/Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

import { Main } from './App.styled';

export class App extends Component {
  state = {
    search: null,
    images: null,
    loading: false,
    page: 1,
    total: null,
    largePageSrc: '',
  };

  hendleFormSubmit = search => {
    if (this.state.search === search) {
      toast.warning('Choose deferent');
      return;
    }
    this.setState({ search: search });
    toast.success('Ok, loading...');
  };

  async componentDidUpdate(_, prevState) {
    const { page } = this.state;
    const searchImages = prevState.search;
    const currentName = this.state.search;

    if (searchImages !== currentName) {
      this.setState({ loading: true });
      try {
        const responce = await Pixabay(page, currentName);
        return this.setState({
          images: responce.data.hits,
          total: responce.data.total,
        });
      } catch (error) {
        this.setState({ error: 'Faild to load images and photos' });
      } finally {
        this.setState({ loading: false });
      }
    }
    if (this.state.page !== prevState.page && this.state.page !== 1) {
      this.setState({ loading: true });
      const responce = await Pixabay(page, currentName);
      this.setState({
        images: [...prevState.images, ...responce.data.hits],
      });
      try {
        this.setState({ loading: true });
        const responce = await Pixabay(page, currentName);
        this.setState({
          images: [...prevState.images, ...responce.data.hits],
        });
      } catch (error) {
        this.setState({ error });
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  loadMore = () => {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage });
  };

  modalOpen = largePageSrc => {
    this.setState({ largePageSrc });
  };

  render() {
    const { images, loading, page, total, largePageSrc } = this.state;
    const modalOpen = this.modalOpen;
    return (
      <div>
        <SearchBar onSubmit={this.hendleFormSubmit} />
        <Main>
          {loading && <Loader />}

          {images && (
            <ImageGallery searchImages={images} modalOpen={modalOpen} />
          )}

          <ToastContainer autoClose={2000} hideProgressBar={true} />
          {12 * page <= total && (
            <Button value={'Load more'} onBtnClick={this.loadMore} />
          )}
        </Main>

        {largePageSrc && <Modal src={largePageSrc} onModalFunc={modalOpen} />}
      </div>
    );
  }
}
