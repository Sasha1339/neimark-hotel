import {FC, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./PartnerV4Component.module.css";
import {gsap} from "gsap";
import {CardAdaptedComponent} from "@components/CardAdaptedComponent/CardAdaptedComponent";
import Back1 from "../../assets/svg/partner_1_backdrop.svg"
import Back2 from "../../assets/svg/partner_2_backdrop.svg"
import Back3 from "../../assets/svg/partner_3_backdrop.svg"
import {useMediaQuery} from "@/hooks/useMobileVersion";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const PartnerV4Component: FC<Props> = ({scrollerRef}) => {

  const { matches: isTablet } = useMediaQuery('(width <= 1080px)');

  const getContent = () => {
    if (isTablet) {
      return (
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.item}>
              <CardAdaptedComponent title={'Корпоративное проживание под ключ'}
                                    backdrop={Back1}
                                    description={'Организуем проживание для сотрудников, участников и гостей ИТ-событий в центре города с удобной логистикой до ключевых площадок проведения мероприятий'}/>
            </div>

          </div>
          <div className={styles.right}>
            <div className={styles.item}>
              <CardAdaptedComponent title={'Аренда \nпомещений'}
                                    backdrop={Back2}
                                    description={'Арендуйте помещение в НЕЙМАРК и станьте частью среды, где студенты живут, учатся, работают и развивают технологические проекты'}/>
            </div>

          </div>
          <div className={styles.left}>
            <div className={styles.item}>
              <CardAdaptedComponent title={'Площадка для \nмероприятий'}
                                    backdrop={Back3}
                                    description={'Готовые площадки для деловых, образовательных и технологических событий'}/>
            </div>

          </div>
        </div>
      )
    } else {
      return (
        <div className={styles.content}>
          <CardAdaptedComponent title={'Корпоративное проживание под ключ'}
                                backdrop={Back1}
                                description={'Организуем проживание для сотрудников, участников и гостей ИТ-событий в центре города с удобной логистикой до ключевых площадок проведения мероприятий'}/>
          <CardAdaptedComponent title={'Аренда \nпомещений'}
                                backdrop={Back2}
                                description={'Арендуйте помещение в НЕЙМАРК и станьте частью среды, где студенты живут, учатся, работают и развивают технологические проекты'}/>
          <CardAdaptedComponent title={'Площадка для \nмероприятий'}
                                backdrop={Back3}
                                description={'Готовые площадки для деловых, образовательных и технологических событий'}/>
        </div>
      )
    }
  }

  return (
    <section className={styles.main}>
      <span className={styles.header}><span className={styles.pixel}>Сотрудничество</span>: размещение, инфраструктура и площадки — в единой ИТ-системе</span>
      {getContent()}
    </section>
  )

}