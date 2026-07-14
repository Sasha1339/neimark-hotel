import {FC, RefObject, useContext, useEffect, useRef} from "react";
import styles from "./FAQV2Component.module.css";
import {FAQV2ElementComponent} from "@components/FAQV2Element/FAQV2ElementComponent";
import CategoryFaq from "@/assets/svg/category_faq.svg";
import CategoryPartner from "@/assets/svg/category_partner.svg";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const FAQV2Component: FC<Props> = ({scrollerRef}) => {



  return (
    <section className={styles.main}>
      <img className={styles.image_backdrop} src={CategoryFaq}/>
      <span className={styles.header}>Отвечаем на <span className={styles.pixel}>вопросы</span></span>
      <div className={styles.questions}>
        <FAQV2ElementComponent question={'Кампус работает круглосуточно? '}
                               answer={'Кампус открыт 24/7. С 23:00 действует правило тишины — мы уважаем режим сна и учёбы соседей'}/>
        <FAQV2ElementComponent question={'Кто следит за чистотой? '}
                               answer={'В коливингах предусмотрен клининг: мы позаботимся об уборке номеров, мест общего пребывания, смене постельного белья и полотенец. Проживающих мы просим убирать за собой посуду и выбрасывать мусор в корзины'}/>
        <FAQV2ElementComponent question={'Разрешено ли курение и распитие спиртных напитков?'}
                               answer={'Мы за ЗОЖ: алкоголь, табак, электронные сигареты и кальяны запрещены на всей территории кампуса — для проживающих и гостей. Курить разрешено за территорией ИТ-кампуса'}/>
        <FAQV2ElementComponent question={'Как осуществляется оплата?'}
                               answer={'Оплата осуществляется авансом за месяц проживания. Оплата за текущий месяц производится до 7 числа'}/>
        <FAQV2ElementComponent question={'Какая мебель и техника есть в комнатах?'}
                               answer={'Комнаты оснащены всей необходимой мебелью для комфортного проживания: спальное место с постельным бельем, шкаф для хранения вещей, письменный стол и кресло. Кроме того, во всех комнатах есть умная станция СБЕР. В каждом блоке имеется 1 или 2 санузла и душевая кабина, предоставляется набор полотенец с еженедельной заменой. В местах общего пользования есть диван, ТВ, микроволновка и мультиварка для разогрева пищи, аэрогриль, холодильники'}/>
        <FAQV2ElementComponent question={'Что есть на кухнях и на сколько человек'}
                               answer={'На каждом этаже есть холодильники, 2 микроволновки, мультиварка, аэрогриль, посуда (чашки/стаканы) и приборы. Этаж обычно рассчитан на 16–18 проживающих'}/>
        <FAQV2ElementComponent
          question={'Можно ли ставить свою технику (например, мини-холодильник)? Что запрещено? '}
          answer={'Мелкую технику (телефоны, ноутбуки) можно подключать в розетки в комнате. Для размещения личной крупной и энергоёмкой техники необходимо направить заявку'}/>
        <FAQV2ElementComponent question={'Какой интернет в кампусе?'}
                               answer={'В коливингах предусмотрен бесплатный интернет 24/7, скорость — до 1 Гбит/с. Эта скорость позволяет пользоваться всеми необходимыми онлайн-инструментами для учёбы. В номерах доступны Wi-Fi и проводное подключение. Сеть внутренняя; подключения к внешним серверам нет'}/>


      </div>
      <img className={styles.image_partner} src={CategoryPartner}/>
    </section>
  )

}