import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./ThreeStepsComponent.module.css";
import {gsap} from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import {AboutElementComponent} from "@components/AboutElementComponent/AboutElementComponent";
import {Icon} from "@components/Icon/Icon";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const ThreeStepsComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

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


  }, [scrollerRef]);

  const textHeader = 'ТРИ ШАГА К ПРОЖИВАНИЮ МЕЧТЫ';
  const textHeaderExcursion = 'Экскурсия для студентов / Экскурсия для абитуриентов';

  return (
    <section ref={triggerRef} className={styles.main}>

      <div ref={contentRef} className={styles.description_section}>
        <span className={styles.hint_span}>ТРИ ШАГА</span>
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

          <AboutElementComponent className={styles.block_instruction}
                                 title={'Подай заявку на сайте'}
                                 animateText={true}/>
          <Icon name={'double-arrow'} rotate={-90} size={50}/>
          <AboutElementComponent className={styles.block_instruction}
                                 title={'Подтверди успеваемость и специальность справкой из вуза'}
                                 animateText={true}/>
          <Icon name={'double-arrow'} rotate={-90} size={50}/>
          <AboutElementComponent className={styles.block_instruction}
                                 title={'Заселяйся в кампус в любое удобное время!'}
                                 animateText={true}/>
        </div>
        <h1 className={styles.header_about_mini}>{textHeaderExcursion.split(" ").map((word, wi) => (
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
    </section>
  )

}