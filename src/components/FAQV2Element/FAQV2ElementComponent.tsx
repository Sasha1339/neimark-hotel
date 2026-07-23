import styles from './FAQV2ElementComponent.module.css';
import {Dispatch, FC, SetStateAction, useCallback, useEffect, useRef, useState} from "react";
import {Icon} from "@components/Icon/Icon";
import { gsap } from 'gsap'

type Props = {
  question: string;
  answer: string;
  setOpenByParent?: Dispatch<SetStateAction<number>>
}

export const FAQV2ElementComponent: FC<Props> = ({question, answer, setOpenByParent}) => {

  const [open, setOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);
  const answerTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(answerRef.current, {height: open ? 'auto' : 0, duration: 0.5, ease: 'power1.inOut'})
    gsap.to(answerTextRef.current, {autoAlpha: open ? 1 : 0, duration: 0.5, ease: 'power1.inOut'})
  }, [open]);

  useEffect(() => {
    if (open && setOpenByParent) {
      setOpenByParent(prev => prev + 1)
    }
  }, [open]);

  return (
    <div className={`${styles.main}`}>
      <div className={styles.question} onClick={() => setOpen(prev => !prev)}><span>{question}</span><Icon name={'plus_purple'} rotate={open ? 45 : 0} size={22}/></div>
      <div ref={answerRef} className={styles.answer}>
        <span ref={answerTextRef} className={styles.answer_text}>{answer}</span>
      </div>
    </div>
  )

}