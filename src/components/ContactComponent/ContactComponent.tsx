import styles from './ContactComponent.module.css';
import { ReactComponent as Logo } from "@/assets/svg/logo.svg";

export const ContactComponent = () => {

  return (
    <footer className={styles.main}>
      <div className={styles.description_section}>
        <div className={styles.content}>
          <Logo className={styles.logo}/>
          <div className={styles.info_column}>
            <div>Ресепшен (круглосуточно):</div>
            <div>+7 831 435 13 15</div>
            <div>welcome@neimark-it.ru</div>
          </div>
          <div className={styles.info_column}>
            <div>Мы в социальных сетях:</div>
            <a href={'https://vk.com/neimark_it'}>ВКонтакте</a>
            <a href={'https://t.me/neimarkitlektoriy'}>Телеграм</a>
          </div>
          <iframe
            className={styles.map_column}
            src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=43.981812%2C56.314407&mode=whatshere&whatshere%5Bpoint%5D=43.981813%2C56.314407&whatshere%5Bzoom%5D=17&z=17"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

    </footer>
  )

}