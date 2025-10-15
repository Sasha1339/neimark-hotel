import {FC, ForwardedRef, forwardRef} from "react";
import styles from './Button.module.css';

type Props = {
  className?: string,
  title: string;
  active?: boolean;
  type?: 'button' | 'submit';
  onClick: (event: MouseEvent) => void;
}

export const Button = forwardRef<HTMLButtonElement, Props>(({active, className, type, title, onClick, ...props}, ref) => {

  return (
    <button ref={ref} className={`${styles.button} ${className} `} type={type ?? 'button'}>
      <span className={`${active && styles.button_element__highlight}`}>{ title }</span>
    </button>
  )

})