import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Backdrop, ImageBox, Image } from './Modal.styled';

export const Modal = ({ onModalFunc, src }) => {
  useEffect(() => {
    window.addEventListener('keydown', modalClose);
    return () => window.removeEventListener('keydown', modalClose);
  }, []);

  const onCloseOverlay = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onModalFunc(false);
  };

  const modalClose = e => {
    if (e.code !== 'Escape') {
      return;
    }
    onModalFunc(false);
  };

  return (
    <Backdrop onClick={onCloseOverlay}>
      <ImageBox>
        <Image src={src} />
      </ImageBox>
    </Backdrop>
  );
};

Modal.propTypes = {
  src: PropTypes.string,
  onModalFunc: PropTypes.func,
};
export default Modal;
