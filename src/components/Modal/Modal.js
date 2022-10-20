import { Component } from 'react';
import PropTypes from 'prop-types';

import { Backdrop, ImageBox, Image } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.modalClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.modalClose);
  }

  onCloseOverlay = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    this.props.onModalFunc(false);
  };

  modalClose = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onModalFunc(false);
  };

  render() {
    const { src } = this.props;
    return (
      <Backdrop onClick={this.onCloseOverlay}>
        <ImageBox>
          <Image src={src} alt="smt" />
        </ImageBox>
      </Backdrop>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string,
  onModalFunc: PropTypes.func,
};
