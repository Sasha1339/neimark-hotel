import styles from './ContactV2Component.module.css';
import {openDocx, openPdf} from "@/shared/functions";

export const ContactV2Component = () => {

  const open = () => {
    if (typeof window !== 'undefined' && typeof window.ym === 'function') {
      window.ym(105500220,'reachGoal','click-phone-mail-hotel')
    }
  }

  return (
    <footer className={styles.main}>
      <div className={styles.description_section}>
        <div className={styles.content}>
          <div className={styles.info_column}>
            <div className={`${styles.paragraph} ${styles.link}`} onClick={() => openPdf('public')}>Публичная оферта
            </div>
          </div>
          <div className={styles.info_column}>
            <div className={`${styles.paragraph} ${styles.link}`} onClick={() => openPdf('rules')}>Правила
              проживания
            </div>
          </div>
          <div className={styles.info_column}>
            <div className={`${styles.paragraph} ${styles.link}`} onClick={() => openPdf('order')}>Приказ об оплате
            </div>
          </div>
          <div className={styles.info_column}>
            <div className={`${styles.paragraph} ${styles.link}`}
                 onClick={() => openDocx('form_personal_data', 'Форма согласия на обработку персональных данных')}>Форма
              согласия на обработку персональных данных
            </div>
          </div>
          <div className={styles.info_column}>
            <div className={`${styles.paragraph} ${styles.link}`}
                 onClick={() => openDocx('form_teenager', 'Форма согласия на заселение несовершеннолетнего')}>Форма
              согласия на заселение несовершеннолетнего
            </div>
          </div>
          <div className={styles.info_column}>
            <div className={`${styles.paragraph} ${styles.link}`}
                 onClick={() => openPdf('loyalty')}>Положение о программе лояльности для партнеров
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.info_column}>
            <div className={styles.title}>/ РЕСЕПШЕН (24/7)</div>
            <a href="tel:+78314351315" className={styles.paragraph} onClick={open}>+7 831 435 13 15</a>
          </div>
          <div className={styles.info_column}>
            <div className={styles.title}>/ E-MAIL</div>
            <a href="mailto:welcome@neimark-it.ru" className={styles.paragraph} onClick={open}>welcome@neimark-it.ru</a>
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
          <div className={styles.text_bottom_right} onClick={() => openPdf('policy')}>Политика конфиденциальности</div>
        </div>
        <div className={styles.content_bottom}>
          <div className={styles.text_bottom_justify}>ИТ-Кампус НЕЙМАРК. Гостиница. Номер реестровой записи:
            С002025006007. Даты действия: с 08.08.2025 по 08.08.2028. Адрес: Российская Федерация, Нижегородская
            область, город Нижний Новгород,
            улица Большие Овраги, дом 12
          </div>
        </div>
      </div>

    </footer>
  )

}