import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./AboutV3Component.module.css";
import {CardComponent} from "@components/CardComponent/CardComponent";
import {useMediaQuery} from "@/hooks/useMobileVersion";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const AboutV3Component: FC<Props> = ({scrollerRef}) => {

  const { matches: isTablet } = useMediaQuery('(width <= 1600px)');
  const { matches: isMobile } = useMediaQuery('(width <= 940px)');

  const getCards = () => {
    if (isMobile) {
      return (
        <>
          <div className={styles.cards_left}>
            <CardComponent icon={'community_white'} title={'Сообщество, которое вдохновляет'}
                           description={'Живите в среде единомышленников, собирайте команды для проектов и участвуйте в образовательных, спортивных и творческих мероприятиях'}/>
            </div>
          <div className={styles.cards_right}>
            <CardComponent icon={'all-inclusive_white'} title={'Жизнь без бытовых забот'}
                           description={'Интернет, коммунальные услуги, клининг и смена белья уже включены в стоимость проживания'}/>

          </div>
          <div className={styles.cards_left}>
            <CardComponent icon={'coworking_white'} title={'Современное пространство'}
                           description={'Новая гостиница с современными интерьерами, удобной мебелью, техникой и продуманными пространствами для учебы, работы, отдыха и общения'}/>

          </div>
          <div className={styles.cards_right}>
            <CardComponent icon={'city_white'} title={'Центр студенческой жизни'}
                           description={'Живите в центре культурной жизни, рядом с университетами, кафе, магазинами, спортом и всем, что нужно каждый день'}/>

          </div>
          <div className={styles.cards_left}>
            <CardComponent icon={'security_white'} title={'Безопасно и спокойно'}
                           description={'Круглосуточная охрана, интеллектуальное видеонаблюдение и электронный доступ в корпуса создают безопасную среду для жизни'}/>

          </div>
          <div className={styles.cards_right}>
            <CardComponent icon={'animals_white'} title={'Дом, где рады вашим питомцам'}
                           description={'Переезжайте без стресса. В коливингах разрешено проживание с кошками, собаками мелких пород и аквариумными рыбками'}/>

          </div>
        </>
      )
    } else if (isTablet) {
      return (
        <>
          <div className={styles.cards_left}>
            <CardComponent icon={'community_white'} title={'Сообщество, которое вдохновляет'}
                           description={'Живите в среде единомышленников, собирайте команды для проектов и участвуйте в образовательных, спортивных и творческих мероприятиях'}/>
            <CardComponent icon={'all-inclusive_white'} title={'Жизнь без бытовых забот'}
                           description={'Интернет, коммунальные услуги, клининг и смена белья уже включены в стоимость проживания'}/>
            </div>
          <div className={styles.cards_right}>
            <CardComponent icon={'coworking_white'} title={'Современное пространство'}
                           description={'Новая гостиница с современными интерьерами, удобной мебелью, техникой и продуманными пространствами для учебы, работы, отдыха и общения'}/>
            <CardComponent icon={'city_white'} title={'Центр студенческой жизни'}
                           description={'Живите в центре культурной жизни, рядом с университетами, кафе, магазинами, спортом и всем, что нужно каждый день'}/>
          </div>
          <div className={styles.cards_left}>
            <CardComponent icon={'security_white'} title={'Безопасно и спокойно'}
                           description={'Круглосуточная охрана, интеллектуальное видеонаблюдение и электронный доступ в корпуса создают безопасную среду для жизни'}/>
            <CardComponent icon={'animals_white'} title={'Дом, где рады вашим питомцам'}
                           description={'Переезжайте без стресса. В коливингах разрешено проживание с кошками, собаками мелких пород и аквариумными рыбками'}/>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={styles.cards_left}>
            <CardComponent icon={'community_white'} title={'Сообщество, которое вдохновляет'}
                           description={'Живите в среде единомышленников, собирайте команды для проектов и участвуйте в образовательных, спортивных и творческих мероприятиях'}/>
            <CardComponent icon={'all-inclusive_white'} title={'Жизнь без бытовых забот'}
                           description={'Интернет, коммунальные услуги, клининг и смена белья уже включены в стоимость проживания'}/>
            <CardComponent icon={'coworking_white'} title={'Современное пространство'}
                           description={'Новая гостиница с современными интерьерами, удобной мебелью, техникой и продуманными пространствами для учебы, работы, отдыха и общения'}/>
          </div>
          <div className={styles.cards_right}>
            <CardComponent icon={'city_white'} title={'Центр студенческой жизни'}
                           description={'Живите в центре культурной жизни, рядом с университетами, кафе, магазинами, спортом и всем, что нужно каждый день'}/>
            <CardComponent icon={'security_white'} title={'Безопасно и спокойно'}
                           description={'Круглосуточная охрана, интеллектуальное видеонаблюдение и электронный доступ в корпуса создают безопасную среду для жизни'}/>
            <CardComponent icon={'animals_white'} title={'Дом, где рады вашим питомцам'}
                           description={'Переезжайте без стресса. В коливингах разрешено проживание с кошками, собаками мелких пород и аквариумными рыбками'}/>
          </div>
        </>
      )
    }
  }

  return (
    <section className={styles.main}>
      <span className={styles.header}>Живи там, где начинается <span className={styles.pixel}>будущее</span></span>
      <div className={styles.description}>
        {'Гостиница ИТ-кампуса НЕЙМАРК — это современное пространство в формате коливинга для студентов ИТ-направлений, исследователей и молодых специалистов. Здесь комфортное проживание сочетается с развитой инфраструктурой, сервисом и сообществом единомышленников, чтобы вы могли сосредоточиться на учёбе, проектах и личном развитии'}
      </div>
      {getCards()}
    </section>
  )

}