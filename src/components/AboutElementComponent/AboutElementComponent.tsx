import styles from './AboutElementComponent.module.css';
import {FC} from "react";
import {Icon} from "@components/Icon/Icon";

type Props = {
  description?: string;
  title?: string;
  icon?: string;
  className?: string;
  sizeIcon?: number;
  showDownload?: boolean;
  onClick?: () => void;
  animateText?: boolean;
  animateTextDescription?: boolean;
  optionDescriptions?: string[];
}

export const AboutElementComponent: FC<Props> = ({title, optionDescriptions, onClick, showDownload = false, animateText = false, icon, className, sizeIcon = window.innerWidth < 700 ? 70 : 90, description, animateTextDescription, ...props}) => {

  return (
    <div className={`${styles.main} ${className}`} onClick={onClick}>
      <div className={styles.gradient_overlay}></div>
      <div id="AboutElementComponent_description" className={styles.description}>
        {icon && <Icon name={icon} size={sizeIcon}/>}
        {title && <div id="AboutElementComponent_title" className={`${styles.title} ${animateText && styles.animated_text}`}>{title}</div>}
        {description && <div id="AboutElementComponent_description_text" className={`${styles.description_text} ${animateTextDescription && styles.animated_text}`}>{description}</div>}
        {showDownload && <div className={styles.download}>Скачать</div>}
        {optionDescriptions && optionDescriptions.length > 0 && <ul id="AboutElementComponent_list" className={styles.list}>
          {optionDescriptions.map(e => (
            <li>{e}</li>
          ))}
        </ul>}
      </div>
    </div>
  )

}