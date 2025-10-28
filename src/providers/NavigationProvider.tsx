import {FC, PropsWithChildren, useState} from "react";
import {HeaderAction, NavigationTab} from "@/shared/types";
import {NavigationContext} from "@/providers/NavigationContext";

export const NavigationProvider: FC<PropsWithChildren> = ({children}) => {

  const navigationState = useState<NavigationTab>('home')

  return (
    <NavigationContext.Provider value={navigationState}>
      {children}
    </NavigationContext.Provider>
  )

}