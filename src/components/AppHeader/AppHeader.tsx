import {FC, useContext} from "react";
import styles from "./AppHeader.module.css"
import {Tab} from "../Tab/Tab";
import {Button} from "../Button/Button";
import {ButtonContext} from "../../providers/ButtonContext";
import {ButtonAction} from "../../shared/types";

export const AppHeader: FC = () => {

  const buttonContext = useContext(ButtonContext);

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

  return (
    <header className={styles.header}>
      <div></div>
      <nav className={styles.navigation}>
        <Tab active={false} title={'Главная'} onClick={() => {}} />
        <Tab active={false} title={'О нас'} onClick={() => {}} />
        <Tab active={false} title={'Услуги'} onClick={() => {}} />
        <Tab active={false} title={'Цены'} onClick={() => {}} />
        <Tab active={false} title={'Новости'} onClick={() => {}} />
      </nav>
      <div className={`${styles.button_ref}`}>
        <Button active={buttonContext[0] === 'highlight'} className={`${buttonContext[0] !== '' && buttonActionSelect(buttonContext[0])}`} title={'Заявка на проживание'} onClick={() => {}} />
      </div>
    </header>
  )
}
