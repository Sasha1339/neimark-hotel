import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./PriceComponent.module.css";
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

export const PriceComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });


  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0); // возвращаемся к первому слайду
    }, 3000);

    return () => clearInterval(interval);
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
      .from(`.${styles.embla}`, { y: '100vw', opacity: 0, duration: 0.1 })
      .to(`.${styles.embla}`, { y: 0, opacity: 1, duration: 0.5, ease: "sine.out" })


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
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>

            <div className={styles.embla__slide}><RoomsSlideComponent title={'Номер Альфа'} image={alpha} price={12.5}
                                                                      description={'Стандартное размещение в двухместном номере'} about={'Площадь 35.5 м | 2 С/У | 4 персоны'}></RoomsSlideComponent></div>
            <div className={styles.embla__slide}><RoomsSlideComponent title={'Номер Гамма'} image={gamma} price={16}
                                                                      description={'Номера повышенной комфортности'} about={'Площадь 33.3 м | 2 С/У | 3 персоны'}></RoomsSlideComponent></div>
            <div className={styles.embla__slide}><RoomsSlideComponent title={'Номер Омега'} image={omega} price={25}
                                                                      description={'Одноместное размещение'} about={'Площадь 16.7 м | 1 С/У | 2 персоны'}></RoomsSlideComponent></div>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.button} onClick={() => emblaApi && emblaApi.scrollPrev()}>{'<'}</div>
          <div className={styles.button} onClick={() => emblaApi && emblaApi.scrollNext()}>{'>'}</div>
        </div>

      </div>
    </section>
  )

}