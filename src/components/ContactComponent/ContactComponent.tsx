import styles from './ContactComponent.module.css';
import { ReactComponent as Logo } from "@/assets/svg/logo.svg";
import {openDoc} from "@/shared/functions";

export const ContactComponent = () => {

  return (
    <footer className={styles.main}>
      <div className={styles.description_section}>
        <div className={styles.content}>
          <div className={styles.info_column}>
            <div className={styles.title}>/ РЕСЕПШЕН (24/7)</div>
            <div className={styles.paragraph}>+7 831 435 13 15</div>
          </div>
          <div className={styles.info_column}>
            <div className={styles.title}>/ E-MAIL</div>
            <div className={styles.paragraph}>welcome@neimark-it.ru</div>
          </div>
          <div className={styles.info_column}>
            <div className={styles.title}>/ АДРЕС</div>
            <div className={styles.paragraph}>НИЖНИЙ НОВГОРОД, ул. БОЛЬШИЕ ОВРАГИ, д 12</div>
          </div>
        </div>
        <div className={styles.content_bottom}>
          <div className={styles.text_bottom_left}>© 2025 Автономная некоммерческая организация высшего образования
            «Университет НЕЙМАРК»
          </div>
          <div className={styles.text_bottom_right} onClick={() => openDoc('policy')}>Политика конфиденциальности</div>
        </div>
        <div className={styles.content_bottom}>
          <div  className={styles.text_bottom_justify}>ИТ-Кампус НЕЙМАРК. Гостиница. Номер реестровой записи: С002025006007. Даты действия: с 08.08.2025 по 08.08.2028. Адрес: Российская Федерация, Нижегородская область, город Нижний Новгород,
          улица Большие Овраги, дом 12
          </div>
        </div>
      </div>

    </footer>
  )

}