import {FC, RefObject, useEffect, useRef} from "react";
import styles from "./AboutHotelComponent.module.css";
import {gsap} from "gsap";
import {ReactComponent as HotelPreview} from "@/assets/svg/hotel-preview.svg";
import {ReactComponent as Pointer} from "@/assets/svg/pointer.svg";
import {ReactComponent as RuleOne} from "@/assets/svg/sticker_one.svg";
import {ReactComponent as RuleTwo} from "@/assets/svg/sticker_two.svg";
import {ReactComponent as RuleThree} from "@/assets/svg/sticker_three.svg";
import {ReactComponent as RuleFour} from "@/assets/svg/sticker_four.svg";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const AboutHotelComponent: FC<Props> = ({scrollerRef}) => {



  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const conditionRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const documentsRef = useRef<HTMLDivElement>(null);

  const hotelPreviewRef = useRef<SVGSVGElement>(null);
  const pointerRef = useRef<SVGSVGElement>(null);

  const ruleOneRef = useRef<SVGSVGElement>(null);
  const ruleTwoRef = useRef<SVGSVGElement>(null);
  const ruleThreeRef = useRef<SVGSVGElement>(null);
  const ruleFourRef = useRef<SVGSVGElement>(null);

  const documentsBackRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!scrollerRef.current) return;

    gsap.to(conditionRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 50%",
        end: "40% top",
        scrub: true,
      },
      keyframes: [
        { x: 0, duration: 0.3 },
        { x: 0, duration: 0.4 },
        { x: "100vw", duration: 0.3 }
      ]
    });

    gsap.to(hotelPreviewRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 50%",
        end: "40% top",
        scrub: true
      },
      keyframes: [
        { x: "25%", duration: 0.3 },
        { x: "25%", duration: 0.4 },
        { x: "300%", duration: 0.3 }
      ]
    });

    gsap.to(pointerRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 50%",
        end: "40% top",
        scrub: true
      },
      keyframes: [
        { x: "10%", duration: 0.3 },
        { x: "10%", duration: 0.4 },
        { x: "-300%", duration: 0.3 }
      ]
    });

    gsap.to('.window', {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 50%",
        end: "40% top",
        scrub: true
      },
      keyframes: [
        { x: 0, duration: 0.3 },
        { fill: "#FFEF4A", duration: 0.4 },
        { fill: "#FFEF4A", duration: 0.3 },
      ]
    });

    gsap.to(ruleRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "30% top",
        end: "60% top",
        scrub: true,
        // markers: true
      },
      keyframes: [
        { y: 0, duration: 0.3 },    // вход (30% пути)
        { y: 0, duration: 0.4 },    // пауза (40% пути)
        { y: "-100vh", duration: 0.3 } // выход (последние 30%)
      ]
    });

    gsap.to(ruleOneRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "30% top",
        end: "60% top",
        scrub: true
      },
      keyframes: [
        { x: 0, duration: 0.4 },
        { x: 0, duration: 0.2 },
        { x: '100vw', duration: 0.4 }
      ]
    });

    gsap.to(ruleTwoRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "30% top",
        end: "60% top",
        scrub: true
      },
      keyframes: [
        { x: 0, duration: 0.4 },
        { x: 0, duration: 0.2 },
        { x: '-100vw', duration: 0.4 }
      ]
    });


    gsap.to(ruleThreeRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "30% top",
        end: "60% top",
        scrub: true
      },
      keyframes: [
        { x: 0, duration: 0.4 },
        { x: 0, duration: 0.2 },
        { y: '200%', duration: 0.39 },
        { autoAlpha: 0, duration: 0.01 },
      ]
    });

    gsap.to(ruleFourRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "30% top",
        end: "60% top",
        scrub: true
      },
      keyframes: [
        { x: 0, duration: 0.4 },
        { x: 0, duration: 0.2 },
        { y: '-100vh', duration: 0.4 }
      ]
    });



    gsap.to(documentsRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "50% top",
        end: "90% top",
        scrub: true
      },
      keyframes: [
        { x: 0, duration: 0.6 },
        { x: 0, duration: 0.4 }
      ]
    });

    gsap.to(documentsBackRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "50% top",
        end: "90% top",
        scrub: true
      },
      keyframes: [
        {visibility: 'inherit', duration: 0.01},
        { y: 0, duration: 0.49 },
        { x: 0, duration: 0.4 }
      ]
    });

  }, [scrollerRef]);


  return (
    <section ref={triggerRef} className={styles.main}>
      <div ref={contentRef} className={styles.description_section}>
        {window.innerWidth > 700 &&  <><HotelPreview ref={hotelPreviewRef} className={styles.hotel_preview} />
        <Pointer ref={pointerRef} className={styles.pointer} />

          <RuleOne ref={ruleOneRef} className={styles.rule_one} />
          <RuleTwo ref={ruleTwoRef} className={styles.rule_two} />
          <RuleThree ref={ruleThreeRef} className={styles.rule_three} />
          <RuleFour ref={ruleFourRef} className={styles.rule_four} /> </>}

        <div ref={documentsBackRef} className={styles.documentsBack}></div>

        <div ref={conditionRef} className={`${styles.description_row} ${styles.condition} ${window.innerWidth < 700 && styles.description_row_mobile}`}>
          <h1 className={styles.title_row}>Условия проживания</h1>
          <img className={`${styles.image_row} ${window.innerWidth < 700 && styles.image_row_mobile}`}
               src={'https://cdn.b12.io/client_media/VhBHooYp/f96472b8-8445-11f0-9509-0242ac110002-IMG_9216.WEBP'}
               alt={''}/>
          <div className={`${styles.text_row} ${window.innerWidth < 700 && styles.text_row_mobile}`}>Гостиницы Неймарк предлагают различные типы комнат, чтобы удовлетворить
            потребности студентов и их родителей. Вы можете выбрать между одноместными, двухместными и многоместными
            номерами. Каждый номер оснащён всем необходимым для комфортного проживания: мебель, интернет и уборка. Это
            идеальный выбор для студентов, которые ищут доступное и удобное место для жизни во время учёбы. Мы заботимся
            о том, чтобы каждый номер соответствовал высоким стандартам, обеспечивая безопасность и уют для наших
            постояльцев.
          </div>
        </div>

        <div ref={ruleRef} className={`${styles.description_row} ${styles.rule} ${window.innerWidth < 700 && styles.description_row_mobile}`}>
          <h1 className={styles.title_row}>Правила проживания</h1>
          <img className={`${styles.image_row} ${window.innerWidth < 700 && styles.image_row_mobile}`}
               src={'https://cdn.b12.io/client_media/VhBHooYp/83e592b2-84b2-11f0-ad8d-0242ac110002-IMG_9221.WEBP'}
               alt={''}/>
          <div className={`${styles.text_row} ${window.innerWidth < 700 && styles.text_row_mobile}`}>В гостиницах Неймарк установлены правила проживания, которые помогут создать
            комфортную и безопасную атмосферу для всех гостей. Мы стремимся к тому, чтобы каждый постоялец чувствовал
            себя уютно и мог сосредоточиться на учёбе. В правилах описаны основные моменты, такие как время тишины,
            использование общих пространств и порядок выхода из номеров. Ознакомление с правилами обязательно для всех
            постояльцев, чтобы обеспечить гармоничное сосуществование и уважение к личному пространству каждого.
          </div>
        </div>

        <div ref={documentsRef} className={`${styles.description_row} ${styles.documents} ${window.innerWidth < 700 && styles.description_row_mobile}`}>
          <h1 className={styles.title_row}>Документы при заселении</h1>
          <img className={`${styles.image_row} ${window.innerWidth < 700 && styles.image_row_mobile}`}
               src={'https://cdn.b12.io/client_media/VhBHooYp/f96472b8-8445-11f0-9509-0242ac110002-IMG_9216.WEBP'}
               alt={''}/>
          <div className={`${styles.text_row} ${window.innerWidth < 700 && styles.text_row_mobile}`}>При заселении в гостиницы Неймарк необходимо предоставить определённые
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