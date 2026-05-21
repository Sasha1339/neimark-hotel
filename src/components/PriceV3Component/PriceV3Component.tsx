import {FC, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./PriceV3Component.module.css";
import alpha from '@/assets/images/alpha.webp';
import gamma from '@/assets/images/gamma.webp';
import omega from '@/assets/images/omega.webp';
import {Button} from "@components/Button/Button";
import {gsap} from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import {RoomsSlideComponent} from "@components/RoomsSlideComponent/RoomsSlideComponent";
import Hls from "hls.js";

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

export const PriceV3Component: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [emblaListRef, emblaListApi] = useEmblaCarousel({ loop: true });
  const [emblaPriceRef, emblaPriceApi] = useEmblaCarousel({ loop: true });

  const [type, setType] = useState<RoomType>('one_place');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls();
      hls.loadSource("/hls/index.m3u8");
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current && videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = "/hls/index.m3u8";
    }
  }, []);
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
        <div>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className={styles.video_background}
          />
        </div>


      </div>
    </section>
  )

}