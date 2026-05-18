import {FC, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./PriceV2Component.module.css";
import alpha from '@/assets/images/alpha.webp';
import gamma from '@/assets/images/gamma.webp';
import omega from '@/assets/images/omega.webp';
import {Button} from "@components/Button/Button";
import {gsap} from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import {RoomsSlideComponent} from "@components/RoomsSlideComponent/RoomsSlideComponent";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

type RoomType = 'one_place' | 'two_place' | 'living_room';

const optionsByRoomType = {
  'one_place': ['Кровать с пастельным бельем', 'Шкаф', 'Стол и стул', 'Ростовое зеркало', 'Умная колонка СБЕР', 'Санузел', 'Полотенца', 'Душевые принадлежности', 'Фен'],
  'two_place': ['2 кровати с пастельным бельем', 'Шкаф', 'Стол и стул', 'Ростовое зеркало', 'Умная колонка СБЕР', 'Санузел', 'Полотенца', 'Душевые принадлежности', 'Фен'],
  'living_room': ['Диван', 'ТВ', 'Чайник', 'Холодильники', 'Аэрогриль и мультиварка', 'Посуда', 'Прачечная'],
}

const priceByRoomType = {
  'one_place': 'от 12000 ₽',
  'two_place': 'от 17000 ₽',
  'living_room': '',
}

export const PriceV2Component: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [emblaListRef, emblaListApi] = useEmblaCarousel({ loop: true });
  const [emblaPriceRef, emblaPriceApi] = useEmblaCarousel({ loop: true });

  const [type, setType] = useState<RoomType>('one_place');

  const onSelect = (index: number) => {
    const key = Array.from(Object.keys(optionsByRoomType) as RoomType[])[index];
    setType(key);
  }

  useEffect(() => {
    emblaApi?.scrollTo(Array.from(Object.keys(optionsByRoomType) as RoomType[]).indexOf(type))
    emblaListApi?.scrollTo(Array.from(Object.keys(optionsByRoomType) as RoomType[]).indexOf(type))
    emblaPriceApi?.scrollTo(Array.from(Object.keys(optionsByRoomType) as RoomType[]).indexOf(type))
  }, [type]);

  useEffect(() => {
    if (!emblaApi) return

    const callbackFn = () => onSelect(emblaApi.selectedScrollSnap());

    emblaApi?.on('select', callbackFn);
  }, [emblaApi]);

  useEffect(() => {
    if (!scrollerRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 30%",
        scrub: false, // scrub = false, чтобы анимация не зависела от скролла
        once: true,   // анимация срабатывает только один раз
      },
    })
      .from(`.${styles.text_header_animated}`, { x: '100vw', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.text_header_animated}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.7 })

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 30%",
        scrub: false, // scrub = false, чтобы анимация не зависела от скролла
        once: true,   // анимация срабатывает только один раз
      },
    })
      .from(`.${styles.container}`, { y: '100vw', opacity: 0, duration: 0.1 })
      .to(`.${styles.container}`, { y: 0, opacity: 1, duration: 0.5, ease: "sine.out" })


  }, [scrollerRef]);

  const textHeader = 'ДОСТУПНЫЕ КАТЕГОРИИ НОМЕРОВ';

  return (
    <section ref={triggerRef} className={styles.main}>

      <div ref={contentRef} className={styles.description_section}>
        <span className={styles.hint_span}>ЦЕНЫ</span>
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
        <div className={styles.container}>
          <div className={styles.container_left}>
            <div className={styles.switch}>
              <span onClick={() => setType('one_place')}
                    className={`${styles.case} ${type === 'one_place' && styles.active}`}>ОДНОМЕСТНОЕ РАЗМЕЩЕНИЕ</span>
              <span>•</span>
              <span onClick={() => setType('two_place')}
                    className={`${styles.case} ${type === 'two_place' && styles.active}`}>ДВУХМЕСТНОЕ РАЗМЕЩЕНИЕ</span>
              <span>•</span>
              <span onClick={() => setType('living_room')}
                    className={`${styles.case} ${type === 'living_room' && styles.active}`}>ГОСТИНАЯ</span>
            </div>
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.embla__container}>
                <div className={styles.embla__slide}>
                  <div className={styles.slide_room_image} style={{backgroundImage: `url(${alpha})`}}></div>
                </div>
                <div className={styles.embla__slide}>
                  <div className={styles.slide_room_image} style={{backgroundImage: `url(${gamma})`}}></div>
                </div>
                <div className={styles.embla__slide}>
                  <div className={styles.slide_room_image} style={{backgroundImage: `url(${omega})`}}></div>
                </div>
              </div>
            </div>
            <div className={styles.embla_price} ref={emblaPriceRef}>
              <div className={styles.embla__container}>
                <div className={styles.embla__slide}>
                  <div className={styles.price}>
                    <span className={styles.price_text}>{priceByRoomType['one_place']}</span>
                  </div>
                </div>
                <div className={styles.embla__slide}>
                  <div className={styles.price}>
                    <span className={styles.price_text}>{priceByRoomType['two_place']}</span>
                  </div>
                </div>
                <div className={styles.embla__slide}>
                  <div className={styles.price}>
                    <span className={styles.price_text}>{priceByRoomType['living_room']}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container_right}>
            <div className={styles.header_right}>
              <span>Удобства</span>
            </div>
            <div className={styles.embla_list} ref={emblaListRef}>
              <div className={styles.embla__container}>
                <div className={styles.embla__slide__list}>
                  <ul className={styles.about_list}>
                    {optionsByRoomType['one_place'].map((e, i) => (
                      <li key={i} className={styles.about}>{e}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.embla__slide__list}>
                  <ul className={styles.about_list}>
                    {optionsByRoomType['two_place'].map((e, i) => (
                      <li key={i} className={styles.about}>{e}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.embla__slide__list}>
                  <ul className={styles.about_list}>
                    {optionsByRoomType['living_room'].map((e, i) => (
                      <li key={i} className={styles.about}>{e}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}