import {FC, useContext, useEffect} from "react";
import styles from "./AppHeader.module.css"
import {Tab} from "../Tab/Tab";
import {Button} from "../Button/Button";
import {ButtonContext} from "../../providers/ButtonContext";
import {ButtonAction} from "../../shared/types";
import {NavigationContext} from "@/providers/NavigationContext";
import {TabContext} from "@/providers/TabContext";

export const AppHeader: FC = () => {

  const buttonContext = useContext(ButtonContext);
  const navigationContext = useContext(NavigationContext);
  const tabContext = useContext(TabContext);

  const buttonActionSelect = (action: ButtonAction) => {
    switch (action) {
      case 'hidden' :
        return styles.button_element__hidden;
      case 'highlight' :
        return styles.button_element__highlight;
      default:
        return ''
    }
  }

  useEffect(() => {
    tabContext[1]('');
  }, [tabContext[0]]);

  return (
    <header className={`${styles.header} ${window.innerWidth <= 700 && styles.header_mobile}`}>
      {window.innerWidth > 700 && <div></div>}
      <nav className={styles.navigation}>
        <Tab active={navigationContext[0] === 'home'} title={'Главная'} onClick={() => tabContext[1]('home')} />
        <Tab active={navigationContext[0] === 'about'} title={'О нас'} onClick={() => tabContext[1]('about')} />
        <Tab active={navigationContext[0] === 'service'} title={'Услуги'} onClick={() => tabContext[1]('service')} />
        <Tab active={navigationContext[0] === 'price'} title={'Цены'} onClick={() => tabContext[1]('price')} />
        <Tab active={navigationContext[0] === 'news'} title={'Новости'} onClick={() => tabContext[1]('news')} />
      </nav>
      {window.innerWidth > 700 && <div className={`${styles.button_ref}`}>
        <Button active={buttonContext[0] === 'highlight'} className={`${buttonContext[0] !== '' && buttonActionSelect(buttonContext[0])}`} title={'Заявка на проживание'} onClick={() => {}} />
      </div>}
    </header>
  )
}
