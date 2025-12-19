import styles from './AboutElementComponent.module.css';
import {FC} from "react";
import {Icon} from "@components/Icon/Icon";

type Props = {
  description?: string;
  title: string;
  icon?: string;
  className?: string;
  sizeIcon?: number;
  showDownload?: boolean;
  onClick?: () => void;
  animateText?: boolean;
}

export const AboutElementComponent: FC<Props> = ({title, onClick, showDownload = false, animateText = false, icon, className, sizeIcon = window.innerWidth < 700 ? 70 : 90, description, ...props}) => {




  return (
    <div className={`${styles.main} ${className}`} onClick={onClick}>
      <div className={styles.gradient_overlay}></div>
      <div className={styles.description}>
        {icon && <Icon name={icon} size={sizeIcon}/>}
        <div className={`${styles.title} ${animateText && styles.animated_text}`}>{title}</div>
        {description && <div className={styles.description_text}>{description}</div>}
        {showDownload && <div className={styles.download}>Скачать</div>}
      </div>
    </div>
  )

}