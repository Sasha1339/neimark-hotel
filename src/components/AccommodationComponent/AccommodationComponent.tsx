import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./AccommodationComponent.module.css";
import conditions from '@/assets/images/conditions.webp';
import {Button} from "@components/Button/Button";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const AccommodationComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!scrollerRef.current) return;

  }, [scrollerRef]);


  return (
    <section ref={triggerRef} className={styles.main}>

      <div ref={contentRef} className={styles.description_section}>
        <span className={styles.hint_span}>ПРОЖИВАНИЕ</span>
        <div className={styles.content} style={{backgroundImage: `url(${conditions})`}}>
          <div className={styles.items_content}>
              <span className={styles.title_text}>Условия проживания</span>
          </div>
          <div className={`${styles.items_content} ${styles.item_center}`}>

            <span className={styles.title_text}>Правила проживания</span>
          </div>
          <div className={styles.items_content}>

            <span className={styles.title_text}>Документы при заселении</span>
          </div>
        </div>

      </div>
    </section>
  )

}