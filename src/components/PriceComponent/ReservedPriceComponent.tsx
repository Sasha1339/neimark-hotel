import {FC, RefObject, useEffect, useRef} from "react";
import styles from "./ReservedPriceComponent.module.css";
import {AlphaRoomComponent} from "@components/PriceComponent/AlphaRoomComponent/AlphaRoomComponent";
import {GammaRoomComponent} from "@components/PriceComponent/GammaRoomComponent/GammaRoomComponent";
import {OmegaRoomComponent} from "@components/PriceComponent/OmegaRoomComponent/OmegaRoomComponent";
import {gsap} from 'gsap';

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const ReservedPriceComponent: FC<Props> = ({scrollerRef, ...props}) => {

  const alphaRef = useRef<HTMLDivElement>(null);
  const gammaRef = useRef<HTMLDivElement>(null);
  const omegaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    gsap.to(alphaRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 100%",
        end: "bottom bottom",
        scrub: true,                // плавное связывание со скроллом
      },
      x: '0',
      opacity: 1
    });

    gsap.to(gammaRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 100%",
        end: "bottom bottom",
        scrub: true,                // плавное связывание со скроллом
      },
      y: '0',
      opacity: 1
    });

    gsap.to(omegaRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 100%",
        end: "bottom bottom",
        scrub: true,                // плавное связывание со скроллом
      },
      x: '0',
      opacity: 1
    });
  }, []);

  return (
    <section ref={triggerRef} className={styles.main}>
      <div className={styles.content}>
        <div ref={alphaRef} className={`${styles.room} ${styles.alpha}`}><AlphaRoomComponent /></div>
        <div ref={gammaRef} className={`${styles.room} ${styles.gamma}`}><GammaRoomComponent /></div>
        <div ref={omegaRef} className={`${styles.room} ${styles.omega}`}><OmegaRoomComponent /></div>
      </div>
    </section>
  )

}