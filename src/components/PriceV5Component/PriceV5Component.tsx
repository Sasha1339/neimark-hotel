import {FC, RefObject, useEffect, useRef, useState} from "react";
import styles from "./PriceV5Component.module.css";
import {gsap} from "gsap";
import Hls from "hls.js";
import {openPdf} from "@/shared/functions";
import CategoryBackdrop from "../../assets/svg/category_backdrop.svg";
import clsx from "clsx";
import {Button} from "@components/Button/Button";
import {useMediaQuery} from "@/hooks/useMobileVersion";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

type RoomType = 'one_place' | 'two_place' | 'living_room';

const optionsByRoomType = {
  'one_place': ['Кровать с постельным бельем', 'Шкаф', 'Стол и стул', 'Ростовое зеркало', 'Умная колонка СБЕР', 'Санузел', 'Полотенца', 'Душевые принадлежности', 'Фен'],
  'two_place': ['2 кровати с постельным бельем', 'Шкаф', '2 стола и стула', 'Ростовое зеркало', 'Умная колонка СБЕР', 'Санузел', 'Полотенца', 'Душевые принадлежности', 'Фен'],
  'living_room': ['Диван','ТВ','Чайник', 'Аэрогриль, мультиварка, микроволновки','Посуда','Прачечная'],
}

const images = {
  'one_place': ['one_place_1.jpg', 'one_place_2.jpg', 'one_place_4.jpg', 'one_place_5.jpg'],
  'two_place': ['two_place_1.jpg', 'two_place_2.jpg', 'two_place_3.jpg', 'two_place_4.jpg', 'two_place_5.jpg', 'two_place_6.jpg'],
  'living_room': ['living_place_1.jpg', 'living_place_2.jpg', 'living_place_3.jpg', 'living_place_4.jpg', 'living_place_5.jpg', 'living_place_6.jpg', 'living_place_7.jpg', 'living_place_8.jpg', 'living_place_9.jpg', 'living_place_10.jpg', 'living_place_11.jpg'],
}

const priceByRoomType = {
  'one_place': '17 000 ₽',
  'two_place': '12 000 ₽',
  'living_room': undefined,
}

