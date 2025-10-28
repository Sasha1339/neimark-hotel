import styles from './EnvironmentComponent.module.css';
import {FC} from "react";
import {Button} from "@components/Button/Button";

type Props = {
  title: string;
  image: string;
  className?: string;
  address: string;
}

export const EnvironmentComponent: FC<Props> = ({title, className, image, address, ...props}) => {




  return (
    <div className={`${styles.main} ${className}`} style={{backgroundImage: `url(${image})`}}>
      <div className={styles.gradient_overlay}></div>
      <div className={styles.description}>
        <div className={styles.address}>{address}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  )

}