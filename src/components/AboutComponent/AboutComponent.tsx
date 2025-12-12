import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./AboutComponent.module.css";
import img1_1 from '@/assets/images/about_im_1_1.jpeg';
import img1_2 from '@/assets/images/about_im_1_2.jpeg';
import img2_1 from '@/assets/images/about_im_2_1.jpg';
import img2_2 from '@/assets/images/about_im_2_2.jpg';
import {Button} from "@components/Button/Button";
import {gsap} from "gsap";
import {useNavigate} from "react-router-dom";
import {EnvironmentComponent} from "@components/EnvironmentComponent/EnvironmentComponent";
import barber from "@/assets/images/barber.png";
import mola from "@/assets/images/mola.webp";
import ozon from "@/assets/images/ozon.webp";
import wild from "@/assets/images/wild.webp";
import cofe from "@/assets/images/cofe-like.jpeg";
import sber from "@/assets/images/sber.webp";
import ya from "@/assets/images/ya2.jpg";
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
      .from(`.${styles.animate_before_first}`, { y: '100vw', opacity: 0, duration: 0.1 })
      .to(`.${styles.animate_before_first}`, { y: 0, opacity: 1, duration: 0.3 })
      .to(`.${styles.animate_before_first}`, { duration: 0.05 })
      .from(`.${styles.animate_before_second}`, { y: '100vw', opacity: 0, duration: 0.1 })
      .to(`.${styles.animate_before_second}`, { y: 0, opacity: 1, duration: 0.3 })

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
                                                                       description={'Новая гостиница с продуманной архитектурой и функциональными зонами. Среда, созданная для фокуса, развития и комфортной жизни.'}/></div>
            <div className={styles.embla__slide}><AboutElementComponent title={'Включено все необходимое'}
                                                                        description={'В стоимость проживания уже включены интернет, коммунальные платежи, уборка номера, замена постельного белья и полотенец, прачечная.'}/></div>
            <div className={styles.embla__slide}><AboutElementComponent title={'Комфорт'}
                                                                        description={'Современный ремонт, мебель, умные технологии и внимание к деталям — каждый номер продуман так, чтобы вы чувствовали себя как дома, только еще удобнее.'}/></div>
            <div className={styles.embla__slide}><AboutElementComponent title={'Безопасность 24/7'}
                                                                        description={'Все под контролем: круглосуточная охрана, интеллектуальная система видеонаблюдения и электронная пропускная система.'}/></div>
            <div className={styles.embla__slide}><AboutElementComponent  title={'Комьюнити'}
                                                                         description={'НЕЙМАРК — это среда единомышленников. Здесь легко находить друзей, партнёров и наставников, получать поддержку и развиваться вместе.'}/></div>
            <div className={styles.embla__slide}><AboutElementComponent title={'Центр города - центр событий'}
                                                                        description={'Живите в шаговой доступности от вузов, офисов ИТ-компаний, исторического центра и ключевых городских мероприятий. Меньше времени в дороге — больше времени на развитие и жизнь.'}/></div>
            <div className={styles.embla__slide}><AboutElementComponent title={'Подземная парковка'}
                                                                        description={'Тёплая подземная парковка для автомобилей и электромототранспорта.'}/></div>
          </div>
        </div>
      </div>
    </section>
  )

}