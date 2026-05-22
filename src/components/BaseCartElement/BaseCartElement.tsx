import {FC, PropsWithChildren, ReactNode} from "react";
import BaseCartElementStyles from "./BaseCartElement.module.css";
import TwoBlurGlassStyles from "./TwoBlurGlass.module.css";
import {Icon} from "@components/Icon/Icon";

type Props = {
  background?: { backgroundImage: string } | { background: string }
  className?: string;
  children?: ReactNode;
  image?: ReactNode;
  activeHover?: boolean;
  onClick?: () => void;
}

export const BaseCartElement: FC<Props & PropsWithChildren> = ({children, onClick, activeHover, image, className, background, ...props}) => {

  return (
    <div className={`${BaseCartElementStyles.main} ${(activeHover && BaseCartElementStyles.active_hover) ?? ''}`} onClick={onClick}>
      <div className={BaseCartElementStyles.gradient_overlay} style={{ ...background, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className={BaseCartElementStyles.image_layer}>
        {image}
      </div>
      {children}
    </div>
  )

}

type TwoBlurProps = {
  title?: string;
  description?: string;
  icon?: string;
  theme?: 'dark' | 'light';
  positionUp?: 'start' | 'end' | 'center';
  positionDown?: 'start' | 'end' | 'center';
  justifyContent?: 'space-between' | 'start' | 'end' | 'center';
  maxWidthUp?: number;
  maxWidthDown?: number;
}

export const TwoBlurGlass: FC<TwoBlurProps> = ({title, icon,maxWidthUp = 50, maxWidthDown = 60, justifyContent = 'end', positionUp = 'end', positionDown = 'end', theme = 'dark', description, ...props}) => {

  return (
    <div className={TwoBlurGlassStyles.main} style={{justifyContent}}>
      <div className={TwoBlurGlassStyles.icon_title_rows}>
        {icon && <div className={TwoBlurGlassStyles.up_row} style={{justifyContent: positionUp}}>
          <div className={TwoBlurGlassStyles.glass} style={{
            alignItems: positionUp,
            backgroundColor: theme === 'dark' ? 'var(--main-gray-dark-opacity-50)' : 'var(--text-color-default-opacity-50)'
          }}>
            <Icon name={`${icon}${theme === 'light' ? '_dark' : ''}`} size={190} />
          </div>
        </div>}
        {title && <div className={TwoBlurGlassStyles.up_row} style={{justifyContent: positionUp}}>
          <div className={TwoBlurGlassStyles.glass} style={{
            maxWidth: window.innerWidth < 1300 ? '100%' : `${maxWidthUp}%`,
            alignItems: positionUp,
            backgroundColor: theme === 'dark' ? 'var(--main-gray-dark-opacity-50)' : 'var(--text-color-default-opacity-50)'
          }}>
          <span className={TwoBlurGlassStyles.title} style={{
            textAlign: positionUp,
            color: theme === 'dark' ? 'var(--text-color-default)' : 'var(--main-gray-dark-second)'
          }}>{title}</span>
            {/*<Icon name={`${icon}${theme === 'light' ? '_dark' : ''}`} size={190} />*/}
          </div>
        </div>}
      </div>
      {description && <div className={TwoBlurGlassStyles.down_row} style={{justifyContent: positionDown}}>
        <div className={TwoBlurGlassStyles.glass} style={{
          maxWidth: window.innerWidth < 1300 ? '100%' : `${maxWidthDown}%`,
          backgroundColor: theme === 'dark' ? 'var(--main-gray-dark-opacity-50)' : 'var(--text-color-default-opacity-50)'
        }}>
          <span className={TwoBlurGlassStyles.description} style={{
            textAlign: positionDown,
            color: theme === 'dark' ? 'var(--text-color-active)' : 'var(--main-gray-dark)'
          }}>
            {description}
          </span>
        </div>
      </div>}
    </div>
  )

}