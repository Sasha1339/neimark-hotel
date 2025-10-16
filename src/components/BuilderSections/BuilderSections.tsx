import React, {FC, RefObject, useRef} from "react";
import styles from "./BuilderSections.module.css";
import {HomeComponent} from "../HomeComponent/HomeComponent";
import {AboutComponent} from "../AboutComponent/AboutComponent";
import {PriceComponents} from "@components/PriceComponent/PriceComponents";
import {ReservedPriceComponent} from "@components/PriceComponent/ReservedPriceComponent";
import {AboutHotelComponent} from "@components/AboutHotelComponent/AboutHotelComponent";

type Props = {}

export const BuilderSections: FC<Props> = ({...props}) => {

  const imageRef = useRef<HTMLImageElement>(null);
  const blurRef = useRef<HTMLImageElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <main className={styles.main_section}>
      <img ref={imageRef} className={styles.image_container}
           src={'https://cdn.b12.io/client_media/VhBHooYp/a92276b6-84a5-11f0-aec8-0242ac110002-46-hero_image.jpeg'}
           alt={'Здесь фото гостиницы'}/>
      <div ref={blurRef} className={styles.frame_blur}></div>
      <div ref={scrollRef} className={styles.container}>
        <HomeComponent imageRef={imageRef as RefObject<HTMLElement>}
                       blurRef={blurRef as RefObject<HTMLElement>}
                       scrollerRef={scrollRef as RefObject<HTMLElement>}
        />
        <AboutComponent scrollerRef={scrollRef as RefObject<HTMLElement>}/>
        <AboutHotelComponent scrollerRef={scrollRef as RefObject<HTMLElement>}/>
        <ReservedPriceComponent scrollerRef={scrollRef as RefObject<HTMLElement>} />
      </div>
    </main>
  )

}