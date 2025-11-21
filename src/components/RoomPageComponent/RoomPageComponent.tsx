import styles from './RoomPageComponent.module.css';
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
  price: 12500,
  description: 'просторный четырехместный вариант площадью 35,5 м². Две одинаковые спальни обеспечивают личное пространство каждому, два санузла избавляют от очередей по утрам. Есть прихожая для удобного хранения вещей'
}

type Props = {

}

export const RoomPageComponent: FC<Props> = ({...props}) => {

  const headerContext = useContext(HeaderContext);
  const navigationContext = useContext(NavigationContext);
  const tabContext = useContext(TabContext);
  const location = useLocation();
  const instanceRef = useRef<any>(null);
  const navigate = useNavigate();

  const [balcony, setBalcony] = useState<boolean>(false)
  const [floor, setFloor] = useState<number>(2)

  const [layout, setLayout] = useState<'layout' | '3d'>('layout')

  const [currentScene, setCurrentScene] = useState<'kitchen' | 'bedroom' | 'bathroom'>('kitchen');

  const scenes: Record<string, any> = {
    kitchen: {
      image: room1,
      markers: [
        {
          id: "bathroom",
          image: marker,
          size: { width: 100, height: 100 },
          position: { yaw: "160.5deg", pitch: "-0.1deg" },
          tooltip: "Ванная комната",
        },
        {
          id: "bedroom",
          image: marker,
          size: { width: 100, height: 100 },
          position: { yaw: "230.5deg", pitch: "-0.1deg" },
          tooltip: "Жилая комната",
        }
      ]
    },
    bedroom: {
      image: room3,
      markers: [
        {
          id: "kitchen",
          image: marker,
          size: { width: 100, height: 100 },
          position: { yaw: "110.5deg", pitch: "-0.1deg" },
          tooltip: "Кухня",
        },
        {
          id: "bathroom",
          image: marker,
          size: { width: 100, height: 100 },
          position: { yaw: "10.5deg", pitch: "-0.1deg" },
          tooltip: "Ванная комната",
        }
      ]
    },
    bathroom: {
      image: room2,
      markers: [
        {
          id: "kitchen",
          image: marker,
          size: { width: 100, height: 100 },
          position: { yaw: "270.5deg", pitch: "-0.1deg" },
          tooltip: "Кухня",
        }
      ]
    }
  };

  useEffect(() => {
      headerContext[1]('room');
      navigationContext[1]('price');
      if (!location.state) {
        tabContext[1]('price');
      }
  }, []);

  const updateMarkers = (markersPlugs: MarkersPlugin) => {

      markersPlugs.clearMarkers(true)

      scenes[currentScene].markers.forEach((e: any) => {
        markersPlugs.addMarker({...e});
      })

      scenes[currentScene].markers.forEach((e: any) => {
        markersPlugs.getMarker(e.id).domElement.addEventListener("click", () => {
          setCurrentScene(e.id)
        })
      })


  }

  useEffect(() => {
    if (instanceRef.current) {
      const markersPlugs: MarkersPlugin = instanceRef.current.getPlugin(MarkersPlugin);
      if (!markersPlugs) return;

      updateMarkers(markersPlugs);
    }
  }, [currentScene]);

  const handleReady = (instance: any) => {
    instanceRef.current = instance;

    const markersPlugs: MarkersPlugin = instanceRef.current.getPlugin(MarkersPlugin);
    if (!markersPlugs) return;

    updateMarkers(markersPlugs);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.header}>{room.name}</div>
        <div className={styles.title}>{room.title}</div>
        <div className={styles.balcony}>
          <ButtonBorder className={`${styles.button} ${!balcony && styles.active}`} title={'Без балконa'} onClick={() => setBalcony(false)}/>
          <ButtonBorder className={`${styles.button} ${balcony && styles.active}`} title={'С балконом'} onClick={() => setBalcony(true)}/>
        </div>
        <div className={styles.balcony}>
          <ButtonBorder className={`${styles.button} ${floor === 2 && styles.active}`} title={'2 этаж'} onClick={() => setFloor(2)}/>
          <ButtonBorder className={`${styles.button} ${floor === 3 && styles.active}`} title={'3 этаж'} onClick={() => setFloor(3)}/>
          <ButtonBorder className={`${styles.button} ${floor === 4 && styles.active}`} title={'4 этаж'} onClick={() => setFloor(4)}/>
          <ButtonBorder className={`${styles.button} ${floor === 5 && styles.active}`} title={'5 этаж'} onClick={() => setFloor(5)}/>
          <ButtonBorder className={`${styles.button} ${floor === 6 && styles.active}`} title={'6 этаж'} onClick={() => setFloor(6)}/>
        </div>

        <div>
          <div className={styles.description_about}>О номере</div>
          <div className={styles.description_text}>{room.description}</div>
        </div>
        <div className={styles.price_container}>
          <div className={styles.price}>{room.price} ₽/мес.</div>
        </div>
        <div className={styles.button_container}>
          <ButtonBorder className={styles.button} title={'Подать заявку'} onClick={() => {
          }}/>
        </div>
      </div>
      <div className={styles.view} style={{backgroundImage: `url(image/${layout === 'layout' ? 'room-alpha.svg' : 'room1.jpg'})`}}>
        <div className={styles.overlay_blur}></div>
        <div className={styles.switch}>
          <div><ButtonBorder title={'Планировка номера'} active={layout === 'layout'}
                             onClick={() => setLayout('layout')}/></div>
          <div><ButtonBorder title={'3д просмотр номера'} active={layout === '3d'} onClick={() => setLayout('3d')}/></div>
        </div>
        <div className={styles.layout}>
          {layout === 'layout' ? <img className={styles.image} src={room_alpha}/> : <ReactPhotoSphereViewer
            src={scenes[currentScene].image}
            height="100%"
            width="100%"
            littlePlanet={false}
            navbar={[]}
            plugins={[
              [MarkersPlugin, {...scenes[currentScene].markers}]
            ]}
            onReady={handleReady}
          />}
        </div>
      </div>
    </main>
  )

}