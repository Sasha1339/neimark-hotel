import styles from './AboutElementComponent.module.css';
import {FC} from "react";
import {Button} from "@components/Button/Button";

type Props = {
  description: string;
  title: string;
  className?: string;
}

export const AboutElementComponent: FC<Props> = ({title, className, description, ...props}) => {




  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.gradient_overlay}></div>
      <div className={styles.description}>

        <div className={styles.description_text}>{description}</div>
        <hr/>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  )

}