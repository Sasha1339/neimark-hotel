import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./AboutComponent.module.css";
import {gsap} from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import {BaseCartElement, TwoBlurGlass} from "@components/BaseCartElement/BaseCartElement";
import {Icon} from "@components/Icon/Icon";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const AboutComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

  const headerRef = useRef<HTMLHeadingElement>(null)


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
      .from(`.${styles.embla}`, {y: '100vw', opacity: 0, duration: 0.1})
      .to(`.${styles.embla}`, {y: 0, opacity: 1, duration: 0.5, ease: "sine.out"})


  }, [scrollerRef]);

  const textHeader = 'КОМФОРТНЫЕ  МЕБЕЛИРОВАННЫЕ  НОМЕРА  С  ОБСЛУЖИВАНИЕМ  В  ЦЕНТРЕ  ГОРОДА';

  return (
    <section ref={triggerRef} className={styles.main}>
      <div ref={contentRef} className={styles.description_section}>
        <h1 ref={headerRef} className={styles.header_about}>{textHeader.split(" ").map((word, wi) => (
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
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>
              <BaseCartElement background={{background: 'url("/image/space.webp")'}}>
                <TwoBlurGlass title={'Современное пространство'}
                              description={'Новая гостиница с\u00A0продуманной архитектурой и\u00A0зонированием для\u00A0жизни, работы и\u00A0развития'}

                              positionUp='center'
                              positionDown='center'
                              justifyContent='start'
                              maxWidthDown={50}
                              theme='light'/>
              </BaseCartElement>
            </div>
            <div className={styles.embla__slide}>
              <BaseCartElement background={{background: 'url("/image/all-inclusive.jpg")'}}>
                <TwoBlurGlass title={'Включено\u00A0все необходимое'}
                              description={'Интернет, коммунальные услуги, уборка, смена белья и\u00A0полотенец, прачечная — уже включены в\u00A0стоимость'}

                              positionUp={'start'}
                              positionDown='end'
                              justifyContent='end'
                              maxWidthDown={55}
                              theme='light'/>
              </BaseCartElement>
            </div>
            <div className={styles.embla__slide}>
              <BaseCartElement background={{background: 'url("/image/comfort.jpg")'}}>
                <TwoBlurGlass title={'Комфорт'}
                              description={'Современный интерьер, необходимая техника, удобная мебель и\u00A0умные решения для\u00A0жизни без\u00A0лишних забот'}

                              positionUp={'start'}
                              positionDown='start'
                              justifyContent='end'
                              maxWidthDown={55}
                              theme='light'/>
              </BaseCartElement>
            </div>
            <div className={styles.embla__slide}>
              <BaseCartElement
                background={{backgroundImage: 'linear-gradient(-45deg, var(--main-purple), var(--main-gray-dark) 30%, var(--main-gray-dark) 70%, var(--main-light-green) 100%)'}}
                image={<Icon name={'security'} size={200}/>}>
                <TwoBlurGlass title={'Безопасность 24/7'}
                              description={'Круглосуточная охрана, видеонаблюдение и\u00A0электронный доступ в\u00A0корпуса'}

                              positionUp={'start'}
                              positionDown='end'
                              justifyContent='space-between'
                              maxWidthDown={55}
                              theme='dark'/>
              </BaseCartElement>
            </div>
            <div className={styles.embla__slide}>
              <BaseCartElement background={{background: 'url("/image/community.webp")'}}>
                <TwoBlurGlass title={'Комьюнити'}
                              description={'Среда единомышленников для\u00A0общения, сотрудничества и\u00A0роста'}
                              justifyContent='end'
                              maxWidthDown={40}
                              theme='dark'/>
              </BaseCartElement>
            </div>
            <div className={styles.embla__slide}>
              <BaseCartElement background={{background: 'url("/image/city.jpg")'}}>
                <TwoBlurGlass title={'Центр\u00A0города'}
                              description={'Вы в\u00A0эпицентре городской жизни и\u00A0ключевых событий города'}
                              justifyContent='start'
                              positionUp='start'
                              positionDown='start'
                              maxWidthDown={40}
                              theme='light'/>
              </BaseCartElement>
            </div>
            <div className={styles.embla__slide}>
              <BaseCartElement
                background={{backgroundImage: 'linear-gradient(45deg, var(--text-color-active), var(--main-purple) 100%)'}}
                image={<Icon name={'parking_dark'} size={200}/>}>
                <TwoBlurGlass title={'Подземная парковка'}
                              description={'Тёплая подземная парковка для\u00A0автомобилей и\u00A0электромототранспорта'}

                              positionUp={'end'}
                              positionDown='start'
                              justifyContent='space-between'
                              maxWidthDown={55}
                              theme='light'/>
              </BaseCartElement>
            </div>
          </div>
        </div>
        <div className={`${styles.buttons}`}>
          <div className={styles.button} onClick={() => emblaApi && emblaApi.scrollPrev()}>{'<'}</div>
          <div className={styles.button} onClick={() => emblaApi && emblaApi.scrollNext()}>{'>'}</div>
        </div>
      </div>
    </section>
  )

}