import styles from "./CardAdaptedComponent.module.css";
import {FC} from "react";


type Props = {
  title: string,
  description: string,
  backdrop: string;
}

export const CardAdaptedComponent: FC<Props> = ({title, description, backdrop, ...props}) => {



  return (
    <div className={styles.main}>
      <img className={styles.image_backdrop} src={backdrop}/>
      <div className={styles.header_text}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  )

}