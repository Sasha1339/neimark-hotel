import {FC, RefObject, Suspense, useContext, useEffect, useRef} from "react";
import styles from "./LocationComponent.module.css";
import {gsap} from "gsap";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {SelectableModel} from "@components/GLBComponent/Model";
// import {Canvas} from "@react-three/fiber";
// import {useGLTF} from "@react-three/drei";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const LocationComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    if (!scrollerRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 30%",
        scrub: false, // scrub = false, чтобы анимация не зависела от скролла
        once: true,   // анимация срабатывает только один раз
      },
    })
      .from(`.${styles.text_header_animated}`, { x: '100vw', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.text_header_animated}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.7 })



  }, [scrollerRef]);

  const textHeader = 'ВЗГЛЯНИТЕ НА РАСПОЛОЖЕНИЕ НАШИХ КОРПУСОВ';

  return (
    <section ref={triggerRef} className={styles.main}>

      <div ref={contentRef} className={styles.description_section}>
        <span className={styles.hint_span}>ГОСТИНИЦА</span>
        <h1 className={styles.header_about}>{textHeader.split(" ").map((word, wi) => (
          <span key={wi} className={styles.word}>
          {word.split("").map((letter, li) => (
            <span
              key={li}
              className={styles.text_header_animated}
            >
              {letter}
            </span>
          ))}
            <span className={styles.space}>&nbsp;</span>
        </span>
        ))}</h1>
        <div className={styles.content}>
          <Canvas camera={{ position: [5, 5, 5] }}>
            <Suspense fallback={null}>
              {/* Освещение */}
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} intensity={2} />

              {/* Модель */}
              <SelectableModel url="/glb/neimark-hotel.glb" />

              {/* Управление камерой */}
              <OrbitControls
                enableZoom={true}
                minDistance={3}  // Минимальное расстояние камеры
                maxDistance={5} // Максимальное расстояние камеры
                minPolarAngle={Math.PI / 6}           // Минимальный угол (0° - сверху)
                maxPolarAngle={7 * Math.PI / 18}
                enablePan={true}
                enableRotate={true}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  )

}