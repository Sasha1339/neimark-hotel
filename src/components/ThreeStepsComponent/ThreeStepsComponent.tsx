import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./ThreeStepsComponent.module.css";
import {gsap} from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import {AboutElementComponent} from "@components/AboutElementComponent/AboutElementComponent";
import {Icon} from "@components/Icon/Icon";
import {BaseCartElement, TwoBlurGlass} from "@components/BaseCartElement/BaseCartElement";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

const countGlass = 10;

export const ThreeStepsComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null)

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
      .from(`.${styles.item_1}`, { x: '-100vw', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.item_1}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.7 })
      .from(`.${styles.item_2}`, { x: '-100vw', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.item_2}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.7 })
      .from(`.${styles.item_3}`, { x: '-100vw', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.item_3}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.7 })

  }, [scrollerRef]);

  useEffect(() => {

    if (!headingRef.current) return

    // gsap.to(headingRef.current, {
    //   scrollTrigger: {
    //     trigger: triggerRef.current,
    //     scroller: scrollerRef.current,
    //     start: "top top",
    //     end: "500px top",
    //     scrub: true,
    //     // markers: true
    //   },
    //   keyframes: [
    //     { color: "transparent", duration: 0.0 },    // вход (30% пути)
    //     { color: "var(--text-color-default)", duration: 1.0 },    // пауза (40% пути)
    //   ]
    // });

  }, [scrollerRef, headingRef])

  const textHeader = 'ТРИ ШАГА К ПРОЖИВАНИЮ МЕЧТЫ';

  return (
    <section ref={triggerRef} className={styles.main}>

      <div ref={contentRef} className={styles.description_section}>
        <h1 ref={headingRef} className={styles.header_about}>{textHeader.split(" ").map((word, wi) => (
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
          <div className={styles.left_side}>
            <div className={styles.left_side_overlay}>
              {Array(countGlass).fill(0).map((e, i) => <div className={styles.glass_effect} style={{backdropFilter: `blur(${(countGlass - i) * 5}px)`}}></div>)}
            </div>
            <div className={styles.tasks_block}>
              <div className={`${styles.glass_block} ${styles.item_1}`}>1. Подай заявку на сайте</div>
              <div className={`${styles.glass_block} ${styles.item_2}`}>2. Подтверди успеваемость и специальность справкой из вуза</div>
              <div className={`${styles.glass_block} ${styles.item_3}`}>3. Заселяйся в кампус в любое удобное время!</div>
            </div>
          </div>
          <div className={styles.right_side}>
            <div className={`${styles.right_side_overlay} ${styles.item_1}`}>
              <BaseCartElement background={{background: 'url("/image/task.jpg")'}}/>
            </div>
            <div className={`${styles.right_side_overlay} ${styles.item_2}`}>
              <BaseCartElement background={{background: 'url("/image/zachetka.jpeg")'}}/>
            </div>
            <div className={`${styles.right_side_overlay} ${styles.item_3}`}>
              <BaseCartElement background={{background: 'url("/image/zasel.jpg")'}}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}