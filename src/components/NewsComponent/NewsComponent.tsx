import {FC, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./NewsComponent.module.css";
import new1 from '@/assets/images/new1.jpeg';
import new2 from '@/assets/images/new2.jpeg';
import new3 from '@/assets/images/new3.jpeg';
import { gsap } from 'gsap';
import useEmblaCarousel from "embla-carousel-react";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

const itemsNews = [
  {
    title: 'Новый тип комнат в гостиницах Неймарк',
    description: 'Мы рады сообщить, что в гостиницах Неймарк теперь доступны новые типы комнат, специально\n' +
      '                  разработанные для студентов. Эти комнаты предлагают современные удобства и комфорт, что создает\n' +
      '                  идеальные условия для учебы и отдыха. Каждая комната ...',
    date: '21.03.2001',
    image: new1
  },
  {
    title: 'Специальные предложения для родителей',
    description: 'Неймарк предлагает специальные предложения для родителей студентов! Мы понимаем, как важно\n' +
      '                  поддерживать связь с вашими детьми во время учебы, поэтому мы предоставляем скидки на проживание для\n' +
      '                  родителей, которые желают посетить своих детей.',
    date: '14.04.2025',
    image: new2
  },
  {
    title: 'Программа поддержки для студентов',
    description: 'Гостиницы Неймарк запускают программу поддержки для студентов, предлагая консультации и помощь в различных аспектах их жизни. Мы понимаем, что учеба может быть сложной, и поэтому создаем условия, где ...',
    date: '07.07.2025',
    image: new3
  }
]

export const NewsComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState('Новый тип комнат в гостиницах Неймарк');
  const [image, setImage] = useState(new1);

  const imageRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });


  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap(); // индекс нового текущего слайда
      setTitle(itemsNews[index].title);
      setImageAnimate(index)
    };

    emblaApi.on("select", onSelect);

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);

    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

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
      .from(`.${styles.animate_before_first}`, { y: '100vw', opacity: 0, duration: 0.1 })
      .to(`.${styles.animate_before_first}`, { y: 0, opacity: 1, duration: 0.3 })
      .to(`.${styles.animate_before_first}`, { duration: 0.05 })
      .from(`.${styles.animate_before_second}`, { y: '100vw', opacity: 0, duration: 0.1 })
      .to(`.${styles.animate_before_second}`, { y: 0, opacity: 1, duration: 0.3 })


  }, [scrollerRef]);

  const animationRef = useRef<gsap.core.Tween | null>(null);

  const setImageAnimate = (index: number) => {
    // 1. Останавливаем прошлую анимацию, если она есть
    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }

    // 2. Сразу выставляем начальное положение
    imageRef.current?.style.setProperty('opacity', '0');

    // 3. Меняем изображение
    setImage(itemsNews[index].image)

    // 4. Ждём пока React обновит фон, потом запускаем новую анимацию
    requestAnimationFrame(() => {
      animationRef.current = gsap.to(imageRef.current, {
        opacity: 1, // едет сверху вниз
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          animationRef.current = null; // очищаем ссылку
        }
      });
    });
  };



  return (
    <section ref={triggerRef} className={styles.main}>

      <div ref={contentRef} className={styles.description_section}>
        <span className={styles.hint_span}>НОВОСТИ</span>
        <div className={styles.content} style={{backgroundImage: `url(${image})`}}>
          <div className={styles.overlay_blur}></div>
          <div className={styles.content_right}>
            <div className={styles.animate_before_first}>{title}</div>
            <div  className={`${styles.buttons} ${styles.animate_before_second}`}>
              <div className={styles.button} onClick={() => emblaApi && emblaApi.scrollPrev()}>{'<'}</div>
              <div className={styles.button} onClick={() => emblaApi && emblaApi.scrollNext()}>{'>'}</div>
            </div>
          </div>
          <div ref={imageRef} className={`${styles.content_left}  ${styles.animate_before_second}`} style={{backgroundImage: `url(${image})`}}>
          </div>
          <div className={`${styles.embla} ${styles.animate_before_first}`} ref={emblaRef}>

            <div className={styles.embla__container}>

              {itemsNews.map((e, i) => (
                <div key={i} className={styles.embla__slide}>
                  <div>{e.description}
                  </div>

                  <div className={styles.date}>
                    <div>Дата публикации новости: {e.date}</div>
                    <div className={styles.hint_slide}>{'Перейти >'}</div>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </div>

      </div>
    </section>
  )

}