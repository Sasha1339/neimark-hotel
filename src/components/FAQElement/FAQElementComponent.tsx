import styles from './FAQElementComponent.module.css';
import {FC, useCallback, useEffect, useRef, useState} from "react";
import {Icon} from "@components/Icon/Icon";
import { gsap } from 'gsap'

type Props = {
  question: string;
  answer: string;
}

export const FAQElementComponent: FC<Props> = ({question, answer}) => {

  const [open, setOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);
  const answerTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(answerRef.current, {height: open ? 'auto' : 0, duration: 0.5, ease: 'power1.inOut'})
    gsap.to(answerTextRef.current, {autoAlpha: open ? 1 : 0, duration: 0.5, ease: 'power1.inOut'})
  }, [open])

  return (
    <div className={`${styles.main}`}>
      <div className={styles.question} onClick={() => setOpen(prev => !prev)}><span>{question}</span><Icon name={'plus'} rotate={open ? 45 : 0}/></div>
      <div ref={answerRef} className={styles.answer}>
        <span ref={answerTextRef} className={styles.answer_text}>{answer}</span>
      </div>
    </div>
  )

}