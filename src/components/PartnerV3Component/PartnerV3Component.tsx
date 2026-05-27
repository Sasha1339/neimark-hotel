import {FC, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./PartnerV3Component.module.css";
import {gsap} from "gsap";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

const windowHeight = window.innerHeight;

const headerPartner = [
  'Корпоративное\u00A0проживание\u00A0под\u00A0ключ',
  'Аренда\u00A0помещений',
  'Площадка\u00A0для\u00A0мероприятий'
]

const imagePartner = [
  "url('/image/corporativnoe.jpg')",
  "url('/image/community.webp')",
  "url('/image/square.jpg')"
]

const descriptionPartner = [
  'Организуем проживание для сотрудников, участников и гостей ИТ-событий в центре города с удобной логистикой до ключевых площадок проведения мероприятий.',
  'Арендуйте помещение в НЕЙМАРК и станьте частью среды, где студенты живут, учатся, работают и развивают технологические проекты.',
  'Готовые площадки для деловых, образовательных и технологических событий.'
]

const optionsPartner = [
  ['ИТ-компаний и корпоративных команд', 'Форумов, конференций, хакатонов', 'Олимпиад и образовательных программ'],
  ['Сервисам повседневного спроса для студентов и гостей', 'Проектам в сфере еды, здоровья, спорта и восстановления', 'Образовательным, карьерным и ИТ-форматам', 'Технологичному ритейлу, сервисам гаджетов и digital-решениям', 'Пространствам для досуга, общения и развития комьюнити'],
  ['Митапов и воркшопов', 'Конференций и лекций', 'Хакатонов и конкурсов']
]

export const PartnerV3Component: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null)

  const [type, setType] = useState<number>(0);

  useEffect(() => {
    if (!scrollerRef.current || !headingRef.current) return;

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

    gsap.to(headingRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: `top ${windowHeight / 2}px`,    // Когда начинаем двигать (30% от верха вьюпорта)
        end: `${windowHeight * 0.9}px ${windowHeight / 2}px`,   // Когда заканчиваем двигать
        scrub: true,
        // markers: true
      },
      keyframes: [
        { color: 'rgba(255, 255, 255)', duration: 0.0 }, // выход (последние 30%)
        { color: 'transparent', duration: 1.0 } // выход (последние 30%)
      ]
    });


  }, [scrollerRef]);

  const onSelectType = (type: number) => {
    gsap.timeline().to(`.${styles.text_header}, .${styles.text_description}, .${styles.list_block}, .${styles.image}`, {
      opacity: 0,
      x: '-100px',
      duration: 0.3          // 0-0.3с: исчезновение
    })
      .call(() => {
        setType(type);         // 0.3с: смена контента
      })
      .to(`.${styles.text_header}, .${styles.text_description}, .${styles.list_block}, .${styles.image}`, {
        opacity: 1,
        x: 0,
        duration: 0.3          // 0-0.3с: исчезновение
      });
  }

  const textHeader = 'РАЗМЕЩЕНИЕ, ИНФРАСТРУКТУРА И ПЛОЩАДКИ — В ЕДИНОЙ ИТ-ЭКОСИСТЕМЕ';

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

      </div>
      <div className={styles.first_item_block}>
        <div className={styles.line_for_insets}>
          <div className={styles.background_insets}>
            <div className={`${styles.insets} ${type === 0 && styles.insets_active}`} onClick={() => onSelectType(0)}>{'Корпоративное\u00A0проживание\u00A0под\u00A0ключ'}</div>
            <div className={`${styles.insets} ${type === 1 && styles.insets_active}`} onClick={() => onSelectType(1)}>{'Аренда\u00A0помещений'}</div>
            <div className={`${styles.insets} ${type === 2 && styles.insets_active}`} onClick={() => onSelectType(2)}>{'Площадка\u00A0для\u00A0мероприятий'}</div>
          </div>
        </div>
        <div className={styles.overlay_page}></div>
        <h2 className={styles.text_header}>{headerPartner[type]}</h2>
        <div className={styles.text_description}>{descriptionPartner[type]}</div>
        <div className={styles.bottom_block}>
          <div className={styles.image_block}>
            <div className={styles.image} style={{backgroundImage: imagePartner[type]}}></div>
          </div>
          <div className={styles.list_block}>
            <div className={styles.header_items}>Кому подходит:</div>
            {optionsPartner[type].map((e, i) => (
              <div key={i} className={styles.element_item}>{e}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

}