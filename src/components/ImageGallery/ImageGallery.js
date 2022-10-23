import { Component } from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import { ImageList } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  render() {
    const { searchImages, modalOpen } = this.props;
    return (
      <ImageList>
        {searchImages.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            url={webformatURL}
            largeUrl={largeImageURL}
            onClickFunc={modalOpen}
          />
        ))}
      </ImageList>
    );
  }
}

ImageGallery.propTypes = {
  searchImages: PropTypes.array,
  modalOpen: PropTypes.func,
};