export const PriceV5Component: FC<Props> = ({scrollerRef}) => {

  const { matches: isTablet } = useMediaQuery('(width <= 1600px)');
  const { matches: isMobile } = useMediaQuery('(width <= 710px)');

  const categories = useRef<HTMLDivElement>(null);
  const onePlaceRoom = useRef<HTMLSpanElement>(null);
  const twoPlaceRoom = useRef<HTMLSpanElement>(null);
  const livingPlaceRoom = useRef<HTMLSpanElement>(null);
  const activeCategory = useRef<HTMLDivElement>(null);

  const [type, setType] = useState<RoomType>('one_place');
  const [index, setIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Очищаем старый интервал при изменении type
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Сбрасываем индекс при смене type (опционально)
    setIndex(0);

    // Создаём новый интервал
    intervalRef.current = setInterval(() => {

      setIndex((prev) => isMobile ? (prev + 1 >= 4 ? 0 : prev + 1) : (prev + 1 >= images[type].length ? 0 : prev + 1));

    }, 3000);

    // Очистка при размонтировании
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [type]);

  useEffect(() => {
    if (activeCategory.current && onePlaceRoom.current) {
      activeCategory.current.style.setProperty('width', `${onePlaceRoom.current.getBoundingClientRect().width - 1}px`);
    }
  }, []);

  const setCategory = (type: RoomType) => {

    setType(type);
    if (!categories.current || !activeCategory.current) return;

    switch (type) {
      case 'one_place':
        if (onePlaceRoom.current) {
          const left = onePlaceRoom.current.getBoundingClientRect().left - categories.current.getBoundingClientRect().left - 1;
          activeCategory.current.style.setProperty('width', `${onePlaceRoom.current.getBoundingClientRect().width + 1}px`);
          activeCategory.current.style.setProperty('left', `${left}px`);
        }
        break;
      case 'two_place':
        if (twoPlaceRoom.current) {
          const left = twoPlaceRoom.current.getBoundingClientRect().left - categories.current.getBoundingClientRect().left - 1;
          activeCategory.current.style.setProperty('width', `${twoPlaceRoom.current.getBoundingClientRect().width + 1}px`);
          activeCategory.current.style.setProperty('left', `${left}px`);
        }
        break;
      case 'living_room':
        if (livingPlaceRoom.current) {
          const left = livingPlaceRoom.current.getBoundingClientRect().left - categories.current.getBoundingClientRect().left - 1;
          activeCategory.current.style.setProperty('width', `${livingPlaceRoom.current.getBoundingClientRect().width + 1}px`);
          activeCategory.current.style.setProperty('left', `${left}px`);
        }
        break;
    }
  }

  const actionMetric = () => {
    window.open('https://neimark.ukmira.ru/register');
    if (typeof window !== 'undefined' && typeof window.ym === 'function') {
      window.ym(105500220,'reachGoal','click-form-hotel')
    }
  }

  const openPriceList = () => {
    openPdf('price');
    if (typeof window !== 'undefined' && typeof window.ym === 'function') {
      window.ym(105500220,'reachGoal','click-price-hotel');
    }
  }

  const getContent = () => {
    if (isMobile) {
      return (
        <>
          <div className={styles.content_grid}>
            <div ref={categories} className={clsx(styles.main_block, styles.categories)}>
              <span ref={onePlaceRoom}
                    className={clsx(styles.category)}>Одноместное размещение</span>
            </div>


            <div className={clsx(styles.main_block, styles.image_room)}>
              {images['one_place'].map((e, i) => <img key={i} className={styles.image_src}
                                                      style={{opacity: i === index ? 1 : 0}}
                                                      src={`/image/${e}`}/>)}
            </div>
            <div
              className={clsx(styles.main_block, styles.all_accom)}>{optionsByRoomType['one_place'].map((e) => `· ${e}\n`)}</div>
            <div className={clsx(styles.main_block, styles.price_block)}>
              <div className={styles.price_text}>от {priceByRoomType['one_place']}</div>
              <div className={styles.open_price_list} onClick={openPriceList}>Открыть прайс-лист</div>
            </div>
            <Button className={styles.button} title={'Подать заявку'} onClick={actionMetric}></Button>
          </div>
          <div className={styles.content_grid}>
            <div ref={categories} className={clsx(styles.main_block, styles.categories)}>
              <span ref={onePlaceRoom}
                    className={clsx(styles.category)}>Двухместное размещение</span>
            </div>


            <div className={clsx(styles.main_block, styles.image_room)}>
              {images['two_place'].map((e, i) => <img key={i} className={styles.image_src}
                                                      style={{opacity: i === index ? 1 : 0}}
                                                      src={`/image/${e}`}/>)}
            </div>
            <div
              className={clsx(styles.main_block, styles.all_accom)}>{optionsByRoomType['two_place'].map((e) => `· ${e}\n`)}</div>
            <div className={clsx(styles.main_block, styles.price_block)}>
              <div className={styles.price_text}>от {priceByRoomType['two_place']}</div>
              <div className={styles.open_price_list} onClick={openPriceList}>Открыть прайс-лист</div>
            </div>
            <Button className={styles.button} title={'Подать заявку'} onClick={actionMetric}></Button>
          </div>
          <div className={styles.content_grid}>
            <div ref={categories} className={clsx(styles.main_block, styles.categories)}>
              <span ref={onePlaceRoom}
                    className={clsx(styles.category)}>Гостиная</span>
            </div>


            <div className={clsx(styles.main_block, styles.image_room)}>
              {images['living_room'].map((e, i) => <img key={i} className={styles.image_src}
                                                      style={{opacity: i === index ? 1 : 0}}
                                                      src={`/image/${e}`}/>)}
            </div>
            <div
              className={clsx(styles.main_block, styles.all_accom)}>{optionsByRoomType['living_room'].map((e) => `· ${e}\n`)}</div>
            <Button className={clsx(styles.button, styles.button_span)} title={'Подать заявку'} onClick={actionMetric}></Button>

          </div>
        </>

      )
    } else if (isTablet) {
      return (
        <div className={styles.content_grid}>
          <div ref={categories} className={clsx(styles.main_block, styles.categories)}>
            <div className={styles.active_back} ref={activeCategory}></div>
            <span ref={onePlaceRoom} onClick={() => setCategory('one_place')}
                  className={clsx(styles.category, {[styles.category_active]: type === 'one_place'})}>Одноместное размещение</span>
            <span ref={twoPlaceRoom} onClick={() => setCategory('two_place')}
                  className={clsx(styles.category, {[styles.category_active]: type === 'two_place'})}>Двухместное размещение</span>
            <span ref={livingPlaceRoom} onClick={() => setCategory('living_room')}
                  className={clsx(styles.category, {[styles.category_active]: type === 'living_room'})}>Гостиная</span>
          </div>
          <div
            className={clsx(styles.main_block, styles.all_accom)}>{optionsByRoomType[type].map((e) => `· ${e}\n`)}</div>
          <div className={clsx(styles.main_block, styles.image_room)}>
            {images[type].map((e, i) => <img key={i} className={styles.image_src} style={{opacity: i === index ? 1 : 0}}
                                             src={`/image/${e}`}/>)}
          </div>
          {type !== 'living_room' ? <div className={clsx(styles.main_block, styles.price_block)}>
            <div className={styles.price_text}>от {priceByRoomType[type]}</div>
            <div className={styles.open_price_list} onClick={openPriceList}>Открыть прайс-лист</div>
          </div> : <div className={clsx(styles.main_block, styles.empty_block)}>
          </div>}
          <Button className={styles.button} title={'Подать заявку'} onClick={actionMetric}></Button>
        </div>
      )
    } else {
      return (
        <div className={styles.content_grid}>
          <div className={clsx(styles.main_block, styles.top_left_block)}>Удобства</div>
          <div ref={categories} className={clsx(styles.main_block, styles.categories)}>
            <div className={styles.active_back} ref={activeCategory}></div>
            <span ref={onePlaceRoom} onClick={() => setCategory('one_place')}
                  className={clsx(styles.category, {[styles.category_active]: type === 'one_place'})}>Одноместное размещение</span>
            <span ref={twoPlaceRoom} onClick={() => setCategory('two_place')}
                  className={clsx(styles.category, {[styles.category_active]: type === 'two_place'})}>Двухместное размещение</span>
            <span ref={livingPlaceRoom} onClick={() => setCategory('living_room')}
                  className={clsx(styles.category, {[styles.category_active]: type === 'living_room'})}>Гостиная</span>
          </div>
          <div
            className={clsx(styles.main_block, styles.all_accom)}>{optionsByRoomType[type].map((e) => `· ${e}\n`)}</div>
          <div className={clsx(styles.main_block, styles.image_room)}>
            {images[type].map((e, i) => <img key={i} className={styles.image_src} style={{opacity: i === index ? 1 : 0}}
                                             src={`/image/${e}`}/>)}
          </div>
          {type !== 'living_room' ? <div className={clsx(styles.main_block, styles.price_block)}>
            <div className={styles.price_text}>от {priceByRoomType[type]}</div>
            <div className={styles.open_price_list} onClick={openPriceList}>Открыть прайс-лист</div>
          </div> : <div className={clsx(styles.main_block, styles.empty_block)}>
          </div>}
          <Button className={styles.button} title={'Подать заявку'} onClick={actionMetric}></Button>
        </div>
      )
    }
  }

  return (
    <section className={styles.main}>
      <img className={styles.image_backdrop} src={CategoryBackdrop}/>
      <span className={styles.header}>Категории <span className={styles.pixel}>номеров</span></span>
      {getContent()}
    </section>
  )

}