import {type FC, useContext, useEffect, useState} from "react";

type Props = {
  className?: string;
  size?: number;
  rotate?: number;
  name: string
}

export const Icon: FC<Props> = ({className, name, rotate = 0, size = 27, ...props}) => {


  return (
    <img className={className} style={{transform: `rotate(${rotate}deg)`}} width={size + 'px'} height={size + 'px'} src={`/svg/${name}.svg`} alt={'?'}/>
  )

}