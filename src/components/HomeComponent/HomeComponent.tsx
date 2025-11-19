import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./HomeComponent.module.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Tab} from "@components/Tab/Tab";
import {ReactComponent as Logo} from "@/assets/svg/logo.svg";
import {Button} from "@components/Button/Button";
import {HeaderContext} from "@/providers/HeaderContext";
import {TabContext} from "@/providers/TabContext";
import Hls from "hls.js";
import {SearchComponent} from "@components/SearchComponent/SearchComponent";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const HomeComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);
  const imageBG = useRef<HTMLDivElement>(null);
  const tabContext = useContext(TabContext);

  const headerContext = useContext(HeaderContext);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls();
      hls.loadSource("/hls/index.m3u8");
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current && videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = "/hls/index.m3u8";
    }
  }, [videoRef.current]);

  useEffect(() => {

    gsap.to(imageBG.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      backgroundPosition: "center 100%"
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top -10%",
        scrub: false,
        onEnter: () => {
          headerContext[1]('home')
        },
        onLeaveBack: () => {
          headerContext[1]('hidden')
        },
      }
    })
  }, [scrollerRef]);

  return (
    <section ref={triggerRef} className={styles.main}>
      <div ref={imageBG} className={`${styles.description_section}`}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={styles.video_background}
        />
        <div className={`${styles.gradient_overlay}`}></div>
        <header className={`${styles.header}`}>
          <div className={styles.header_left}>
            <Logo className={styles.logo}/>
            <nav className={styles.navigation}>
              <Tab active={false} title={'О нас'} onClick={() => tabContext[1]('about')}/>
              <Tab active={false} title={'Проживание'} onClick={() => tabContext[1]('acco')}/>
              <Tab active={false} title={'Цены'} onClick={() => tabContext[1]('price')}/>
              <Tab active={false} title={'Новости'} onClick={() => tabContext[1]('news')}/>
            </nav>
          </div>
          <div className={styles.header_right}>
            <Button title={'Подать заявку'} onClick={() => {
            }}/>
          </div>
        </header>
        <div className={styles.content}>
          <div className={styles.description_container}>
            <div className={styles.paragraph_text}>ГОСТИНИЦА НЕЙМАРК</div>
            <div className={styles.description_text}>
              ЖИВИ ТАМ, ГДЕ РАСТЕТ БУДУЩЕЕ
            </div>
          </div>
          <div className={styles.search}>
            <SearchComponent />
          </div>

        </div>
      </div>
    </section>
  )

}