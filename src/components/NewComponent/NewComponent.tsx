import {FC} from "react";
import styles from './NewComponent.module.css';


type Props = {
  src: string;
  title: string;
  description: string;
}

export const NewComponent: FC<Props> = ({src,title, description, ...props}) => {

  return (

    <div className={styles.main}>
      <img className={`${styles.image} ${window.innerWidth < 700 && styles.image_mobile}`} src={src} />
      <div className={styles.title}>{title}</div>
      <div className={`${styles.description} ${window.innerWidth < 700 && styles.description_mobile}`}>{description}</div>
    </div>

  )

}



