import styles from './ConcactComponent.module.css';
import { ReactComponent as Logo } from "@/assets/svg/logo.svg";

export const ContactComponent = () => {

  return (
    <footer className={styles.main}>
      <div className={styles.description_section}>
        <div className={styles.content}>
          <Logo className={styles.logo}/>
          <div className={styles.info_column}>
            <div>Гостиница неймарк:</div>
            <div>+79200520222</div>
            <div>kgrant@inbox.ru</div>
          </div>
          <div className={styles.info_column}>
            <div>Мы в социальных сетях:</div>
            <div>ВКонтакте</div>
            <div>Телеграм</div>
            <div>Whatsup</div>
          </div>
          <div className={styles.info_column}>
            <div>Наши ресурсы:</div>
            <div>Сайт Неймарк</div>
            <div>Сотрудничесвто с Неймарк</div>
          </div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3f5b91ef3b5d7b7f1fefb92974c84b2b9b4fdb7a7b1f9db42a4fcb5bcb21db2a&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

    </footer>
  )

}