import { SearchForm, SearchFormProps, SearchFormState } from '@/components/SearchForm';
import { SearchResults, SearchResultsProps } from '@/components/SearchResults';
import { useCallback, useEffect, useState } from 'react';

export function Search() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [search, setSearch] = useState<SearchFormState | null>(null);
  const [results, setResults] = useState([]);

  const handleSearch = useCallback<SearchFormProps['onSearch']>(data => {
    setSearch(data);
  }, []);

  useEffect(() => {
    if (search === null || search.query === '') {
      setResults([]);

      return;
    }

    (async () => {
      setDisabled(true);

      try {
        const response = await fetch(`/api/shows?search=${search?.query}`);
        const json = await response.json();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setResults(json.map((item: any) => item.show));
      } catch (error) {
        console.error(error);
      }

      setDisabled(false);
    })();
  }, [search]);

  return (
    <>
      <SearchForm disabled={disabled} onSearch={handleSearch} />
      <SearchResults items={results as SearchResultsProps['items']} />
    </>
  );
}
