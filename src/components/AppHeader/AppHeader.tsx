import {FC, useContext, useEffect, useRef} from "react";
import styles from "./AppHeader.module.css"
import {Tab} from "../Tab/Tab";
import {Button} from "../Button/Button";
import {HeaderContext} from "../../providers/HeaderContext";
import {HeaderAction} from "../../shared/types";
import {NavigationContext} from "@/providers/NavigationContext";
import {TabContext} from "@/providers/TabContext";
import {ReactComponent as Logo} from "@/assets/svg/logo.svg";
import {gsap} from "gsap";

export const AppHeader: FC = () => {

  const headerContext = useContext(HeaderContext);
  const navigationContext = useContext(NavigationContext);
  const tabContext = useContext(TabContext);

  const header = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (headerContext[0] === 'hidden') {
      gsap.to(header.current, {y: '-100%', duration: 0.5, ease: 'power1.inOut'})
    } else {
      gsap.to(header.current, {y: 0, duration: 0.5, ease: 'power1.inOut'})
    }
  }, [headerContext[0], header]);

  useEffect(() => {
    tabContext[1]('');
  }, [tabContext[0]]);



  return (
    <header ref={header} className={`${styles.header}`}>
      <div className={styles.header_left}>
        <Logo className={styles.logo}/>
        <nav className={styles.navigation}>
          <Tab active={navigationContext[0] === 'home'} title={'Главная'} onClick={() => tabContext[1]('home')} />
          <Tab active={navigationContext[0] === 'about'} title={'О нас'} onClick={() => tabContext[1]('about')} />
          <Tab active={navigationContext[0] === 'acco'} title={'Проживание'} onClick={() => tabContext[1]('acco')} />
          <Tab active={navigationContext[0] === 'price'} title={'Цены'} onClick={() => tabContext[1]('price')} />
          <Tab active={navigationContext[0] === 'news'} title={'Новости'} onClick={() => tabContext[1]('news')} />
        </nav>
      </div>
      <div className={styles.header_right}>
        <Button title={'Подать заявку'} onClick={() => {
        }}/>
      </div>
    </header>
  )
}
