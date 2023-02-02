import { clsx } from 'clsx';
import styles from './TextInput.module.css';

type ElementProps = Pick<React.ComponentPropsWithoutRef<'input'>, 'value' | 'onChange'>;

export type TextInputProps = ElementProps;

/**
 * Text input atom.
 */
export function TextInput(props: TextInputProps) {
  const className = clsx(styles['text-input'], styles['text-input--default']);

  return <input {...props} type="text" className={className} />;
}
