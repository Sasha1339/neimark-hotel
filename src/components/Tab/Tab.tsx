import {FC, SyntheticEvent} from "react";
import styles from './Tab.module.css';
import {isMobile} from 'react-device-detect';

type Props = {
  active: boolean;
  title: string;
  onClick?: (event: SyntheticEvent) => void;
}

export const Tab: FC<Props> = ({active, title, onClick, ...props}) => {

  return (
    <div className={`${styles.tab} ${active && styles.tab_active}`} onClick={onClick}>
      { title }
    </div>
  )

}