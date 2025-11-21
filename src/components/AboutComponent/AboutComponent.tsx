import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./AboutComponent.module.css";
import img1_1 from '@/assets/images/about_im_1_1.jpeg';
import img1_2 from '@/assets/images/about_im_1_2.jpeg';
import img2_1 from '@/assets/images/about_im_2_1.jpg';
import img2_2 from '@/assets/images/about_im_2_2.jpg';
import {Button} from "@components/Button/Button";
import {gsap} from "gsap";
import {useNavigate} from "react-router-dom";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const AboutComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();


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
      .from(`.${styles.animate_before_first}`, { y: '100vw', opacity: 0, duration: 0.1 })
      .to(`.${styles.animate_before_first}`, { y: 0, opacity: 1, duration: 0.3 })
      .to(`.${styles.animate_before_first}`, { duration: 0.05 })
      .from(`.${styles.animate_before_second}`, { y: '100vw', opacity: 0, duration: 0.1 })
      .to(`.${styles.animate_before_second}`, { y: 0, opacity: 1, duration: 0.3 })


  }, [scrollerRef]);

  const textHeader = 'КОМФОРТНЫЕ  МЕБЕЛИРОВАННЫЕ  НОМЕРА  С  ОБСЛУЖИВАНИЕМ  В  ЦЕНТРЕ  ГОРОДА';

  return (
    <section ref={triggerRef} className={styles.main}>

      <div ref={contentRef} className={styles.description_section}>
        <span className={styles.hint_span}>О НАС</span>
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
        <div className={styles.content}>
          <div className={styles.content_image_left}>
            <div className={`${styles.image_medium} ${styles.animate_before_first}`} style={{backgroundImage: `url(${img1_1})`}}></div>
            <div className={`${styles.image_small} ${styles.animate_before_second}`} style={{backgroundImage: `url(${img1_2})`}}></div>
          </div>
          <div className={styles.content_text}>
            <div className={`${styles.text_title} ${styles.animate_before_second}`}>Современное проживание для студентов ИТ-направлений</div>
            <div className={`${styles.text_paragraph} ${styles.animate_before_first}`}>
              <ul>
                <li>Центр города и университеты рядом</li>
                <li>Круглосуточная безопасность и пропускной режим</li>
                <li>Ухоженные и чистые общие пространства</li>
                <li>Регулярная уборка и смена белья</li>
                <li>Рабочие места для учебы прямо в комнатах</li>
                <li>Высокоскоростной интернет на всей территории кампуса</li>
                <li>Интернет и коммунальные уже включены в стоимость</li>
              </ul>
            </div>
            <Button title={'Хочу взглянуть на номера'} onClick={() => navigate('/room')} />
          </div>
          <div className={styles.content_image_right}>
            <div className={`${styles.image_small} ${styles.animate_before_first}`} style={{backgroundImage: `url(${img2_1})`}}></div>
            <div className={`${styles.image_medium} ${styles.animate_before_second}`} style={{backgroundImage: `url(${img2_2})`}}></div>
          </div>
        </div>
      </div>
    </section>
  )

}