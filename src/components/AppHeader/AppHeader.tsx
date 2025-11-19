import {FC, useContext, useEffect, useRef} from "react";
import styles from "./AppHeader.module.css"
import {Tab} from "../Tab/Tab";
import {Button} from "../Button/Button";
import {HeaderContext} from "../../providers/HeaderContext";
import {NavigationContext} from "@/providers/NavigationContext";
import {TabContext} from "@/providers/TabContext";
import {ReactComponent as Logo} from "@/assets/svg/logo.svg";
import {gsap} from "gsap";
import {useNavigate} from "react-router-dom";
import {NavigationTab} from "@/shared/types";

export const AppHeader: FC = () => {

  const headerContext = useContext(HeaderContext);
  const navigationContext = useContext(NavigationContext);
  const tabContext = useContext(TabContext);
  const navigate = useNavigate();

  const header = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (headerContext[0] === 'hidden') {
      gsap.to(header.current, {y: '-100%', duration: 0.5, ease: 'power1.inOut'})
    } else {
      gsap.to(header.current, {y: 0, duration: 0.5, ease: 'power1.inOut'})
    }
  }, [headerContext[0], header]);

  // useEffect(() => {
  //   tabContext[1]('');
  // }, [tabContext[0]]);

  const onRoute = (route: NavigationTab) => {
    tabContext[1](route)
    navigate('/');
  }

  return (
    <header ref={header} className={`${styles.header}`}>
      <div className={styles.header_left}>
        <Logo className={styles.logo}/>
        {headerContext[0] === 'home' && <nav className={styles.navigation}>
          <Tab active={navigationContext[0] === 'home'} title={'Главная'} onClick={() => onRoute('home')} />
          <Tab active={navigationContext[0] === 'about'} title={'О нас'} onClick={() => onRoute('about')} />
          <Tab active={navigationContext[0] === 'acco'} title={'Проживание'} onClick={() => onRoute('acco')} />
          <Tab active={navigationContext[0] === 'price'} title={'Цены'} onClick={() => onRoute('price')} />
          <Tab active={navigationContext[0] === 'news'} title={'Новости'} onClick={() => onRoute('news')} />
        </nav>}
        {headerContext[0] === 'room' && <nav className={styles.navigation}>
          <Tab active={false} title={'< Вернуться'} onClick={() => navigate(-1)} />
          <Tab active={false} title={'Главная'} onClick={() => navigate('/')} />
          <Tab active={true} title={'Просмотр комнат'} />
        </nav>}
        {headerContext[0] === 'search' && <nav className={styles.navigation}>
          <Tab active={false} title={'< Вернуться'} onClick={() => navigate(-1)} />
          <Tab active={false} title={'Главная'} onClick={() => navigate('/')} />
          <Tab active={true} title={'Поиск номеров'} />
        </nav>}
      </div>
      <div className={styles.header_right}>
        <Button className={styles.header_button} defaultClassName={false} title={'Подать заявку'} onClick={() => {}}/>
      </div>
    </header>
  )
}
