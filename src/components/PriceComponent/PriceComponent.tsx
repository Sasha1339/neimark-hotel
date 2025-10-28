import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./PriceComponent.module.css";
import img1_1 from '@/assets/images/about_im_1_1.jpeg';
import img1_2 from '@/assets/images/about_im_1_2.jpeg';
import img2_1 from '@/assets/images/about_im_2_1.jpg';
import img2_2 from '@/assets/images/about_im_2_2.jpg';
import {Button} from "@components/Button/Button";
import {gsap} from "gsap";
import useEmblaCarousel from "embla-carousel-react";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const PriceComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });


  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0); // возвращаемся к первому слайду
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    if (!scrollerRef.current) return;


  }, [scrollerRef]);

  return (
    <section ref={triggerRef} className={styles.main}>

      <div ref={contentRef} className={styles.description_section}>
        <span className={styles.hint_span}>ЦЕНЫ</span>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>Slide 1</div>
            <div className={styles.embla__slide}>Slide 2</div>
            <div className={styles.embla__slide}>Slide 3</div>
          </div>
        </div>
       <button onClick={() => emblaApi && emblaApi.scrollPrev()}>Prev</button>
      <button onClick={() => emblaApi && emblaApi.scrollNext()}>Next</button>
      </div>
    </section>
  )

}