import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./PartnerV2Component.module.css";
import {gsap} from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import {AboutElementComponent} from "@components/AboutElementComponent/AboutElementComponent";
import {Icon} from "@components/Icon/Icon";
import {Button} from "@components/Button/Button";
import {ButtonBorder} from "@components/ButtonBorder/ButtonBorder";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

const windowHeight = window.innerHeight;

const optionsPartner = [
  ['ИТ-компаний и корпоративных команд', 'Форумов, конференций, хакатонов', 'Олимпиад и образовательных программ'],
  ['Сервисам повседневного спроса для студентов и гостей', 'Проектам в сфере еды, здоровья, спорта и восстановления', 'Образовательным, карьерным и ИТ-форматам', 'Технологичному ритейлу, сервисам гаджетов и digital-решениям', 'Пространствам для досуга, общения и развития комьюнити'],
  ['Митапов и воркшопов', 'Конференций и лекций', 'Хакатонов и конкурсов']
]

export const PartnerV2Component: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null)

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
        end: `${windowHeight}px ${windowHeight / 2}px`,   // Когда заканчиваем двигать
        scrub: true,
        // markers: true
      },
      keyframes: [
        { color: 'rgba(255, 255, 255)', duration: 0.0 }, // выход (последние 30%)
        { color: '#233346', duration: 1.0 } // выход (последние 30%)
      ]
    });

    gsap.to(headingRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: `${windowHeight}px ${windowHeight / 2}px`,    // Когда начинаем двигать (30% от верха вьюпорта)
        end: `${windowHeight}px 0`,   // Когда заканчиваем двигать
        scrub: true,
        // markers: true
      },
      keyframes: [
        { color: '#233346', duration: 0.0 }, // выход (последние 30%)
        { color: 'transparent', duration: 1.0 } // выход (последние 30%)
      ]
    });

    //ПЕРВЙ БЛОК

    gsap.to(`.${styles.first_item_block}`, {
      scrollTrigger: {
        trigger: `.${styles.first_item_block}`,
        scroller: scrollerRef.current,
        start: "top bottom",    // Когда начинаем двигать (30% от верха вьюпорта)
        end: `top ${windowHeight * 0.15}px`,   // Когда заканчиваем двигать
        scrub: true,
        // markers: true
      },
      keyframes: [
        { scale: 1.2, duration: 0.0 }, // выход (последние 30%)
        { scale: 1.0, duration: 1.0 } // выход (последние 30%)
      ]
    });

    gsap.to(`.${styles.first_item_block}`, {
      scrollTrigger: {
        trigger: `.${styles.second_item_block}`,
        scroller: scrollerRef.current,
        start: `top ${windowHeight / 2}px`,    // Когда начинаем двигать (30% от верха вьюпорта)
        end: `top ${windowHeight * 0.15}px`,   // Когда заканчиваем двигать
        scrub: true,
        // markers: true
      },
      keyframes: [
        { scale: 1.0, filter: 'brightness(1.0)', y: 0, duration: 0.0 }, // выход (последние 30%)
        { scale: 0.8, filter: 'brightness(0.5)', y: '-20vh', duration: 1.0 } // выход (последние 30%)
      ]
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.first_item_block}`,
        scroller: scrollerRef.current,
        start: `top ${windowHeight * 0.50}px`,
        scrub: false, // scrub = false, чтобы анимация не зависела от скролла
        once: true,   // анимация срабатывает только один раз
      },
    })
      .from(`.${styles.first_item_block} .${styles.text_header}`, { x: '-100px', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.first_item_block} .${styles.text_header}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.5 })
      .from(`.${styles.first_item_block} .${styles.text_description}`, { x: '-100px', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.first_item_block} .${styles.text_description}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.5 })
      .from(`.${styles.first_item_block} .${styles.list_block}`, { x: '-100px', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.first_item_block} .${styles.list_block}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.5 })
      .from(`.${styles.first_item_block} .${styles.image}`, { x: '-100px', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.first_item_block} .${styles.image}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.5 })


    //Second БЛОК

    gsap.to(`.${styles.second_item_block}`, {
      scrollTrigger: {
        trigger: `.${styles.second_item_block}`,
        scroller: scrollerRef.current,
        start: "top bottom",    // Когда начинаем двигать (30% от верха вьюпорта)
        end: `top ${windowHeight * 0.15}px`,   // Когда заканчиваем двигать
        scrub: true,
        // markers: true
      },
      keyframes: [
        { scale: 1.2, duration: 0.0 }, // выход (последние 30%)
        { scale: 1.0, duration: 1.0 } // выход (последние 30%)
      ]
    });

    gsap.to(`.${styles.second_item_block}`, {
      scrollTrigger: {
        trigger: `.${styles.third_item_block}`,
        scroller: scrollerRef.current,
        start: `top ${windowHeight / 2}px`,    // Когда начинаем двигать (30% от верха вьюпорта)
        end: `top ${windowHeight * 0.15}px`,   // Когда заканчиваем двигать
        scrub: true,
        // markers: true
      },
      keyframes: [
        { scale: 1.0, filter: 'brightness(1.0)', y: 0, duration: 0.0 }, // выход (последние 30%)
        { scale: 0.9, filter: 'brightness(0.75)', y: '-10vh', duration: 1.0 } // выход (последние 30%)
      ]
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.second_item_block}`,
        scroller: scrollerRef.current,
        start: `top ${windowHeight * 0.50}px`,
        scrub: false, // scrub = false, чтобы анимация не зависела от скролла
        once: true,   // анимация срабатывает только один раз
        // markers: true
      },
    })
      .from(`.${styles.second_item_block} .${styles.text_header}`, { x: '-100px', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.second_item_block} .${styles.text_header}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.5 })
      .from(`.${styles.second_item_block} .${styles.text_description}`, { x: '-100px', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.second_item_block} .${styles.text_description}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.5 })
      .from(`.${styles.second_item_block} .${styles.list_block}`, { x: '-100px', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.second_item_block} .${styles.list_block}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.5 })
      .from(`.${styles.second_item_block} .${styles.image}`, { x: '-100px', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.second_item_block} .${styles.image}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.5 })


    //THIRD БЛОК

    gsap.to(`.${styles.third_item_block}`, {
      scrollTrigger: {
        trigger: `.${styles.third_item_block}`,
        scroller: scrollerRef.current,
        start: "top bottom",    // Когда начинаем двигать (30% от верха вьюпорта)
        end: `top ${windowHeight * 0.15}px`,   // Когда заканчиваем двигать
        scrub: true,
        // markers: true
      },
      keyframes: [
        { scale: 1.2, duration: 0.0 }, // выход (последние 30%)
        { scale: 1.0, duration: 1.0 } // выход (последние 30%)
      ]
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.third_item_block}`,
        scroller: scrollerRef.current,
        start: `top ${windowHeight * 0.50}px`,
        scrub: false, // scrub = false, чтобы анимация не зависела от скролла
        once: true,   // анимация срабатывает только один раз
      },
    })
      .from(`.${styles.third_item_block} .${styles.text_header}`, { x: '-100px', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.third_item_block} .${styles.text_header}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.5 })
      .from(`.${styles.third_item_block} .${styles.text_description}`, { x: '-100px', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.third_item_block} .${styles.text_description}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.5 })
      .from(`.${styles.third_item_block} .${styles.list_block}`, { x: '-100px', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.third_item_block} .${styles.list_block}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.5 })
      .from(`.${styles.third_item_block} .${styles.image}`, { x: '-100px', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.third_item_block} .${styles.image}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.5 })

  }, [scrollerRef]);

  const onSelectType = (type: number) => {
    switch (type) {
      case 0: {
        const bunsTopParent = document.querySelector(`.${styles.point_first_block}`)!.getBoundingClientRect().top - scrollerRef.current!.getBoundingClientRect().top;
        gsap.to(scrollerRef.current!, {
          scrollTop: scrollerRef.current!.scrollTop + bunsTopParent - windowHeight * 0.15,
          duration: 0.4,
          ease: 'power2.inOut'
        });
      }
        break;
      case 1: {
        const bunsTopParent = document.querySelector(`.${styles.point_second_block}`)!.getBoundingClientRect().top - scrollerRef.current!.getBoundingClientRect().top;
        gsap.to(scrollerRef.current!, {
          scrollTop: scrollerRef.current!.scrollTop + bunsTopParent - windowHeight * 0.15,
          duration: 0.4,
          ease: 'power2.inOut'
        });
      }
        break;
      case 2: {
        const bunsTopParent = document.querySelector(`.${styles.point_third_block}`)!.getBoundingClientRect().top - scrollerRef.current!.getBoundingClientRect().top;
        gsap.to(scrollerRef.current!, {
          scrollTop: scrollerRef.current!.scrollTop + bunsTopParent - windowHeight * 0.15,
          duration: 0.4,
          ease: 'power2.inOut'
        });
      }
        break;
    }
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
      <div className={styles.point_first_block}></div>
      <div className={styles.first_item_block} onClick={() => onSelectType(0)}>
        <h2 className={styles.text_header}>Корпоративное проживание под ключ</h2>
        <div className={styles.text_description}>Организуем проживание для сотрудников, участников и гостей ИТ-событий в
          центре города с удобной логистикой до ключевых площадок проведения мероприятий.
        </div>
        <div className={styles.bottom_block}>
          <div className={styles.image_block}>
            <div className={styles.image} style={{backgroundImage: "url('/image/corporativnoe.jpg')"}}></div>
          </div>
          <div className={styles.list_block}>
            <div className={styles.header_items}>Кому подходит:</div>
            {optionsPartner[0].map((e, i) => (
              <div key={i} className={styles.element_item}>{e}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.point_second_block}></div>
      <div className={styles.second_item_block} onClick={() => onSelectType(1)}>
        <h2 className={styles.text_header}>Аренда помещений</h2>
        <div className={styles.text_description}>Арендуйте помещение в НЕЙМАРК и станьте частью среды, где студенты
          живут, учатся, работают и развивают технологические проекты.
        </div>
        <div className={styles.bottom_block}>
          <div className={styles.image_block}>
            <div className={styles.image} style={{backgroundImage: "url('/image/community.webp')"}}></div>
          </div>
          <div className={styles.list_block}>
            <div className={styles.header_items}>Кому подходит:</div>
            {optionsPartner[1].map((e, i) => (
              <div key={i} className={styles.element_item}>{e}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.point_third_block}></div>
      <div className={styles.third_item_block} onClick={() => onSelectType(2)}>
        <h2 className={styles.text_header}>Площадка для мероприятий</h2>
        <div className={styles.text_description}>Готовые площадки для деловых, образовательных и технологических
          событий.
        </div>
        <div className={styles.bottom_block}>
          <div className={styles.image_block}>
            <div className={styles.image} style={{backgroundImage: "url('/image/square.jpg')"}}></div>
          </div>
          <div className={styles.list_block}>
            <div className={styles.header_items}>Кому подходит:</div>
            {optionsPartner[2].map((e, i) => (
              <div key={i} className={styles.element_item}>{e}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

}