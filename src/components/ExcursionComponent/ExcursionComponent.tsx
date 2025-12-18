import styles from './ExcursionComponent.module.css';
import {useEffect, useLayoutEffect, useRef} from "react";

export const ExcursionComponent = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    const fixedScriptCode = `(function(w,d,u){
      var s=d.createElement('script');
      s.async=true;
      s.src=u+'?'+(Date.now()/180000|0);
      var h=d.getElementById('bitrix-form-container');
      h.parentNode.insertBefore(s,h);
    })(window,document,'https://cdn-ru.bitrix24.ru/b28923876/crm/form/loader_149.js');`;

    // Создаем и добавляем стили
    const style = document.createElement('style');
    style.innerHTML = `.b24-form-control-label,.b24-form-control-container { text-align: start !important; }`;
    document.head.appendChild(style);



    // Добавляем скрипт
    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'inline/149/p7q2aq');
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