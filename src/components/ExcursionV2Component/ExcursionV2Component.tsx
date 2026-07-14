import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./ExcursionV2Component.module.css";
import {gsap} from "gsap";
import {Button} from "@components/Button/Button";
import {useNavigate} from "react-router-dom";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const ExcursionV2Component: FC<Props> = ({scrollerRef}) => {

  const navigate = useNavigate();

  return (
    <section className={styles.main}>
      <span className={styles.header}>Посмотрите <span className={styles.pixel}>гостиницу</span> своими глазами</span>
      <div className={styles.description}>
        {'Пройдитесь по территории, оцените номера и общественные пространства, почувствуйте атмосферу и задайте все интересующие вопросы'}
      </div>
      <Button className={styles.button} title={'Записаться на экскурсию'} onClick={() => navigate('/excursion-form')}/>
    </section>
  )

}