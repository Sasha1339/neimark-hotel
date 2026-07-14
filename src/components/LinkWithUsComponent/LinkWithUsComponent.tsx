import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./LinkWithUsComponent.module.css";
import {gsap} from "gsap";
import {Button} from "@components/Button/Button";
import {useNavigate} from "react-router-dom";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const LinkWithUsComponent: FC<Props> = ({scrollerRef}) => {

  const navigate = useNavigate();

  return (
    <section className={styles.main}>
      <span className={styles.header}>Обсудим ваш <span className={styles.pixel}>проект</span></span>
      <div className={styles.description}>
        {'Расскажите, какая задача перед вами стоит, мы предложим подходящее решение'}
      </div>
      <Button className={styles.button} title={'Связаться с нами'} onClick={() => navigate('/partner-form')} />
    </section>
  )

}