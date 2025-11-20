import {FC, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./AccommodationComponent.module.css";
import conditions from '@/assets/images/conditions.webp';
import rules from '@/assets/images/rules.webp';
import docs from '@/assets/images/docs.jpeg';
import {gsap} from 'gsap';
import {Button} from "@components/Button/Button";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const AccommodationComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);

  const [image, setImage] = useState<any>(conditions)


  useEffect(() => {
    if (!scrollerRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 10%",
        scrub: false, // scrub = false, чтобы анимация не зависела от скролла
        once: true,   // анимация срабатывает только один раз
      },
    })
      .from(`.${styles.content}`, {y: '100vw', opacity: 0, duration: 0.1})
      .to(`.${styles.content}`, {y: 0, opacity: 1, duration: 0.5, ease: "sine.out"})


  }, [scrollerRef]);

  const animationRef = useRef<gsap.core.Tween | null>(null);

  const setImageAnimate = (image: 'conditions' | 'rules' | 'docs') => {
    // 1. Останавливаем прошлую анимацию, если она есть
    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }

    // 2. Сразу выставляем начальное положение
    imageRef.current?.style.setProperty('background-position', '0 100%');

    // 3. Меняем изображение
    switch (image) {
      case 'conditions':
        setImage(conditions);
        break;
      case 'rules':
        setImage(rules);
        break;
      case 'docs':
        setImage(docs);
        break;
    }

    // 4. Ждём пока React обновит фон, потом запускаем новую анимацию
    requestAnimationFrame(() => {
      animationRef.current = gsap.to(imageRef.current, {
        backgroundPositionY: '50%', // едет сверху вниз
        duration: 0.7,
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
        <span className={styles.hint_span}>ПРОЖИВАНИЕ</span>
        <div ref={imageRef} className={styles.content} style={{backgroundImage: `url(${image})`}}>
          <div className={styles.items_content}
               onMouseOver={() => image !== conditions && setImageAnimate("conditions")}>
            <div className={styles.overlay_items}></div>
            <span className={styles.title_text}>Условия проживания</span>

            <div className={styles.items_button}>Гостиницы Неймарк предлагают различные типы комнат, чтобы удовлетворить
              потребности студентов и их родителей. Вы можете выбрать между одноместными, двухместными и многоместными
              номерами. Каждый номер оснащён всем необходимым для комфортного проживания: мебель, интернет и уборка. Это
              идеальный выбор для студентов, которые ищут доступное и удобное место для жизни во время учёбы. Мы
              заботимся о том, чтобы каждый номер соответствовал высоким стандартам, обеспечивая безопасность и уют для
              наших постояльцев.
            </div>
          </div>
          <div className={`${styles.items_content} ${styles.item_center}`}
               onMouseOver={() => image !== rules && setImageAnimate("rules")}>
            <div className={styles.overlay_items}></div>
            <span className={styles.title_text}>Правила проживания</span>

            <div className={styles.items_button}>В гостиницах Неймарк установлены правила проживания, которые помогут
              создать комфортную и безопасную атмосферу для всех гостей. Мы стремимся к тому, чтобы каждый постоялец
              чувствовал себя уютно и мог сосредоточиться на учёбе. В правилах описаны основные моменты, такие как время
              тишины, использование общих пространств и порядок выхода из номеров. Ознакомление с правилами обязательно
              для всех постояльцев, чтобы обеспечить гармоничное сосуществование и уважение к личному пространству
              каждого.
            </div>

          </div>
          <div className={styles.items_content} onMouseOver={() => image !== docs && setImageAnimate("docs")}>
            <div className={styles.overlay_items}></div>
            <span className={styles.title_text}>Документы при заселении</span>


            <div className={styles.items_button}>При заселении в гостиницы Неймарк необходимо предоставить определённые
              документы. Это может включать паспорт, студенческий билет и другие удостоверяющие документы. Мы понимаем,
              что процесс может быть сложным, поэтому наши сотрудники готовы помочь вам на каждом этапе. Правильная
              подготовка документов ускорит процесс заселения и позволит вам быстрее начать наслаждаться комфортом
              нашего проживания. Убедитесь, что у вас есть все необходимые документы перед приездом.
            </div>

          </div>
        </div>

      </div>
    </section>
  )

}