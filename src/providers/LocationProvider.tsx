import {FC, PropsWithChildren, useState} from "react";
import {HeaderContext} from "./HeaderContext";
import {HeaderAction} from "../shared/types";
import {LocationContext} from "@/providers/LocationContext";
export const LocationProvider: FC<PropsWithChildren> = ({children}) => {

  const buttonState = useState<string | null>(null)

  return (
    <LocationContext.Provider value={buttonState}>
      {children}
    </LocationContext.Provider>
  )

}