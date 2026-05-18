import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./ExcursionComponent.module.css";
import {gsap} from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import {AboutElementComponent} from "@components/AboutElementComponent/AboutElementComponent";
import {Icon} from "@components/Icon/Icon";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const ExcursionComponent: FC<Props> = ({scrollerRef}) => {

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

  const textHeader = 'Экскурсия для студентов / Экскурсия для абитуриентов';

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

      </div>
    </section>
  )

}