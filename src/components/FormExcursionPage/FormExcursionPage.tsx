import {FC, RefObject, useContext, useEffect, useLayoutEffect, useRef} from "react";
import styles from "./FormExcursionPage.module.css";
import FormBackDrop from "@/assets/svg/form-backdrop.svg";
import FormImage from "@/assets/svg/form-image.svg";
import FormUpBD from "@/assets/svg/form_up_backdrop.svg";
import FormDownBD from "@/assets/svg/form_down_backdrop.svg";
import "./FormExcursionPage.css";

type Props = {}

export const FormExcursionPage: FC<Props> = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null); // ✅ Сохраняем ссылку на скрипт
  const styleRef = useRef<HTMLStyleElement | null>(null); // ✅ Сохраняем ссылку на стили

  useLayoutEffect(() => {
    const fixedScriptCode = `(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b35762378/crm/form/loader_13.js');`;

    // Создаем и добавляем стили
    const style = document.createElement('style');
    style.innerHTML = `.b24-form-control-label,.b24-form-control-container { text-align: start !important; }`;
    document.head.appendChild(style);
    styleRef.current = style; // ✅ Сохраняем ссылку

    // Добавляем скрипт
    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'inline/13/kkm6f6');
    script.setAttribute('data-skip-moving', 'true');
    script.id = 'bitrix-form-container';
    script.innerHTML = fixedScriptCode;

    if (formContainerRef.current) {
      formContainerRef.current.appendChild(script);
      scriptRef.current = script; // ✅ Сохраняем ссылку
    }

    // Очистка
    return () => {
      // ✅ Удаляем скрипт из правильного родителя
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
        scriptRef.current = null;
      }

      // ✅ Удаляем стили из head
      if (styleRef.current && styleRef.current.parentNode) {
        styleRef.current.parentNode.removeChild(styleRef.current);
        styleRef.current = null;
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
            Запишитесь на <span className={styles.pixel}>экскурсию</span> в гостиницу
          </span>
          <div className={styles.description}>
            {'Если есть вопросы мы перезвоним\n и все расскажем'}
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