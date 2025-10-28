import {FC, PropsWithChildren, useState} from "react";
import {HeaderAction, NavigationTab} from "@/shared/types";
import {NavigationContext} from "@/providers/NavigationContext";
import {TabContext} from "@/providers/TabContext";

export const TabProvider: FC<PropsWithChildren> = ({children}) => {

  const navigationState = useState<NavigationTab>('home')

  return (
    <TabContext.Provider value={navigationState}>
      {children}
    </TabContext.Provider>
  )

}