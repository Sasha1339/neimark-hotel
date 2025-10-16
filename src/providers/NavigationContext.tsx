import {createContext, Dispatch, SetStateAction} from "react";
import {NavigationTab} from "@/shared/types";

export const NavigationContext = createContext<[NavigationTab, Dispatch<SetStateAction<NavigationTab>>]>(['home', () => {}])