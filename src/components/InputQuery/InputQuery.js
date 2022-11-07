import { useState } from 'react';

import { StyledForm, Input, Button, ButtonSvg } from './inputQuery.styled.js';

export const InputQuery = ({ onSubmitFunc, valueQ }) => {
  const [query, setQuery] = useState(valueQ ?? '');

  const onHandleSubmit = e => {
    e.preventDefault();
    if (!query) return;

    onSubmitFunc(query);
    setQuery('');
  };

  return (
    <StyledForm onSubmit={onHandleSubmit}>
      <Input
        type="text"
        value={query}
        placeholder="Choose you movie"
        onChange={e => setQuery(e.target.value)}
      />
      <Button type="submit">
        <ButtonSvg />
        Find
      </Button>
    </StyledForm>
  );
};
