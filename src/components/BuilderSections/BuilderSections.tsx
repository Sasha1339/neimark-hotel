import React, {FC, RefObject, SyntheticEvent, useContext, useEffect, useRef} from "react";
import styles from "./BuilderSections.module.css";
import {HomeComponent} from "../HomeComponent/HomeComponent";
import {NavigationContext} from "@/providers/NavigationContext";
import {TabContext} from "@/providers/TabContext";
import {gsap} from "gsap";
import {AboutComponent} from "@components/AboutComponent/AboutComponent";
import {AccommodationComponent} from "@components/AccommodationComponent/AccommodationComponent";
import {PriceComponent} from "@components/PriceComponent/PriceComponent";
import {EnvironmentsComponent} from "@components/EnvironmentsComponent/EnvironmentsComponent";
import {NewsComponent} from "@components/NewsComponent/NewsComponent";
import {ContactComponent} from "@components/ContactComponent/ConcactComponent";
import {useLocation, useNavigate} from "react-router-dom";
import {HeaderContext} from "@/providers/HeaderContext";
import {LocationComponent} from "@components/LocationComponent/LocationComponent";
import {LocationProvider} from "@/providers/LocationProvider";

type Props = {}

export const BuilderSections: FC<Props> = ({...props}) => {

  const navigationContext = useContext(NavigationContext);
  const headerContext = useContext(HeaderContext);
  const tabContext = useContext(TabContext);

  const scrollRef = useRef<HTMLDivElement>(null);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const accoRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if (tabContext[0] === 'home') {
        headerContext[1]('hidden');
      } else {
        headerContext[1]('home');
      }

      switch (tabContext[0]) {
        case 'home': {
          const bunsTopParent = homeRef.current!.getBoundingClientRect().top - homeRef.current!.parentElement!.getBoundingClientRect().top;
          gsap.to(homeRef.current!.parentElement!, {
            scrollTop: homeRef.current!.parentElement!.scrollTop + bunsTopParent,
            duration: 0.4,
            ease: 'power2.inOut'
          });
        }
          break;
        case 'about': {
          const sauceTopParent = aboutRef.current!.getBoundingClientRect().top - aboutRef.current!.parentElement!.getBoundingClientRect().top;
          gsap.to(aboutRef.current!.parentElement!, {
            scrollTop: aboutRef.current!.parentElement!.scrollTop + sauceTopParent,
            duration: 0.4,
            ease: 'power2.inOut'
          });
        }
          break;
        case 'price': {
          const mainTopParent = priceRef.current!.getBoundingClientRect().top - priceRef.current!.parentElement!.getBoundingClientRect().top;
          gsap.to(priceRef.current!.parentElement!, {
            scrollTop: priceRef.current!.parentElement!.scrollTop + mainTopParent,
            duration: 0.4,
            ease: 'power2.inOut'
          });
        }
          break;
        case 'acco': {
          const mainTopParent = accoRef.current!.getBoundingClientRect().top - accoRef.current!.parentElement!.getBoundingClientRect().top;
          gsap.to(accoRef.current!.parentElement!, {
            scrollTop: accoRef.current!.parentElement!.scrollTop + mainTopParent,
            duration: 0.4,
            ease: 'power2.inOut'
          });
        }
          break;
        case 'news': {
          const mainTopParent = newsRef.current!.getBoundingClientRect().top - newsRef.current!.parentElement!.getBoundingClientRect().top;
          gsap.to(newsRef.current!.parentElement!, {
            scrollTop: newsRef.current!.parentElement!.scrollTop + mainTopParent,
            duration: 0.4,
            ease: 'power2.inOut'
          });
        }
          break;
      }
  }, [tabContext]);

  const onScrollIngredients = (event: SyntheticEvent) => {
    const homeTopParent = homeRef.current!.getBoundingClientRect().top - event.currentTarget.getBoundingClientRect().top;
    const aboutTopParent = aboutRef.current!.getBoundingClientRect().top - event.currentTarget.getBoundingClientRect().top;
    const accoTopParent = accoRef.current!.getBoundingClientRect().top - event.currentTarget.getBoundingClientRect().top;
    const priceTopParent = priceRef.current!.getBoundingClientRect().top - event.currentTarget.getBoundingClientRect().top;
    const newsTopParent = newsRef.current!.getBoundingClientRect().top - event.currentTarget.getBoundingClientRect().top;


    if (newsTopParent < 400) {
      navigationContext[1]('news');
    }else if (priceTopParent < 400) {
      navigationContext[1]('price');
    } else if (accoTopParent < 400) {
      navigationContext[1]('acco');
    } else if (aboutTopParent < 400) {
      navigationContext[1]('about');
    } else {
      navigationContext[1]('home');
    }
  }

  return (
    <main className={styles.main_section}>
      <div ref={scrollRef} className={styles.container} onScroll={onScrollIngredients}>
        <div ref={homeRef} className={styles.ref_navigation}></div>
        <HomeComponent scrollerRef={scrollRef as RefObject<HTMLElement>}/>
        <div ref={aboutRef} className={styles.ref_navigation}></div>
        <AboutComponent scrollerRef={scrollRef as RefObject<HTMLElement>}/>
        <div ref={accoRef} className={styles.ref_navigation}></div>
        <AccommodationComponent scrollerRef={scrollRef as RefObject<HTMLElement>}/>
        <div ref={priceRef} className={styles.ref_navigation}></div>
        <PriceComponent scrollerRef={scrollRef as RefObject<HTMLElement>}/>
        <EnvironmentsComponent scrollerRef={scrollRef as RefObject<HTMLElement>}/>
        <LocationProvider>
          <LocationComponent scrollerRef={scrollRef as RefObject<HTMLElement>} />
        </LocationProvider>
        <div ref={newsRef} className={styles.ref_navigation}></div>
        <NewsComponent scrollerRef={scrollRef as RefObject<HTMLElement>}/>

        <ContactComponent/>
      </div>
    </main>
  )

}