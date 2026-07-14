import {FC, RefObject, useEffect, useRef, useState} from "react";
import styles from "./PriceV4Component.module.css";
import {gsap} from "gsap";
import Hls from "hls.js";
import {openPdf} from "@/shared/functions";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

type RoomType = 'one_place' | 'two_place' | 'living_room';

const optionsByRoomType = {
  'one_place': ['Кровать с пастельным бельем', 'Шкаф', 'Стол и стул', 'Ростовое зеркало', 'Умная колонка СБЕР', 'Санузел', 'Полотенца', 'Душевые принадлежности', 'Фен'],
  'two_place': ['2 кровати с пастельным бельем', 'Шкаф', 'Стол и стул', 'Ростовое зеркало', 'Умная колонка СБЕР', 'Санузел', 'Полотенца', 'Душевые принадлежности', 'Фен'],
  'living_room': ['Диван', 'ТВ', 'Чайник', 'Холодильники', 'Аэрогриль и мультиварка', 'Посуда', 'Прачечная'],
}

const titleByRoomType = {
  'one_place': 'Одноместное размещение',
  'two_place': 'Двухместное размещение',
  'living_room': 'Гостиная',
}

const priceByRoomType = {
  'one_place': 'от 12000 ₽',
  'two_place': 'от 17000 ₽',
  'living_room': undefined,
}

export const PriceV4Component: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const [type, setType] = useState<RoomType>('one_place')
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top bottom",
        scrub: false, // scrub = false, чтобы анимация не зависела от скролла
        once: true,   // анимация срабатывает только один раз
      },
    })
      .from(`.${styles.text_header_animated}`, { x: '100vw', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.text_header_animated}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.7 })

  }, [scrollerRef]);

  const onSelectType = (type: RoomType) => {
    gsap.timeline().to(`.${styles.room_flex}`, {
      opacity: 0,
      y: '10%',
      duration: 0.3          // 0-0.3с: исчезновение
    })
      .call(() => {
        setType(type);         // 0.3с: смена контента
      })
      .to(`.${styles.room_flex}`, {
        opacity: 1,
        y: 0,
        duration: 0.4,         // 0.3-0.7с: появление
        delay: 0.1             // небольшая пауза после смены
      });
  }

  const textHeader = 'ДОСТУПНЫЕ КАТЕГОРИИ НОМЕРОВ';

  return (
    <section ref={triggerRef} className={styles.main}>
      <div ref={headerRef} className={styles.header_wrapper}>
        <h1 className={styles.header_about}>{textHeader.split(" ").map((word, wi) => (
          <span key={wi} className={styles.word}>
          {word.split("").map((letter, li) => (
            <span
              key={li}
              className={styles.text_header_animated}
            >
              {letter}
            </span>
          ))}
            <span className={styles.space}>&nbsp;</span>
        </span>
        ))}</h1>
      </div>
      <div ref={contentRef} className={styles.description_section} style={{height: `calc(100vh - ${headerRef.current?.offsetHeight ?? 0}px`}}>

        <div className={styles.container}>

          <div className={styles.header_rooms}>
            <div className={styles.glass_header}>
              <div className={`${type === 'one_place' && styles.active_room}`}
                   onClick={() => onSelectType('one_place')}>Одноместное размещение
              </div>
              {window.innerWidth > 1000 && <div>•</div>}
              <div className={`${type === 'two_place' && styles.active_room}`}
                   onClick={() => onSelectType('two_place')}>Двухместное размещение
              </div>
              {window.innerWidth > 1000 && <div>•</div>}
              <div className={`${type === 'living_room' && styles.active_room}`}
                   onClick={() => onSelectType('living_room')}>Гостиная
              </div>
            </div>
          </div>
          <div className={styles.description_side}>
            <div className={`${styles.room_flex}`}>
              {window.innerWidth > 530 && <div className={`${styles.glass_block} ${styles.title}`}>Удобства</div>}
              <ul className={`${styles.glass_block} ${styles.options}`}>
                {optionsByRoomType[type].map((e, i) => (
                  <li key={i} className={styles.option}>{e}</li>
                ))}
              </ul>
              {priceByRoomType[type] &&
                <div className={`${styles.glass_block} ${styles.title}`}>Цена {priceByRoomType[type]}</div>}
              <div className={`${styles.buttons}`}>
                <div className={`${styles.button} ${styles.glass_block_button}`} onClick={() => window.open('https://neimark.ukmira.ru/login')}>Подать заявку</div>
                <div className={`${styles.button} ${styles.glass_block_button}`} onClick={() => openPdf('price')}>Прайс-лист</div>
              </div>
            </div>
            <div className={styles.video_background}>
              {type === 'one_place' && <div className={styles.img_item}>
                <img className={styles.img} src="/image/omega.webp" style={{animationDelay: '0s'}}/>
                <img className={styles.img} src="/image/comfort.jpg" style={{animationDelay: '2.5s'}}/>
              </div>}
              {type === 'two_place' && <div className={styles.img_item}>
                <img className={styles.img} src="/image/alpha.webp" style={{animationDelay: '0s'}}/>
                <img className={styles.img} src="/image/img_1.png" style={{animationDelay: '2.5s'}}/>
              </div>}
              {type === 'living_room' && <div className={styles.img_item}>
                <img className={styles.img} src="/image/all-inclusive.jpg" style={{animationDelay: '0s'}}/>
                <img className={styles.img} src="/image/about_im_1_1.jpeg" style={{animationDelay: '2.5s'}}/>
              </div>}
            </div>

          </div>

        </div>

      </div>
    </section>
  )

}