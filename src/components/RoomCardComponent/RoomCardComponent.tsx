import styles from './RoomCardComponent.module.css';
import {FC, useContext, useEffect, useRef, useState} from "react";
import {ButtonBorder} from "@components/ButtonBorder/ButtonBorder";
import room_alpha from '../../assets/svg/room-alpha.svg';
import {HeaderContext} from "@/providers/HeaderContext";
import {NavigationContext} from "@/providers/NavigationContext";
import room1 from '@/assets/images/panoramas/room1.jpg'
import room2 from '@/assets/images/panoramas/room2.jpg'
import room3 from '@/assets/images/panoramas/room3.jpg'
import marker from '@/assets/svg/marker.svg'
import {ReactPhotoSphereViewer} from 'react-photo-sphere-viewer';
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import '@photo-sphere-viewer/markers-plugin/index.css';
import {useLocation, useNavigate} from "react-router-dom";
import {TabContext} from "@/providers/TabContext";

const room = {
  name: 'Номер Альфа',
  title: 'Стандартное размещение в двухкомнатном номере',
  price: 12.5,
  description: 'просторный четырехместный вариант площадью 35,5 м². Две одинаковые спальни обеспечивают личное пространство каждому, два санузла избавляют от очередей по утрам. Есть прихожая для удобного хранения вещей'
}

type Props = {

}

export const RoomCardComponent: FC<Props> = ({...props}) => {

  const headerContext = useContext(HeaderContext);
  const navigationContext = useContext(NavigationContext);
  const tabContext = useContext(TabContext);
  const location = useLocation();
  const instanceRef = useRef<any>(null);
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <img className={styles.image} src={room_alpha} />
      <div className={styles.description}>
        <div>
          <div className={styles.item}>Номер Альфа</div>
          <div className={styles.item_level_two}>2 комнаты, 4 спальных места</div>
          <div className={styles.item_level_three}>Без балкона</div>
          <div className={styles.item_level_three}>3 этаж корпуса "Байканур"</div>
        </div>
        <div className={styles.item_bottom}>
          <div className={styles.item}>12000 ₽/мес.</div>
          <div className={styles.buttons}>
            <ButtonBorder className={styles.button} title={'Посмотреть номер'} onClick={() => navigate('/room')} />
            <ButtonBorder className={styles.button} title={'Подать заявку'} onClick={() => {}} />
          </div>

        </div>


      </div>
    </div>
  )

}