import { useCallback, useMemo, useState } from 'react';
import { SearchForm as Component, SearchFormProps as Props } from './SearchForm.component';

export interface SearchFormState {
  query: string;
}

export interface SearchFormProps {
  onSearch: (data: SearchFormState) => void;
  disabled: boolean;
}

export function SearchForm(props: SearchFormProps) {
  const [state, setState] = useState<SearchFormState>({
    query: '',
  });

  const handleSearch = useCallback<Props['onSubmit']>(
    event => {
      event.preventDefault();

      props.onSearch(state);
    },
    [props, state]
  );

  const updateState = useCallback<Props['onChange']>(event => {
    setState(state => ({ ...state, query: event.target.value }));
  }, []);

  const label = useMemo<string>(() => (props.disabled ? 'Searching...' : 'Search'), [props.disabled]);

  return (
    <Component
      disabled={props.disabled}
      label={label}
      onChange={updateState}
      onSubmit={handleSearch}
      value={state.query}
    />
  );
}
