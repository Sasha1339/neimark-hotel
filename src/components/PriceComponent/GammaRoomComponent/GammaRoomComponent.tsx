import {FC, MouseEvent, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./GammaRoomComponent.module.css";
import {Button} from "@components/Button/Button";
import {gsap} from "gsap";

type Props = {
  onBack?: () => void;
}

export const GammaRoomComponent: FC<Props> = ({ onBack, ...props}) => {

  const [index, setIndex] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (index === 2) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 5000)
  }, [index]);

  const getImageUrl = (index: number) => {
    switch (index) {
      case 0:
        return 'https://cdn.b12.io/client_media/VhBHooYp/c8a805ff-84b2-11f0-a3c9-0242ac110002-IMG_9216.WEBP';
      case 1:
        return 'https://cdn.b12.io/client_media/VhBHooYp/83ee689e-84b2-11f0-90a8-0242ac110002-IMG_9222.WEBP';
      case 2:
        return 'https://cdn.b12.io/client_media/VhBHooYp/83d78a37-84b2-11f0-8508-0242ac110002-IMG_9220.WEBP';
    }
    return 'https://cdn.b12.io/client_media/VhBHooYp/468ba60c-8442-11f0-b86e-0242ac110002-IMG_9217.WEBP'
  }

  const onClick = () => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      });
      onBack?.();
    }
  }

  return (
    <div ref={contentRef} className={`${styles.content} ${window.innerWidth < 700 && styles.content_mobile}`}
         style={{backgroundImage: 'url(' + getImageUrl(index) + ')'}}>
      <div className={`${styles.gradient_element} ${window.innerWidth < 700 && styles.gradient_element_mobile}`}>
        <div className={`${styles.title} ${window.innerWidth < 700 && styles.title_mobile}`}>Номер Гамма</div>

        <div className={`${styles.title} ${window.innerWidth < 700 && styles.title_mobile}`}>От 16 тыс. руб.</div>

        <ul className={`${styles.paragraph} ${window.innerWidth < 700 && styles.paragraph_mobile}`}>
          <li>Трехместный номер</li>
          <li>Общая площадь 33,3 м</li>
          <li>Две одинаковые спальни</li>
          <li>Два санузла</li>
        </ul>
        <Button className={`${window.innerWidth < 700 && styles.button_mobile}`} title={'Забронировать сейчас'} onClick={() => {
        }}/>
      </div>
      {onBack && <Button className={styles.button_back} title={'<'} onClick={onClick}/>}

    </div>
  )

}