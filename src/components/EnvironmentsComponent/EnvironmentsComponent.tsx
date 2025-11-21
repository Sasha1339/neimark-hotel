import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./EnvironmentsComponent.module.css";
import barber from '@/assets/images/barber.png';
import mola from '@/assets/images/mola.webp';
import ozon from '@/assets/images/ozon.webp';
import cofe from '@/assets/images/cofe-like.jpeg';
import sber from '@/assets/images/sber.webp';
import wild from '@/assets/images/wild.webp';
import ya from '@/assets/images/ya2.jpg';
import {Button} from "@components/Button/Button";
import {gsap} from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import {RoomsSlideComponent} from "@components/RoomsSlideComponent/RoomsSlideComponent";
import {EnvironmentComponent} from "@components/EnvironmentComponent/EnvironmentComponent";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const EnvironmentsComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});


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
      .from(`.${styles.text_header_animated}`, {x: '100vw', opacity: 0, stagger: 0.01, duration: 0.01})
      .to(`.${styles.text_header_animated}`, {x: 0, opacity: 1, stagger: 0.01, duration: 0.7})

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 30%",
        scrub: false, // scrub = false, чтобы анимация не зависела от скролла
        once: true,   // анимация срабатывает только один раз
      },
    })
      .from(`.${styles.embla}`, {y: '100vw', opacity: 0, duration: 0.1})
      .to(`.${styles.embla}`, {y: 0, opacity: 1, duration: 0.5, ease: "sine.out"})


  }, [scrollerRef]);

  const textHeader = 'ВСЕ УДОБСТВА ПОБЛИЗОСТИ';

  return (
    <section ref={triggerRef} className={styles.main}>

      <div ref={contentRef} className={styles.description_section}>
        <span className={styles.hint_span}>ОКРУЖЕНИЕ</span>
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
          {window.innerWidth > 700 ? (<div className={styles.embla__container}>

            <div className={styles.embla__slide}><EnvironmentComponent image={barber} title={'Барбер шоп'}
                                                                       address={'Б. овраги 12к1'}/></div>
            <div className={styles.embla__slide}><EnvironmentComponent image={mola} title={'MOLA MOLA'}
                                                                       address={'Б. овраги 12к2'}/></div>
            <div className={styles.embla__slide}><EnvironmentComponent image={ozon} title={'OZON'}
                                                                       address={'Б. овраги 12к3'}/></div>
            <div className={styles.embla__slide}><EnvironmentComponent image={wild} title={'WILDBERRIES'}
                                                                       address={'Б. овраги 12к4'}/></div>
            <div className={styles.embla__slide}><EnvironmentComponent image={cofe} title={'COFFEE LIKE'}
                                                                       address={'Б. овраги 12к5'}/></div>
            <div className={styles.embla__slide}><EnvironmentComponent image={sber} title={'SBER'}
                                                                       address={'Б. овраги 12к6'}/></div>
            <div className={styles.embla__slide}><EnvironmentComponent image={ya} title={'Я.Маркет'}
                                                                       address={'Б. овраги 12к7'}/></div>
          </div>) : (<div className={styles.embla__container}>

            <div className={styles.embla__slide}><EnvironmentComponent image={barber} title={'Барбер шоп'}
                                                                       address={'Б. овраги 12к1'}/>
              <EnvironmentComponent image={mola} title={'MOLA MOLA'}
                                    address={'Б. овраги 12к2'}/></div>
            <div className={styles.embla__slide}><EnvironmentComponent image={ozon} title={'OZON'}
                                                                       address={'Б. овраги 12к3'}/><EnvironmentComponent
              image={wild} title={'WILDBERRIES'}
              address={'Б. овраги 12к4'}/></div>
            <div className={styles.embla__slide}><EnvironmentComponent image={cofe} title={'COFFEE LIKE'}
                                                                       address={'Б. овраги 12к5'}/><EnvironmentComponent
              image={sber} title={'SBER'}
              address={'Б. овраги 12к6'}/></div>
            <div className={styles.embla__slide}><EnvironmentComponent image={ya} title={'Я.Маркет'}
                                                                       address={'Б. овраги 12к7'}/></div>
          </div>)}
        </div>

      </div>
    </section>
  )

}