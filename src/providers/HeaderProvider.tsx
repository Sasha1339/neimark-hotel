import {FC, PropsWithChildren, useState} from "react";
import {HeaderContext} from "./HeaderContext";
import {HeaderAction} from "../shared/types";
export const HeaderProvider: FC<PropsWithChildren> = ({children}) => {

  const buttonState = useState<HeaderAction>('hidden')

  return (
    <HeaderContext.Provider value={buttonState}>
      {children}
    </HeaderContext.Provider>
  )

}