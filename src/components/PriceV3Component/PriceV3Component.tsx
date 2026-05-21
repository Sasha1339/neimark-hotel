import {FC, RefObject, useEffect, useRef, useState} from "react";
import styles from "./PriceV3Component.module.css";
import {gsap} from "gsap";
import Hls from "hls.js";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

type RoomType = 'one_place' | 'two_place' | 'living_room';

const optionsByRoomType = {
  'one_place': ['Кровать с пастельным бельем', 'Шкаф', 'Стол и стул', 'Ростовое зеркало', 'Умная колонка СБЕР', 'Санузел', 'Полотенца', 'Душевые принадлежности', 'Фен'],
  'two_place': ['2 кровати с пастельным бельем', 'Шкаф', 'Стол и стул', 'Ростовое зеркало', 'Умная колонка СБЕР', 'Санузел', 'Полотенца', 'Душевые принадлежности', 'Фен'],
  'living_room': ['Диван', 'ТВ', 'Чайник', 'Холодильники', 'Аэрогриль и мультиварка', 'Посуда', 'Прачечная'],
}

const titleByRoomType = {
  'one_place': 'Одноместное размещение',
  'two_place': 'Двухместное размещение',
  'living_room': 'Гостиная',
}

const priceByRoomType = {
  'one_place': 'от 12000 ₽',
  'two_place': 'от 17000 ₽',
  'living_room': undefined,
}

