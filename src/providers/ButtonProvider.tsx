import {FC, PropsWithChildren, useState} from "react";
import {ButtonContext} from "./ButtonContext";
import {ButtonAction} from "../shared/types";
export const ButtonProvider: FC<PropsWithChildren> = ({children}) => {

  const buttonState = useState<ButtonAction>('hidden')

  return (
    <ButtonContext.Provider value={buttonState}>
      {children}
    </ButtonContext.Provider>
  )

}