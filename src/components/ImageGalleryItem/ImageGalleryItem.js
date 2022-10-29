import PropTypes from 'prop-types';

import { ImageListItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, url, largeUrl, onClickFunc }) => {
  const getDataValue = ({ target }) => {
    onClickFunc(target.dataset.largeimg);
  };
  return (
    <ImageListItem>
      <Image
        src={url}
        alt="imagess"
        data-id={id}
        data-largeimg={largeUrl}
        onClick={getDataValue}
      />
    </ImageListItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  largeUrl: PropTypes.string,
  url: PropTypes.string,
  onClickFunc: PropTypes.func,
};
export default ImageGalleryItem;
