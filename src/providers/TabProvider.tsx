import {FC, PropsWithChildren, useEffect, useState} from "react";
import {HeaderAction, NavigationTab} from "@/shared/types";
import {NavigationContext} from "@/providers/NavigationContext";
import {TabContext} from "@/providers/TabContext";
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";

export const TabProvider: FC<PropsWithChildren> = ({children}) => {

  const navigationState = useState<NavigationTab>('home')

  const [searchParams, _] = useSearchParams();


  useEffect(() => {
    if (searchParams.get('excursion')) {
      navigationState[1]('excursion');
    }
  }, []);


  return (
    <TabContext.Provider value={navigationState}>
      {children}
    </TabContext.Provider>
  )

}