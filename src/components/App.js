import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pixabay from './PixabayApi';

import SearchBar from './SearchBar/SearchBar';
import Loader from 'components/Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

import { Main } from './App.styled';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState('');
  const [largePageSrc, setLargePageSrc] = useState('');

  const hendleFormSubmit = toSearch => {
    if (search === toSearch) {
      toast.warning('Choose deferent');
      return;
    }

    setSearch(toSearch);
    setPage(1);
    toast.success('Ok, loading...');
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    async function fetchImages() {
      const { data } = await Pixabay(page, search);

      try {
        setIsLoading(true);
        setImages(data.hits);
        setTotal(data.total);
      } catch (error) {
        toast.warning('Faild to load images and photos');
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }

      if (page !== 1) {
        try {
          setImages([...images, ...data.hits]);
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
    }
    fetchImages();
  }, [search, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const modalOpen = largePageSrc => {
    setLargePageSrc(largePageSrc);
  };

  return (
    <div>
      <SearchBar onSubmit={hendleFormSubmit} />
      <Main>
        {isLoading && <Loader />}
        <ToastContainer autoClose={2000} hideProgressBar={true} />
        {images && <ImageGallery searchImages={images} modalOpen={modalOpen} />}
        {12 * page <= total && (
          <Button value={'Load more'} onBtnClick={loadMore} />
        )}
      </Main>

      {largePageSrc && <Modal src={largePageSrc} onModalFunc={modalOpen} />}
    </div>
  );
};
