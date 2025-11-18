import styles from './RoomsSlideComponent.module.css';
import {FC} from "react";
import {Button} from "@components/Button/Button";
import {useLocation, useNavigate, useNavigation} from "react-router-dom";

type Props = {
  title: string;
  image: string;
  description: string;
  price: number;
  about: string;
  className?: string;
}

export const RoomsSlideComponent: FC<Props> = ({title, className, image, description, price, about, ...props}) => {

  const location = useLocation();
  const navigate = useNavigate();

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
        <Button className={styles.button} title={'Посмотреть'} onClick={() => navigate(`room`, {state: {background: location}})}/>
      </div>
    </div>
  )

}