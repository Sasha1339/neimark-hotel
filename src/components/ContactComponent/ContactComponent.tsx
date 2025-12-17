import styles from './ContactComponent.module.css';
import { ReactComponent as Logo } from "@/assets/svg/logo.svg";

export const ContactComponent = () => {

  return (
    <footer className={styles.main}>
      <div className={styles.description_section}>
        <div className={styles.content}>
          <div className={styles.info_column}>
            <div className={styles.title}>/ РЕСЕПШЕН(24/7)</div>
            <div className={styles.paragraph}>+7 831 435 13 15</div>
          </div>
          <div className={styles.info_column}>
            <div className={styles.title}>/ E-MAIL</div>
            <div className={styles.paragraph}>welcome@neimark-it.ru</div>
          </div>
          <div className={styles.info_column}>
            <div className={styles.title}>/ АДРЕС</div>
            <div className={styles.paragraph}>НИЖНИЙ НОВГОРОД, ул. БОЛЬШИЕ ОВРАГИ, д 8</div>
          </div>
        </div>
        <div className={styles.content_bottom}>
          <div className={styles.text_bottom_left}>© 2025 Автономная некоммерческая организация высшего образования «Университет НЕЙМАРК»</div>
          <div className={styles.text_bottom_right}>Политика конфиденциальности</div>
        </div>
      </div>

    </footer>
  )

}