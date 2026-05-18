import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./PartnerComponent.module.css";
import {gsap} from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import {AboutElementComponent} from "@components/AboutElementComponent/AboutElementComponent";
import {Icon} from "@components/Icon/Icon";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

const optionsPartner = [
  ['ИТ-компаний и корпоративных команд', 'Форумов, конференций, хакатонов', 'Олимпиад и образовательных программ'],
  ['Сервисам повседневного спроса для студентов и гостей', 'Проектам в сфере еды, здоровья, спорта и восстановления', 'Образовательным, карьерным и ИТ-форматам', 'Технологичному ритейлу, сервисам гаджетов и digital-решениям', 'Пространствам для досуга, общения и развития комьюнити'],
  ['Митапов и воркшопов', 'Конференций и лекций', 'Хакатонов и конкурсов']
]

export const PartnerComponent: FC<Props> = ({scrollerRef}) => {

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
      .from(`.${styles.container}`, { y: '100vw', opacity: 0, duration: 0.1 })
      .to(`.${styles.container}`, { y: 0, opacity: 1, duration: 0.5, ease: "sine.out" })


  }, [scrollerRef]);

  const textHeader = 'РАЗМЕЩЕНИЕ, ИНФРАСТРУКТУРА И ПЛОЩАДКИ — В ЕДИНОЙ ИТ-ЭКОСИСТЕМЕ';

  return (
    <section ref={triggerRef} className={styles.main}>

      <div ref={contentRef} className={styles.description_section}>
        <span className={styles.hint_span}>СОТРУДНИЧЕСТВО</span>
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

          <AboutElementComponent
                                 title={'Корпоративное проживание под ключ'}
                                 description={'Организуем проживание для сотрудников, участников и гостей ИТ-событий в центре города с удобной логистикой до ключевых площадок проведения мероприятий. \n\nПодходит:'}
                                 optionDescriptions={optionsPartner[0]}
                                 animateText={true}/>

          <AboutElementComponent
                                 title={'Аренда помещений'}
                                 description={'Арендуйте помещение в НЕЙМАРК и станьте частью среды, где студенты живут, учатся, работают и развивают технологические проекты. \n\nПодходит:'}
                                 optionDescriptions={optionsPartner[1]}
                                 animateText={true}/>

          <AboutElementComponent
                                 title={'Площадка для мероприятий'}
                                 description={'Готовые площадки для деловых, образовательных и технологических событий. \n\nПодходит:'}
                                 optionDescriptions={optionsPartner[2]}
                                 animateText={true}/>
        </div>

      </div>
    </section>
  )

}