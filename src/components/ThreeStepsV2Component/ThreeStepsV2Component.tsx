import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./ThreeStepsV2Component.module.css";
import {gsap} from "gsap";
import {BaseCartElement, TwoBlurGlass} from "@components/BaseCartElement/BaseCartElement";
import {Icon} from "@components/Icon/Icon";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const ThreeStepsV2Component: FC<Props> = ({scrollerRef}) => {

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
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.task_block}>
              <Icon name={'checkbox'} size={window.innerWidth < 1000 ? 20 : 30}/>
              <div className={styles.text_task}>{'Подай\u00A0заявку на сайте'}</div>
            </div>
            <div className={styles.task_block}>
              <Icon name={'checkbox'} size={window.innerWidth < 1000 ? 20 : 30}/>
              <div className={styles.text_task}>{'Подтверди\u00A0успеваемость\u00A0и\nспециальность справкой из вуза'}</div>
            </div>
            <div className={styles.task_block}>
              <Icon name={'checkbox'} size={window.innerWidth < 1000 ? 20 : 30}/>
              <div className={styles.text_task}>{'Заселяйся в кампус\u00A0в\nлюбое\u00A0удобное время!'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}