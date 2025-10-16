import {FC, ForwardedRef, forwardRef, SyntheticEvent} from "react";
import styles from './Button.module.css';

type Props = {
  className?: string,
  title: string;
  active?: boolean;
  type?: 'button' | 'submit';
  onClick: (event: SyntheticEvent) => void;
}

export const Button = forwardRef<HTMLButtonElement, Props>(({active, className, type, title, onClick, ...props}, ref) => {

  return (
    <button ref={ref} className={`${styles.button} ${className} `} type={type ?? 'button'} onClick={(e) => onClick(e)}>
      <span className={`${active && styles.button_element__highlight}`}>{ title }</span>
    </button>
  )

})