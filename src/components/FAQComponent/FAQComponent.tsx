import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./FAQComponent.module.css";
import {gsap} from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import {AboutElementComponent} from "@components/AboutElementComponent/AboutElementComponent";
import {FAQElementComponent} from "@components/FAQElement/FAQElementComponent";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const FAQComponent: FC<Props> = ({scrollerRef}) => {

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

  const textHeader = 'Отвечаем на вопросы'.toUpperCase();

  return (
    <section ref={triggerRef} className={styles.main}>
      <div className={styles.main_overlay}></div>
      <div ref={contentRef} className={styles.description_section}>
        <span className={styles.hint_span}>FAQ</span>
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
          <div className={styles.faq_block}>
            Условия проживания
            <FAQElementComponent question={'Можно ли украшать комнату (размещать постеры, фотографии)?'}
                                 answer={'Для размещения фотографий, небольших постеров в комнатах предусмотрены пробковые доски. Мы с радостью поможем их установить по вашему звонку на рецепцию. Пожалуйста, не используйте клей и не сверлите стены и мебель'}/>
            <FAQElementComponent question={'Можно ли приводить гостей?'}
                                 answer={'Да. Гости могут находиться в корпусе до 22:00. Для их пребывания необходимо оформить пропуск на ресепшене. За корректное поведение и безопасность гостей ответсвенность несет приглашающий'}/>
            <FAQElementComponent question={'Кампус работает круглосуточно? '}
                                 answer={'Кампус открыт 24/7. С 23:00 действует правило тишины — мы уважаем режим сна и учёбы соседей'}/>
            <FAQElementComponent question={'Кто следит за чистотой? '}
                                 answer={'В коливингах предусмотрен клининг: мы позаботимся об уборке номеров, мест общего пребывания, смене постельного белья и полотенец. Проживающих мы просим убирать за собой посуду и выбрасывать мусор в корзины. Найти карточку что делает студент и мира'}/>
            <FAQElementComponent question={'Разрешено ли курение и распитие спиртных напитков?'}
                                 answer={'Мы за ЗОЖ: алкоголь, табак, электронные сигареты и кальяны запрещены на всей территории кампуса — для проживающих и гостей. Мы понимаем запрос на выделенную зону и рассматриваем такую возможность'}/>
          </div>
          <div className={styles.faq_block}>
            Условия оплаты
            <FAQElementComponent question={'Как осуществляется оплата?'}
                                 answer={'Оплата осуществляется авансом за месяц проживания. Оплата за текущий месяц производится до 7 числа'}/>
          </div>

          <div className={styles.faq_block}>
            Оснащение мебелью и техникой
            <FAQElementComponent question={'Какая мебель и техника есть в комнатах?'}
                                 answer={'Комнаты оснащены всей необходимой мебелью для комфортного проживания: спальное место с постельным бельем, шкаф для хранения вещей, письменный стол и кресло. Кроме того, во всех комнатах есть умная станция СБЕР. В каждом блоке имеется 1 или 2 санузла и душевая кабина, предоставляется набор полотенец с еженедельной заменой. В местах общего пользования есть диван, ТВ, микроволновка и мультиварка для разогрева пищи, аэрогриль, холодильники'}/>
            <FAQElementComponent question={'Что есть на кухнях и на сколько человек'}
                                 answer={'На каждом этаже есть холодильники, 2 микроволновки, мультиварка, аэрогриль, посуда (чашки/стаканы) и приборы. Этаж обычно рассчитан на 16–18 проживающих'}/>
            <FAQElementComponent
              question={'Можно ли ставить свою технику (например, мини-холодильник)? Что запрещено? '}
              answer={'Мелкую технику (телефоны, ноутбуки) можно подключать в розетки в комнате. Для размещения личной крупной и энергоёмкой техники необходимо направить заявку'}/>
            <FAQElementComponent question={'Какой интернет в кампусе?'}
                                 answer={'В коливингах предусмотрен бесплатный интернет 24/7, скорость — до 1 Гбит/с. Эта скорость позволяет пользоваться всеми необходимыми онлайн-инструментами для учёбы. В номерах доступны Wi-Fi и проводное подключение. Сеть внутренняя; подключения к внешним серверам нет'}/>
          </div>

          <div className={styles.faq_block}>
            Территория и инфраструктура коливингов
            <FAQElementComponent question={'Навигация по кампусу и доступ в другие корпуса'}
                                 answer={'Скоро появится приложение с картами и правилами; на рецепции уже доступны буклеты и карты — поможем с ориентированием. Карта доступа работает в вашем корпусе; в другие корпуса можно входить как гость до 22:00 в присутствии приглашающего. Мы будем отмечать даты открытий зон досуга и новых сервисов — вы сможете побывать на открытиях и получить бонусы'}/>
             </div>
        </div>
      </div>
    </section>
  )

}