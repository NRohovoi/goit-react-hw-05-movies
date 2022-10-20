import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import { Header, Form, Input, Button, ButtonSvg } from './SearchBar.styled';

export default class Searchbar extends Component {
  state = {
    search: '',
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;

    if (this.state.search.trim() === '') {
      toast.warn('Uncorrect value', { theme: 'dark' });
      return;
    }

    onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  handleNameChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onFormSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleNameChange}
          />
          <Button type="submit">
            <ButtonSvg />
            Search
          </Button>
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
