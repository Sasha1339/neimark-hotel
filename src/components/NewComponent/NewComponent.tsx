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
      <img className={styles.image} src={src} />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>

  )

}



