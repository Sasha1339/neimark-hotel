import styles from './CallbackFormComponent.module.css';
import {useEffect, useLayoutEffect, useRef} from "react";

export const CallbackFormComponent = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    const fixedScriptCode = `(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://workspace.neimark-it.ru/upload/crm/form/loader_36_a2aodk.js');`;

    // Создаем и добавляем стили
    const style = document.createElement('style');
    style.innerHTML = `.b24-form-control-label,.b24-form-control-container { text-align: start !important; }`;
    document.head.appendChild(style);

    // Добавляем скрипт
    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'inline/36/a2aodk');
    script.setAttribute('data-skip-moving', 'true');
    script.id = 'bitrix-form-container';
    script.innerHTML = fixedScriptCode;
    formContainerRef.current?.appendChild(script);

    // Очистка
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.description_section} ref={formContainerRef}>
        <div ref={formContainerRef}></div>
      </div>
    </div>
  );

}