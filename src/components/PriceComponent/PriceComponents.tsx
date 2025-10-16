import {FC, MouseEvent, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./PriceComponent.module.css";
import {gsap} from "gsap";
import { ReactComponent as LampComponent } from "@/assets/svg/lamp.svg";
import { ReactComponent as HotelComponent } from "@/assets/svg/hotel.svg";
import {ButtonContext} from "@/providers/ButtonContext";
import {AlphaRoomComponent} from "@components/PriceComponent/AlphaRoomComponent/AlphaRoomComponent";
import {GammaRoomComponent} from "@components/PriceComponent/GammaRoomComponent/GammaRoomComponent";
import {OmegaRoomComponent} from "@components/PriceComponent/OmegaRoomComponent/OmegaRoomComponent";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const PriceComponents: FC<Props> = ({scrollerRef, ...props}) => {

  const [showContent, setShowContent] = useState<'hotel' | 'alpha' | 'gamma' | 'omega'>('hotel');


  const buttonContext = useContext(ButtonContext);

  const triggerRef = useRef<HTMLElement>(null);

  const lampRightRef = useRef<SVGSVGElement>(null);
  const lampLeftRef = useRef<SVGSVGElement>(null);
  const hotelLeftRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!scrollerRef.current) return;

    gsap.to(lampRightRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: "20% top",
        scrub: true,                // плавное связывание со скроллом
      },
      x: '-100%'
    });

    gsap.to(lampLeftRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: "20% top",
        scrub: true,                // плавное связывание со скроллом
      },
      x: '100%'
    });

    gsap.to('.lamp', {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "20% top",
        end: "30% top",
        scrub: true,                // плавное связывание со скроллом
      },
      fill: '#FFEF4A',
    });

    gsap.to(hotelLeftRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "30% top",
        end: "40% top",
        scrub: true,
        onLeaveBack: () => {
          setShowContent('hotel')
          hotelLeftRef.current?.setAttribute('style', 'transform: translateX(0) scale(2.3)')
        }
      },
      opacity: 1
    });

    const dropShadow = document.querySelector('#lampShadow feDropShadow');

    gsap.to(dropShadow, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "20% top",
        end: "30% top",
        scrub: true,
      },
      attr: { 'flood-color': '#FFEF4A', 'stdDeviation': '15', 'dy': '10' } // теперь точно работает
    });

    const alphaGroup = document.querySelector('.alpha_group');

    alphaGroup?.addEventListener('click', () => {

      setShowContent('alpha');

      gsap.to(hotelLeftRef.current, {
        x: '-100%',
        duration: 0.5,
        ease: 'power2.inOut'
      });

      gsap.to(lampLeftRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power2.inOut'
      });

      gsap.to(lampRightRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {

          buttonContext[1]('highlight');
        }
      });
    })

    const gammaGroup = document.querySelector('.gamma_group');

    gammaGroup?.addEventListener('click', () => {
      setShowContent('gamma');

      gsap.to(hotelLeftRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power2.inOut'
      });

      gsap.to(lampLeftRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power2.inOut'
      });

      gsap.to(lampRightRef.current, {
        x: '-100%',
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          buttonContext[1]('highlight');
        }
      });
    })

    const omegaGroup = document.querySelector('.omega_group');

    omegaGroup?.addEventListener('click', () => {
      setShowContent('omega');

      gsap.to(hotelLeftRef.current, {
        x: '-100%',
        duration: 0.5,
        ease: 'power2.inOut'
      });

      gsap.to(lampLeftRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power2.inOut'
      });

      gsap.to(lampRightRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {

          buttonContext[1]('highlight');
        }
      });
    })


  }, [scrollerRef]);

  const onBack = () => {
    setShowContent('hotel');
    buttonContext[1]('');

    gsap.to(lampRightRef.current, {
      x: '-100%',
      duration: 0.5,
      ease: 'power2.inOut',
    });

    gsap.to(lampLeftRef.current, {
      x: '100%',
      duration: 0.5,
      ease: 'power2.inOut',
    });

    gsap.to(hotelLeftRef.current, {
      x: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    });
  }

  return (
    <section ref={triggerRef} className={styles.main}>
      <div className={styles.content}>
        <div className={styles.lamp_content_right}>
          <LampComponent ref={lampLeftRef} className={styles.lamp_left}/>
        </div>
        <div className={styles.hotel_content_right}>
          <HotelComponent ref={hotelLeftRef} className={styles.hotel_element}/>
        </div>
        <div className={styles.lamp_content_left}>
          <LampComponent ref={lampRightRef} className={styles.lamp_right}/>
        </div>

        <div className={styles.rooms} style={{right: showContent === 'alpha' || showContent === 'omega' ? '82px' : undefined, left: showContent === 'gamma' ? '82px' : undefined}}>
          {showContent === 'alpha' && <AlphaRoomComponent onBack={onBack}/>}
          {showContent === 'gamma' && <GammaRoomComponent onBack={onBack}/>}
          {showContent === 'omega' && <OmegaRoomComponent onBack={onBack}/>}
        </div>
      </div>


    </section>
  )

}