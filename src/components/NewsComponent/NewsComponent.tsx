import styles from "./NewsComponent.module.css";
import {FC, RefObject, useRef} from "react";
import AliceCarousel from "react-alice-carousel";
import {NewComponent} from "@components/NewComponent/NewComponent";

import 'react-alice-carousel/lib/alice-carousel.css';



type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

const items = [
  <NewComponent src={'https://cdn.b12.io/client_media/VhBHooYp/11b0cfb5-8438-11f0-8c1d-0242ac110002-jpg-hero_image.jpeg'} title={'Новый тип в гостиницах Неймарк'} description={'Мы рады сообщить, что в гостиницах Неймарк теперь доступны новые типы комнат, специально разработанные для студентов. Эти комнаты предлагают современные удобства и комфорт, что создает идеальные условия для учебы и отдыха. Каждая комната оснащена всем необ.'} />,
  <NewComponent src={'https://cdn.b12.io/client_media/VhBHooYp/11b0cfb5-8438-11f0-8c1d-0242ac110002-jpg-hero_image.jpeg'} title={'Программа поддержки для студентов'} description={'Гостиницы Неймарк запускают программу поддержки для студентов, предлагая консультации и помощь в различных аспектах их жизни. Мы понимаем, что учеба может быть сложной, и поэтому создаем условия, где студенты могут получить необходимую поддержку. Наша кома...'} />,
  <NewComponent src={'https://cdn.b12.io/client_media/VhBHooYp/11b0cfb5-8438-11f0-8c1d-0242ac110002-jpg-hero_image.jpeg'} title={'Специальные предложения для родителей'} description={'Неймарк предлагает специальные предложения для родителей студентов! Мы понимаем, как важно поддерживать связь с вашими детьми во время учебы, поэтому мы предоставляем скидки на проживание для родителей, которые желают посетить своих детей. Наши гостиницы о...'} />
]

export const NewsComponent: FC<Props> = ({scrollerRef, ...props}) => {


  const triggerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);


  const responsive = {
    0: { items: 1 },     // мобильные устройства — 1 новость
    1024: { items: 2 },  // начиная с 1024px — 2 новости на экране
  };

  return (
    <section ref={triggerRef} className={styles.main}>
      <div ref={contentRef} className={styles.content}>
        <AliceCarousel mouseTracking items={items}
                       responsive={responsive}
                       infinite
                       controlsStrategy="responsive"/>
      </div>
    </section>
  )

}