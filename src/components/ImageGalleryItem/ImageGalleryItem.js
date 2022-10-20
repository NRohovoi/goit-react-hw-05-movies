import { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageListItem, Image } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  getDataValue = ({ target }) => {
    this.props.onClickFunc(target.dataset.largeimg);
  };

  render() {
    const { id, url, largeUrl } = this.props;
    return (
      <ImageListItem>
        <Image
          src={url}
          alt="imagess"
          data-id={id}
          data-largeimg={largeUrl}
          onClick={this.getDataValue}
        />
      </ImageListItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  largeUrl: PropTypes.string,
  url: PropTypes.string,
  onClickFunc: PropTypes.func,
};
