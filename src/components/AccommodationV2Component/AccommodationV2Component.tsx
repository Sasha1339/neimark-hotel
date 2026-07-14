import {FC, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./AccommodationV2Component.module.css";
import conditions from '@/assets/images/conditions.webp';
import rules from '@/assets/images/rules.webp';
import docs from '@/assets/images/docs.jpeg';
import {gsap} from 'gsap';
import {Button} from "@components/Button/Button";
import {AboutElementComponent} from "@components/AboutElementComponent/AboutElementComponent";
import {openPdf} from "@/shared/functions";
import {BaseCartElement, TwoBlurGlass} from "@components/BaseCartElement/BaseCartElement";
import {Icon} from "@components/Icon/Icon";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const AccommodationV2Component: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);

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

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top bottom",
        scrub: false, // scrub = false, чтобы анимация не зависела от скролла
        once: true,   // анимация срабатывает только один раз
      },
    })
      .from(`.${styles.content}`, {y: '100vh', opacity: 0, duration: 0.1})
      .to(`.${styles.content}`, {y: 0, opacity: 1, duration: 0.5, ease: "sine.out"})


  }, [scrollerRef]);

  const textHeader = 'Собрали всю необходимую информацию здесь'.toUpperCase();

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
        <div ref={imageRef} className={styles.content}>
          <div className={styles.content_item}>
            <BaseCartElement
              activeHover
              background={{backgroundImage: 'linear-gradient(-45deg, var(--main-light-green), var(--text-color-default))'}}
              onClick={() => openPdf('public')}
              image={<Icon name={'document_dark'} size={80}/>}>
              <TwoBlurGlass title="Скачать" maxWidthDown={100} maxWidthUp={100} description={'Публичная\nоферта'} justifyContent="space-between" positionUp="end" positionDown="start" theme="light"></TwoBlurGlass>
            </BaseCartElement>
          </div>
          <div className={styles.content_item}>
            <BaseCartElement
              activeHover
              background={{backgroundImage: 'linear-gradient(-45deg, var(--main-purple), var(--text-color-default))'}}
              onClick={() => openPdf('price')}
              image={<Icon name={'document_dark'} size={80}/>}>
              <TwoBlurGlass title="Скачать" maxWidthDown={100} maxWidthUp={100} description={'Стоимость\nпроживания'} justifyContent="space-between" positionUp="end" positionDown="start" theme="light"></TwoBlurGlass>
            </BaseCartElement>
          </div>
          <div className={styles.content_item}>
            <BaseCartElement
              activeHover
              background={{backgroundImage: 'linear-gradient(-45deg, var(--text-color-active), var(--text-color-default))'}}
              onClick={() => openPdf('rules')}
              image={<Icon name={'document_dark'} size={80}/>}>
              <TwoBlurGlass title="Скачать" maxWidthDown={100} maxWidthUp={100} description={'Правила\nпроживания'} justifyContent="space-between" positionUp="end" positionDown="start" theme="light"></TwoBlurGlass>
            </BaseCartElement>
          </div>
        </div>

      </div>
    </section>
  )

}