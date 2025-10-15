import {FC} from "react";
import styles from './Tab.module.css';

type Props = {
  active: boolean;
  title: string;
  onClick: (event: MouseEvent) => void;
}

export const Tab: FC<Props> = ({active, title, onClick, ...props}) => {

  return (
    <div className={`${styles.tab} ${active && styles.tab_active}`}>
      { title }
    </div>
  )

}