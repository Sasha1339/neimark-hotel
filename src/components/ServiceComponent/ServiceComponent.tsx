import {FC, RefObject, useEffect, useRef} from "react";
import styles from "./ServiceComponent.module.css";
import {ReactComponent as Neimark} from "@/assets/svg/logo.svg";
import {gsap} from "gsap";
import {
  animationMes1, animationMes10,
  animationMes11,
  animationMes12,
  animationMes2, animationMes3, animationMes4, animationMes5, animationMes6, animationMes7, animationMes8, animationMes9
} from "@components/ServiceComponent/animation-chat";
import {Button} from "@components/Button/Button";

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const ServiceComponent: FC<Props> = ({scrollerRef, ...props}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const mesBot1Ref = useRef<HTMLDivElement>(null);
  const mesBot2Ref = useRef<HTMLDivElement>(null);
  const mesBot3Ref = useRef<HTMLDivElement>(null);
  const mesBot4Ref = useRef<HTMLDivElement>(null);
  const mesBot5Ref = useRef<HTMLDivElement>(null);
  const mesBot6Ref = useRef<HTMLDivElement>(null);
  const mesBot7Ref = useRef<HTMLDivElement>(null);
  const mesBot8Ref = useRef<HTMLDivElement>(null);
  const mesBot9Ref = useRef<HTMLDivElement>(null);
  const mesBot10Ref = useRef<HTMLDivElement>(null);
  const mesBot11Ref = useRef<HTMLDivElement>(null);
  const mesBot12Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {


    gsap.to(mesBot1Ref.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 30%",
        once: true
      },
      onStart: () => {
        animationMes1(mesBot1Ref).play();
        animationMes2(mesBot2Ref).play();
        animationMes3(mesBot3Ref).play();
        animationMes4(mesBot4Ref).play();
        animationMes5(mesBot5Ref).play();
        animationMes6(mesBot6Ref).play();
        animationMes7(mesBot7Ref).play();
        animationMes8(mesBot8Ref).play();
        animationMes9(mesBot9Ref).play();
        animationMes10(mesBot10Ref).play();
        animationMes11(mesBot11Ref).play();
        animationMes12(mesBot12Ref).play();
      }
    });
  }, [scrollerRef]);


  return (
    <section ref={triggerRef} className={styles.main}>
      <div className={styles.background_services}></div>
      <div className={`${styles.logo_wrapper} ${window.innerWidth < 700 && styles.logo_wrapper_mobile}`}>
        <Neimark className={styles.logo}/>
      </div>
      <div className={`${styles.button_wrapper} ${window.innerWidth < 700 && styles.button_wrapper_mobile}`}>
        <Button active={true} className={styles.button_effect} title={'Забронируй номер уже сейчас!'} onClick={() => {}} />
      </div>
      <div className={`${styles.content} ${window.innerWidth < 700 && styles.content_mobile}`}>
        <div ref={mesBot1Ref} className={`${styles.chat_block_left} ${window.innerWidth < 700 && styles.chat_block_left_mobile}`}>Регулярный клининг номеров
        </div>
        <div ref={mesBot2Ref} className={`${styles.chat_block_left} ${window.innerWidth < 700 && styles.chat_block_left_mobile}`}>Консьерж сервис
        </div>
        <div ref={mesBot3Ref} className={`${styles.chat_block_left} ${window.innerWidth < 700 && styles.chat_block_left_mobile}`}>Аренда оборудования
        </div>
        <div ref={mesBot4Ref} className={`${styles.chat_block_left} ${window.innerWidth < 700 && styles.chat_block_left_mobile}`}>Онлайн регистрация гостевого пропуска
        </div>
        <div ref={mesBot5Ref} className={`${styles.chat_block_left} ${window.innerWidth < 700 && styles.chat_block_left_mobile}`}>Аренда помещений
        </div>
        <div ref={mesBot6Ref} className={`${styles.chat_block_left} ${window.innerWidth < 700 && styles.chat_block_left_mobile}`}>
          Система мобильного доступа
        </div>
        <div ref={mesBot7Ref} className={`${styles.chat_block_left} ${window.innerWidth < 700 && styles.chat_block_left_mobile}`}>
          Онлайн оплата услуг
        </div>
        <div ref={mesBot8Ref} className={`${styles.chat_block_left} ${window.innerWidth < 700 && styles.chat_block_left_mobile}`}>
          Свободное пользование гостинной
        </div>
        <div ref={mesBot9Ref} className={`${styles.chat_block_left} ${window.innerWidth < 700 && styles.chat_block_left_mobile}`}>
          Комфортные бытовые условия
        </div>
        <div ref={mesBot10Ref} className={`${styles.chat_block_left} ${window.innerWidth < 700 && styles.chat_block_left_mobile}`}>
          Шаговая доступность маркетплейсов
        </div>
        <div ref={mesBot11Ref} className={`${styles.chat_block_left} ${window.innerWidth < 700 && styles.chat_block_left_mobile}`}>
          Кофейни на территории гостиницы
        </div>
        <div ref={mesBot12Ref} className={`${styles.chat_block_left} ${window.innerWidth < 700 && styles.chat_block_left_mobile}`}>
          И не только...
        </div>
      </div>
    </section>
  )
}