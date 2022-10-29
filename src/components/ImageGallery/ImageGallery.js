import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ searchImages, modalOpen }) => {
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
};

ImageGallery.propTypes = {
  searchImages: PropTypes.array,
  modalOpen: PropTypes.func,
};
export default ImageGallery;
