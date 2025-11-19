import {FC, ForwardedRef, forwardRef, SyntheticEvent} from "react";
import styles from './ButtonBorder.module.css';

type Props = {
  className?: string,
  title: string;
  active?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  defaultClassName?: boolean;
  onClick: (event: SyntheticEvent) => void;
}

export const ButtonBorder = forwardRef<HTMLButtonElement, Props>(({active, disabled, className, type, title, onClick, defaultClassName = true, ...props}, ref) => {

  return (
    <button ref={ref} disabled={disabled} className={`${defaultClassName && styles.button} ${active && styles.active} ${className}`} type={type ?? 'button'} onClick={(e) => onClick(e)}>
      <span className={`${active && styles.button_element__highlight}`}>{ title }</span>
    </button>
  )

})