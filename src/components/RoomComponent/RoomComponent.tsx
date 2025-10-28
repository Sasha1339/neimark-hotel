import styles from './RoomComponent.module.css';
import {FC} from "react";
import {Button} from "@components/Button/Button";

type Props = {
  title: string;
  image: string;
  description: string;
  price: number;
  about: string;
  className?: string;
}

export const RoomComponent: FC<Props> = ({title, className, image, description, price, about, ...props}) => {




  return (
    <div className={`${styles.main} ${className}`} style={{backgroundImage: `url(${image})`}}>

      <div className={styles.description}>
        <div className={styles.price}>от {price} тыс. р.</div>
        <div className={styles.description_block}>
          <p className={styles.hint}>Супер комфортно</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.text_description}>{description}</p>
        </div>
        <div className={styles.about}>{about}</div>
        <Button className={styles.button} title={'Забронировать сейчас'} onClick={() => {
        }}/>
      </div>
    </div>
  )

}