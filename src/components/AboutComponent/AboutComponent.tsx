import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./AboutComponent.module.css";
import img1_1 from '@/assets/images/about_im_1_1.jpeg';
import img1_2 from '@/assets/images/about_im_1_2.jpeg';
import img2_1 from '@/assets/images/about_im_2_1.jpg';
import img2_2 from '@/assets/images/about_im_2_2.jpg';
import {Button} from "@components/Button/Button";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const AboutComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!scrollerRef.current) return;

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
              style={{ animationDelay: `${li * 0.02 + wi * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
            <span className={styles.space}>&nbsp;</span>
        </span>
        ))}</h1>
        <div className={styles.content}>
          <div className={styles.content_image_left}>
            <div className={styles.image_medium} style={{backgroundImage: `url(${img1_1})`}}></div>
            <div className={styles.image_small} style={{backgroundImage: `url(${img1_2})`}}></div>
          </div>
          <div className={styles.content_text}>
            <div className={styles.text_title}>Современное проживание для студентов ИТ-направлений</div>
            <div className={styles.text_paragraph}>
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
            <Button title={'Хочу взглянуть на номера'} onClick={() => {}} />
          </div>
          <div className={styles.content_image_right}>
            <div className={styles.image_small} style={{backgroundImage: `url(${img2_1})`}}></div>
            <div className={styles.image_medium} style={{backgroundImage: `url(${img2_2})`}}></div>
          </div>
        </div>
      </div>
    </section>
  )

}