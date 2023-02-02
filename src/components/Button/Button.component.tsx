import { clsx } from 'clsx';
import styles from './Button.module.css';

export interface ButtonProps {
  /**
   * What text should the button display?
   */
  label: string;
  /**
   * What kind of action does the button represent?
   */
  variant: 'primary' | 'secondary';
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
}

/**
 * Button atom.
 */
export function Button(props: ButtonProps) {
  const className = clsx(styles.button, styles[`button--${props.variant}`]);

  return (
    <button className={className} disabled={props.disabled}>
      {props.label}
    </button>
  );
}