export const PriceV3Component: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const [type, setType] = useState<RoomType>('living_room')
  const videoRef = useRef<HTMLVideoElement>(null);
  const livingRoomRef = useRef<HTMLDivElement>(null);
  const twoPlaceRoomRef = useRef<HTMLDivElement>(null);
  const onePlaceRoomRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls();
      hls.loadSource("/hls/rooms/index.m3u8");
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current && videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = "/hls/rooms/index.m3u8";
    }
  }, []);

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

    gsap.fromTo(`.${styles.video_background}`,
      {
        // Начальное состояние (до скролла)
        y: 0,
        x: 0,
      },
      {
        // Конечное состояние (после скролла)
        y: window.innerWidth < 450 ? '30vh' : '10vh',
        x: window.innerWidth < 450 ? 0 : '20vw',
        width: window.innerWidth < 450 ? '100%' : '80%',
        height: window.innerWidth < 450 ? '70%' : '90%',
        ease: "none",  // Линейное движение без ускорений
        scrollTrigger: {
          trigger: contentRef.current,
          scroller: scrollerRef.current,
          start: "100px top",    // Когда начинаем двигать (30% от верха вьюпорта)
          end: "300px top",   // Когда заканчиваем двигать
          scrub: true,         // Синхронизация со скроллом
          // markers: true,    // Включите для отладки
          onUpdate: (self) => {
            const progress = self.progress;

            // Меняем позиции градиента в маске
            gsap.set(`.${styles.video_background}`, {
              // Задаем маску
              mask: `
                linear-gradient(to bottom, transparent 0%, black 40%, black 100%),
                linear-gradient(to right, transparent 0%, black ${progress * (window.innerWidth < 450 ? 0 : 20)}%, black 100%),
                linear-gradient(to top, transparent 0%, black 40%, black 100%)
              `,
            });

            videoRef.current?.style.setProperty('mask-composite', 'intersect')
          },
        }
      }
    );


  }, [scrollerRef]);

  useEffect(() => {
    const video = videoRef.current;
    let currentProgress = 0;

    // Создаем таймлайн с ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "300px top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          // Сохраняем прогресс
          currentProgress = self.progress;

          // Управляем видео
          if (video && video.duration) {
            video.currentTime = currentProgress * video.duration;
          }
        },
      }
    });

    return () => {
      tl.kill();
    };
  }, [scrollerRef]);

  useEffect(() => {
    const video = videoRef.current;
    let currentProgress = 0;

    // Создаем таймлайн с ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "300px top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          // Сохраняем прогресс
          currentProgress = self.progress;

          // Управляем видео
          if (video && video.duration) {
            video.currentTime = currentProgress * video.duration;
          }
        },
      }
    });

    return () => {
      tl.kill();
    };
  }, [scrollerRef]);

  useEffect(() => {

    if (!twoPlaceRoomRef.current || !livingRoomRef.current || !onePlaceRoomRef.current || !endRef.current) return;

    const tlLiving = gsap.timeline({
      scrollTrigger: {
        trigger: livingRoomRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: `${twoPlaceRoomRef.current?.offsetTop - 400}px top`,
        scrub: true,
        onUpdate: (self) => {
          if (self.progress < 0.9 && self.progress > 0.1) {
            setType('living_room')
            gsap.to(`.${styles.room_flex}`, {
              opacity: 1,
              y: 0
            });
          } else {
            gsap.to(`.${styles.room_flex}`, {
              opacity: 0,
              y: '10%'
            });
          }
        },
      }
    });

    const tlTwoPlace = gsap.timeline({
      scrollTrigger: {
        trigger: twoPlaceRoomRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: `${onePlaceRoomRef.current?.offsetTop - twoPlaceRoomRef.current?.offsetTop}px top`,
        scrub: true,
        onUpdate: (self) => {
          if (self.progress < 0.9 && self.progress > 0.1) {
            setType('two_place')
            gsap.to(`.${styles.room_flex}`, {
              opacity: 1,
              y: 0
            });
          } else {
            gsap.to(`.${styles.room_flex}`, {
              opacity: 0,
              y: '10%'
            });
          }
        },
      }
    });

    const tlOnePlace = gsap.timeline({
      scrollTrigger: {
        trigger: onePlaceRoomRef.current,
        scroller: scrollerRef.current,
        start: "top top",
        end: `${endRef.current?.offsetTop - onePlaceRoomRef.current?.offsetTop}px top`,
        scrub: true,
        onUpdate: (self) => {
          if (self.progress < 0.9 && self.progress > 0.1) {
            setType('one_place')
            gsap.to(`.${styles.room_flex}`, {
              opacity: 1,
              y: 0
            });
          } else {
            gsap.to(`.${styles.room_flex}`, {
              opacity: 0,
              y: '10%'
            });
          }
        },
      }
    });

    return () => {
      tlLiving.kill();
      tlTwoPlace.kill();
      tlOnePlace.kill();
    };
  }, [scrollerRef]);

  const onSelectType = (type: RoomType) => {
    switch (type) {
      case "living_room": {
        const bunsTopParent = livingRoomRef.current!.getBoundingClientRect().top - scrollerRef.current!.getBoundingClientRect().top;
        gsap.to(scrollerRef.current!, {
          scrollTop: scrollerRef.current!.scrollTop + bunsTopParent + 400,
          duration: 0.4,
          ease: 'power2.inOut'
        });
      }
        break;
      case "two_place": {
        const bunsTopParent = twoPlaceRoomRef.current!.getBoundingClientRect().top - scrollerRef.current!.getBoundingClientRect().top;
        gsap.to(scrollerRef.current!, {
          scrollTop: scrollerRef.current!.scrollTop + bunsTopParent + 400,
          duration: 0.4,
          ease: 'power2.inOut'
        });
      }
        break;
      case "one_place": {
        const bunsTopParent = onePlaceRoomRef.current!.getBoundingClientRect().top - scrollerRef.current!.getBoundingClientRect().top;
        gsap.to(scrollerRef.current!, {
          scrollTop: scrollerRef.current!.scrollTop + bunsTopParent + 400,
          duration: 0.4,
          ease: 'power2.inOut'
        });
      }
        break;
    }
  }

  const textHeader = 'ДОСТУПНЫЕ КАТЕГОРИИ НОМЕРОВ';

  return (
    <section ref={triggerRef} className={styles.main}>
      <div className={styles.main_overlay}></div>
      <div className={styles.header_wrapper}>
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
      </div>
      <div ref={contentRef} className={styles.description_section}>

        <div className={styles.container}>

          <div className={styles.header_rooms}>
            <div className={styles.glass_block_header}>
              <div className={`${type === 'living_room' && styles.active_room}`}
                   onClick={() => onSelectType('living_room')}>Гостиная
              </div>
              {window.innerWidth > 1000 && <div>•</div>}
              <div className={`${type === 'two_place' && styles.active_room}`}
                   onClick={() => onSelectType('two_place')}>Двухместное размещение
              </div>
              {window.innerWidth > 1000 && <div>•</div>}
              <div className={`${type === 'one_place' && styles.active_room}`}
                   onClick={() => onSelectType('one_place')}>Одноместное размещение
              </div>
            </div>
          </div>
          <div className={styles.description_side}>
            <div className={`${styles.room_flex}`}>
              <div className={`${styles.glass_block} ${styles.title}`}>Удобства</div>
              <ul className={`${styles.glass_block} ${styles.options}`}>
                {optionsByRoomType[type].map((e, i) => (
                  <li key={i} className={styles.option}>{e}</li>
                ))}
              </ul>
              {priceByRoomType[type] &&
                <div className={`${styles.glass_block} ${styles.title}`}>Цена {priceByRoomType[type]}</div>}
            </div>

          </div>
          <video
            ref={videoRef}
            // autoPlay
            muted
            loop
            playsInline
            className={styles.video_background}
          />
        </div>

      </div>
      <div ref={livingRoomRef} className={styles.living_room}></div>
      <div ref={twoPlaceRoomRef} className={styles.two_place_room}></div>
      <div ref={onePlaceRoomRef} className={styles.one_place_room}></div>
      <div ref={endRef} className={styles.end}></div>
    </section>
  )

}