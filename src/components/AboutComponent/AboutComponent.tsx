import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./AboutComponent.module.css";
import {ButtonContext} from "../../providers/ButtonContext";
import {gsap} from "gsap";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const AboutComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);


  const nameRef = useRef<HTMLDivElement>(null);

  const articleRef = useRef<HTMLElement>(null);
  const imageTwoRef = useRef<HTMLImageElement>(null);
  const imageOneRef = useRef<HTMLImageElement>(null);
  const blurRef = useRef<HTMLImageElement>(null);
  const backgroundOneRef = useRef<HTMLImageElement>(null);
  const backgroundTwoRef = useRef<HTMLImageElement>(null);

  const buttonContext = useContext(ButtonContext);

  useEffect(() => {
    if (!scrollerRef.current) return;

    gsap.to(backgroundOneRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
      keyframes: [
        { opacity: 1, duration: 0.35 },
        { x: '100%', duration: 0.35 },
        { x: '100%', duration: 0.3 },
      ]
    });

    gsap.to(backgroundTwoRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
      keyframes: [
        { x: '-100%', duration: 0.35 },
        { x: '0', duration: 0.35 },
        { x: '0', duration: 0.3 },
      ]
    });

    gsap.to(blurRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
      keyframes: [
        { x: '0', duration: 0.7 },
        { backgroundImage: 'var(--gradient-opacity-gray-black-75-main-black)', duration: 0.3 },
      ]
    });

    gsap.to(articleRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: "20% top",
        scrub: true,                // плавное связывание со скроллом
      },
      height: window.innerWidth < 700 ? '350px' : '100%'
    });

    gsap.to(nameRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "20% top",
        end: "30% top",
        scrub: true,                // плавное связывание со скроллом
      },
      opacity: 1
    });

    gsap.to(nameRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "30% top",
        end: "40% top",
        scrub: true,                // плавное связывание со скроллом
      },
      textShadow: '0 0 10px #E68F61'
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "40% top",
        end: "60% top",
        scrub: true,
      },
    });

    tl.fromTo(
      imageTwoRef.current,
      { xPercent: 110, opacity: 0 },
      { xPercent: 0, opacity: 1, ease: "power2.out", duration: 1 },
      0
    ).to(
      imageOneRef.current,
      { xPercent: -110, opacity: 0.6, ease: "power2.inOut", duration: 1 },
      0
    );

    gsap.to(nameRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "60% top",
        end: "100% top",
        scrub: true,                // плавное связывание со скроллом
      },
      onUpdate: function() {
        const progress = this.progress(); // 0 → 1
        if (progress > 0.1 && progress < 0.6) {
          buttonContext[1]('highlight')
        } else {
          buttonContext[1]('')
        }
      }
    });

  }, [scrollerRef]);

  return (
    <section ref={triggerRef} className={styles.main}>

      <div ref={contentRef} className={styles.description_section}>
        <div ref={blurRef} className={styles.blur_effect}></div>
        <div ref={backgroundOneRef} className={styles.background_image_one} style={{backgroundImage: 'url("https://cdn.b12.io/client_media/VhBHooYp/468ba60c-8442-11f0-b86e-0242ac110002-IMG_9217.WEBP")'}}></div>
        <div ref={backgroundTwoRef} className={styles.background_image_two} style={{backgroundImage: 'url("https://cdn.b12.io/client_media/VhBHooYp/1a8d17fa-8446-11f0-9fa8-0242ac110002-IMG_9225.WEBP")'}}></div>
        <article className={styles.article_element}>
          <div ref={nameRef} className={`${styles.text_title_active} ${window.innerWidth < 700 && styles.text_title_mobile}`}>
            Гостиница Неймарк
          </div>
          <div className={`${styles.text_title} ${window.innerWidth < 700 && styles.text_title_mobile}`}>
            Современное проживание для студентов ИТ-направлений
          </div>
          <article ref={articleRef} className={styles.article_element_horizontal}>
            <div className={`${styles.image_block} ${window.innerWidth < 700 && styles.image_block_mobile}`}>
              <img ref={imageOneRef} className={`${styles.image_element} ${window.innerWidth < 700 && styles.image_element_mobile}`}
                   src='https://cdn.b12.io/client_media/VhBHooYp/468ba60c-8442-11f0-b86e-0242ac110002-IMG_9217.WEBP'
                   alt={'Здесь изображение номера'}/>
              <div className={`${styles.text_block} ${window.innerWidth < 700 && styles.text_block_mobile}`}>
                <ul>
                  <li>Центр города и университеты рядом</li>
                  <br/>
                  <li>Круглосуточная безопасность и пропускной режим</li>
                  <br/>
                  <li>Ухоженные и чистые общие пространства</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.image_block} ${window.innerWidth < 700 && styles.image_block_mobile}`}>
              <img ref={imageTwoRef} className={`${styles.image_element} ${window.innerWidth < 700 && styles.image_element_mobile}`}
                   src='https://cdn.b12.io/client_media/VhBHooYp/1a8d17fa-8446-11f0-9fa8-0242ac110002-IMG_9225.WEBP'
                   alt={'Здесь изображение номера'}/>
              <div className={`${styles.text_block} ${window.innerWidth < 700 && styles.text_block_mobile}`}>
                <ul>
                  <li>Регулярная уборка и смена белья</li>
                  <br/>
                  <li>Рабочие места для учебы прямо в комнатах</li>
                  <br/>
                  <li>Высокоскоростной интернет на всей территории кампуса</li>
                  <br/>
                  <li>Интернет и коммунальные уже включены в стоимость</li>
                </ul>
              </div>
            </div>
          </article>

        </article>
      </div>
    </section>
  )

}