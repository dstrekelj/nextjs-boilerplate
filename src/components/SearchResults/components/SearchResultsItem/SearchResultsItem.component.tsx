import styles from './SearchResultsItem.module.css';

export interface SearchResultsItemProps {
  id: number;
  name: string;
  url: string;
}

export function SearchResultsItem(props: SearchResultsItemProps) {
  return (
    <div className={styles['search-results-item']} id={props.id.toString()}>
      <a href={props.url} target="_blank" rel="noreferrer">
        {props.name}
      </a>
    </div>
  );
}
