import {FC, RefObject, useEffect, useRef} from "react";
import styles from "./AboutHotelComponent.module.css";
import {gsap} from "gsap";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const AboutHotelComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const conditionRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const documentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    gsap.to(conditionRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 50%",
        end: "30% top",
        scrub: true,
        // markers: true
      },
      keyframes: [
        { x: 0, duration: 0.3 },    // вход (30% пути)
        { x: 0, duration: 0.4 },    // пауза (40% пути)
        { x: "100vw", duration: 0.3 } // выход (последние 30%)
      ]
    });

    gsap.to(ruleRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "20% top",
        end: "50% top",
        scrub: true,
        // markers: true
      },
      keyframes: [
        { y: 0, duration: 0.3 },    // вход (30% пути)
        { y: 0, duration: 0.4 },    // пауза (40% пути)
        { y: "-100vh", duration: 0.3 } // выход (последние 30%)
      ]
    });

    gsap.to(documentsRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "40% top",
        end: "70% top",
        scrub: true,
        // markers: true
      },
      keyframes: [
        { x: 0, duration: 0.3 },    // вход (30% пути)
        { x: 0, duration: 0.4 },    // пауза (40% пути)
        { x: "-100vw", duration: 0.3 } // выход (последние 30%)
      ]
    });

  }, [scrollerRef]);


  return (
    <section ref={triggerRef} className={styles.main}>
      <div ref={contentRef} className={styles.description_section}>
        <div ref={conditionRef} className={`${styles.description_row} ${styles.condition}`}>
          <h1 className={styles.title_row}>Условия проживания</h1>
          <img className={styles.image_row}
               src={'https://cdn.b12.io/client_media/VhBHooYp/f96472b8-8445-11f0-9509-0242ac110002-IMG_9216.WEBP'}
               alt={''}/>
          <div className={styles.text_row}>Гостиницы Неймарк предлагают различные типы комнат, чтобы удовлетворить
            потребности студентов и их родителей. Вы можете выбрать между одноместными, двухместными и многоместными
            номерами. Каждый номер оснащён всем необходимым для комфортного проживания: мебель, интернет и уборка. Это
            идеальный выбор для студентов, которые ищут доступное и удобное место для жизни во время учёбы. Мы заботимся
            о том, чтобы каждый номер соответствовал высоким стандартам, обеспечивая безопасность и уют для наших
            постояльцев.
          </div>
        </div>

        <div ref={ruleRef} className={`${styles.description_row} ${styles.rule}`}>
          <h1 className={styles.title_row}>Правила проживания</h1>
          <img className={styles.image_row}
               src={'https://cdn.b12.io/client_media/VhBHooYp/83e592b2-84b2-11f0-ad8d-0242ac110002-IMG_9221.WEBP'}
               alt={''}/>
          <div className={styles.text_row}>В гостиницах Неймарк установлены правила проживания, которые помогут создать
            комфортную и безопасную атмосферу для всех гостей. Мы стремимся к тому, чтобы каждый постоялец чувствовал
            себя уютно и мог сосредоточиться на учёбе. В правилах описаны основные моменты, такие как время тишины,
            использование общих пространств и порядок выхода из номеров. Ознакомление с правилами обязательно для всех
            постояльцев, чтобы обеспечить гармоничное сосуществование и уважение к личному пространству каждого.
          </div>
        </div>

        <div ref={documentsRef} className={`${styles.description_row} ${styles.documents}`}>
          <h1 className={styles.title_row}>Документы при заселении</h1>
          <img className={styles.image_row}
               src={'https://cdn.b12.io/client_media/VhBHooYp/f96472b8-8445-11f0-9509-0242ac110002-IMG_9216.WEBP'}
               alt={''}/>
          <div className={styles.text_row}>При заселении в гостиницы Неймарк необходимо предоставить определённые
            документы. Это может включать паспорт, студенческий билет и другие удостоверяющие документы. Мы понимаем,
            что процесс может быть сложным, поэтому наши сотрудники готовы помочь вам на каждом этапе. Правильная
            подготовка документов ускорит процесс заселения и позволит вам быстрее начать наслаждаться комфортом нашего
            проживания. Убедитесь, что у вас есть все необходимые документы перед приездом.
          </div>
        </div>

      </div>
    </section>
  )

}