import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./HomeComponent.module.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Button} from "../Button/Button";
import {ButtonContext} from "../../providers/ButtonContext";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  imageRef: RefObject<HTMLElement>;
  blurRef: RefObject<HTMLElement>;
  scrollerRef: RefObject<HTMLElement>;
}

export const HomeComponent: FC<Props> = ({imageRef, blurRef, scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonContext = useContext(ButtonContext);

  useEffect(() => {
    if (!imageRef.current || !scrollerRef.current || !blurRef.current) return;

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      scale: 4
    });

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      scale: 4
    });

    gsap.to(buttonRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      x: '-200%'
    });

    gsap.to(blurRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      onUpdate: function() {
        const progress = this.progress(); // 0 → 1
        const blurValue = 4 * (1 - progress); // 4 → 0
        if (progress === 1) {
          buttonContext[1]('')
        } else {
          buttonContext[1]('hidden')
        }

        if (blurRef.current) {
          blurRef.current.style.backdropFilter = `blur(${blurValue}px)`;
        }
      }
    })



  }, [imageRef, scrollerRef, blurRef]);

  return (
    <section ref={triggerRef} className={styles.main}>
        <div className={styles.description_section}>
          <p className={styles.main_title}>Гостиница Неймарк</p>
          <p className={styles.title}>Живи там, где строится будущее</p>
          <Button ref={buttonRef} title={'Заявка на проживание'} onClick={() => {}} />
        </div>
    </section>
  )

}