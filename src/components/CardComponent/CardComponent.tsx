import styles from "./CardComponent.module.css";
import {FC} from "react";
import {Icon} from "@components/Icon/Icon";
import {useMediaQuery} from "@/hooks/useMobileVersion";

type Props = {
  icon: string,
  title: string,
  description: string,
}

export const CardComponent: FC<Props> = ({icon, title, description, ...props}) => {

  const { matches: isTablet } = useMediaQuery('(width <= 1600px)');
  const { matches: isMobile } = useMediaQuery('(width <= 768px)');

  const getSize = () => isMobile ? 40 : isTablet ? 55 : 74

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Icon name={icon} size={getSize()}/>
        <div className={styles.header_text}>{title}</div>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  )

}