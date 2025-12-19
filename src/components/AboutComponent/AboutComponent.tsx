import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./AboutComponent.module.css";
import {gsap} from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import {AboutElementComponent} from "@components/AboutElementComponent/AboutElementComponent";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const AboutComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});


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
      .from(`.${styles.embla}`, {y: '100vw', opacity: 0, duration: 0.1})
      .to(`.${styles.embla}`, {y: 0, opacity: 1, duration: 0.5, ease: "sine.out"})


  }, [scrollerRef]);

  const textHeader = 'КОМФОРТНЫЕ  МЕБЕЛИРОВАННЫЕ  НОМЕРА  С  ОБСЛУЖИВАНИЕМ  В  ЦЕНТРЕ  ГОРОДА';

  return (
    <section ref={triggerRef} className={styles.main}>
      <div className={styles.main_overlay}></div>
      <div ref={contentRef} className={styles.description_section}>
        <span className={styles.hint_span}>О НАС</span>
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

            <div className={styles.embla__slide}><AboutElementComponent title={'Современное пространство'}
                                                                        animateText={true}
                                                                        icon={'coworking'}
                                                                        description={'Новая гостиница с\u00A0продуманной архитектурой и\u00A0зонированием для\u00A0жизни, работы и\u00A0развития'}/>
            </div>
            <div className={styles.embla__slide}><AboutElementComponent title={'Включено все необходимое'}
                                                                        animateText={true}
                                                                        icon={'all-inclusive'}
                                                                        description={'Интернет, коммунальные услуги, уборка, смена белья и\u00A0полотенец, прачечная — уже включены в\u00A0стоимость'}/>
            </div>
            <div className={styles.embla__slide}><AboutElementComponent title={'Комфорт'}
                                                                        animateText={true}
                                                                        icon={'comfort'}
                                                                        description={'Современный интерьер, необходимая техника, удобная мебель и\u00A0умные решения для\u00A0жизни без\u00A0лишних забот'}/>
            </div>
            <div className={styles.embla__slide}><AboutElementComponent title={'Безопасность 24/7'}
                                                                        animateText={true}
                                                                        icon={'security'}
                                                                        description={'Круглосуточная охрана, видеонаблюдение и\u00A0электронный доступ в\u00A0корпуса'}/>
            </div>
            <div className={styles.embla__slide}><AboutElementComponent title={'Комьюнити'}
                                                                        animateText={true}
                                                                        icon={'community'}
                                                                        description={'Среда единомышленников для\u00A0общения, сотрудничества и\u00A0роста'}/>
            </div>
            <div className={styles.embla__slide}><AboutElementComponent title={'Центр города'}
                                                                        animateText={true}
                                                                        icon={'city'}
                                                                        description={'Вы в\u00A0эпицентре городской жизни и\u00A0ключевых событий города'}/>
            </div>
            <div className={styles.embla__slide}><AboutElementComponent title={'Подземная парковка'}
                                                                        animateText={true}
                                                                        icon={'parking'}
                                                                        description={'Тёплая подземная парковка для\u00A0автомобилей и\u00A0электромототранспорта'}/>
            </div>
          </div>
        </div>
          <div className={`${styles.buttons}`}>
            <div className={styles.button} onClick={() => emblaApi && emblaApi.scrollPrev()}>{'<'}</div>
            <div className={styles.button} onClick={() => emblaApi && emblaApi.scrollNext()}>{'>'}</div>
          </div>
      </div>
    </section>
  )

}