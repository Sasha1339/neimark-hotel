import {FC, useEffect, useRef} from "react";
import styles from "./FormPartnerPage.module.css";
import FormBackDrop from "@/assets/svg/form-backdrop.svg";
import FormImage from "@/assets/svg/form-image.svg";
import FormUpBD from "@/assets/svg/form_up_backdrop.svg";
import FormDownBD from "@/assets/svg/form_down_backdrop.svg";
import "./FormPartnerPage.css";

type Props = {}

export const FormPartnerPage: FC<Props> = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fixedScriptCode = `(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b35762378/crm/form/loader_15.js');`;

    // Создаем и добавляем стили
    const style = document.createElement('style');
    style.id = 'bitrix-form-styles-partner';
    style.innerHTML = `.b24-form-control-label,.b24-form-control-container { text-align: start !important; }`;
    document.head.appendChild(style);

    // Добавляем скрипт
    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'inline/15/kb3r22');
    script.setAttribute('data-skip-moving', 'true');
    script.id = 'bitrix-form-container-partner';
    script.innerHTML = fixedScriptCode;

    if (formContainerRef.current) {
      formContainerRef.current.appendChild(script);
    }

    // Очистка
    return () => {
      // ✅ Удаляем скрипт из правильного родителя
      const scriptElement = document.getElementById('bitrix-form-container-partner');
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }

      // ✅ Удаляем стили из head
      const styleElement = document.getElementById('bitrix-form-styles-partner');
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, []);

  return (
    <section className={styles.main}>
      <img className={styles.up_backdrop} src={FormUpBD} alt="" />
      <div className={styles.content_block}>
        <img className={styles.image_backdrop} src={FormBackDrop} alt="" />
        <img className={styles.form_image} src={FormImage} alt="" />
        <div className={styles.left_content}>
          <span className={styles.header}>
            Оставьте контакты и мы <span className={styles.pixel}>свяжемся</span> с Вами
          </span>
          <div className={styles.description}>
            {'Дополнительно обсудим сотрудничество с Вашей организацией и расскажем про условия партнерства'}
          </div>
        </div>
        <div className={styles.wrapper} ref={formContainerRef}>
          <div className={styles.wrapper_overlay}></div>
          <div className={styles.text_task}></div>
        </div>
      </div>
    </section>
  )
}