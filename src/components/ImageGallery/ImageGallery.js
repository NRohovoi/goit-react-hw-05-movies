import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Pixabay from '../PixabayApi';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

import { ImageList } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    page: 1,
    total: null,
    largePageSrc: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevImg = prevProps.searchImages;
    const currentName = this.props.searchImages;

    if (prevImg !== currentName) {
      try {
        this.setState({ page: 1, loading: true });
        const responce = await Pixabay(page, currentName);
        this.setState({
          images: responce.data.hits,
          total: responce.data.total,
        });
      } catch (error) {
        this.setState({ error });
        console.log(error);
      } finally {
        setTimeout(() => {
          this.setState({ loading: false });
        }, 2000);
      }
    }

    if (this.state.page !== prevState.page && this.state.page !== 1) {
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

    return (
      <>
        {loading && <Loader />}
        {images && (
          <>
            <ImageList>
              {images.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                  key={nanoid()}
                  id={id}
                  url={webformatURL}
                  largeUrl={largeImageURL}
                  onClickFunc={this.modalOpen}
                />
              ))}
            </ImageList>
            {12 * page <= total && (
              <Button value={'Load more'} onBtnClick={this.loadMore} />
            )}
          </>
        )}
        {largePageSrc && (
          <Modal src={largePageSrc} onModalFunc={this.modalOpen} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchImages: PropTypes.string,
};
