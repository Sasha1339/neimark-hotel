import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./ThreeStepsV3Component.module.css";
import {gsap} from "gsap";
import {BaseCartElement, TwoBlurGlass} from "@components/BaseCartElement/BaseCartElement";
import {Icon} from "@components/Icon/Icon";
import clsx from "clsx";
import {Button} from "@components/Button/Button";
import ThreeStepsBackdrop from "@/assets/svg/three_steps_backdrop.svg";
import ThreeStepsImage from "@/assets/svg/three_steps_image.svg";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const ThreeStepsV3Component: FC<Props> = ({scrollerRef}) => {

  const actionMetric = () => {
    window.open('https://neimark.ukmira.ru/register?from=hotel');
    if (typeof window !== 'undefined' && typeof window.ym === 'function') {
      window.ym(105500220,'reachGoal','click-form-hotel')
    }
  }


  return (
    <section className={styles.main}>
      <div className={styles.content_block}>
        <img className={styles.image_backdrop} src={ThreeStepsBackdrop}/>
        <img className={styles.image_backdrop} src={ThreeStepsImage}/>
        <span className={styles.header}>Три шага к <span className={styles.pixel}>проживанию</span> мечты</span>
        <div className={styles.three_steps}>
          <div className={styles.block_items}>
            <span className={clsx(styles.item, styles.item_1, styles.number)}>01</span>
            <span className={clsx(styles.item, styles.item_2, styles.number)}>02</span>
            <span className={clsx(styles.item, styles.item_3, styles.number)}>03</span>
          </div>
          <div className={styles.line_block}>
            <div className={clsx(styles.item_circuit)}></div>
            <div className={clsx(styles.item_circuit)}></div>
            <div className={clsx(styles.item_circuit)}></div>
          </div>
          <div className={clsx(styles.block_items, styles.block_bottom)}>
            <span className={clsx(styles.item, styles.item_1)}>Подай заявку на сайте</span>
            <span
              className={clsx(styles.item, styles.item_2)}>Подтверди специальность и успеваемость справкой из вуза</span>
            <span className={clsx(styles.item, styles.item_3)}>Заселяйся кампус в любое удобное время</span>
          </div>
        </div>
        <Button className={styles.button} title={'Подать заявку'} onClick={actionMetric}/>
      </div>

    </section>
  )

}