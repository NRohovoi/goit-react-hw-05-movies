import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import { Header, Form, Input, Button, ButtonSvg } from './SearchBar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();

    if (search.trim() === '') {
      toast.warn('Uncorrect value', { theme: 'dark' });
      return;
    }
    onSubmit(search);
    setSearch('');
  };

  const handleNameChange = e => {
    setSearch(e.target.value);
  };

  return (
    <Header>
      <Form onSubmit={onFormSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={handleNameChange}
        />
        <Button type="submit">
          <ButtonSvg />
          Search
        </Button>
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
export default Searchbar;
