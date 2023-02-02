import { FormEventHandler } from 'react';
import { clsx } from 'clsx';
import { Button, ButtonProps } from '../Button';
import { TextInput, TextInputProps } from '../TextInput';
import styles from './SearchForm.module.css';

export interface SearchFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: NonNullable<TextInputProps['onChange']>;
  value: TextInputProps['value'];
  label: ButtonProps['label'];
  disabled: ButtonProps['disabled'];
}

export function SearchForm(props: SearchFormProps) {
  const className = clsx(styles['search-form']);

  return (
    <form className={className} onSubmit={props.onSubmit}>
      <TextInput onChange={props.onChange} value={props.value} />
      <Button variant="primary" label={props.label} disabled={props.disabled} />
    </form>
  );
}
