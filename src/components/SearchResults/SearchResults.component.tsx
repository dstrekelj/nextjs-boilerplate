import { useMemo } from 'react';
import { SearchResultsItem, SearchResultsItemProps } from './components/SearchResultsItem/SearchResultsItem.component';
import styles from './SearchResults.module.css';

export interface SearchResultsProps {
  items: SearchResultsItemProps[];
}

export function SearchResults(props: SearchResultsProps) {
  const items = useMemo(() => {
    if (props.items.length === 0) {
      return <div>No results</div>;
    }

    return props.items.map(item => <SearchResultsItem {...item} key={item.id} />);
  }, [props.items]);

  return <div className={styles['search-results']}>{items}</div>;
}
