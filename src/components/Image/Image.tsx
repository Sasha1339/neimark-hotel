import {FC, ForwardedRef, forwardRef} from "react";

type ImageProps = {
  className?: string;
  icon: string
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(({className, icon, ...props}, ref) => {

  return (
    <img ref={ref} className={className} src={`/svg/${icon}.svg`} alt="SVG icon" />
  )
})