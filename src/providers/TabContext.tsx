import {createContext, Dispatch, SetStateAction} from "react";
import {NavigationTab} from "@/shared/types";

export const TabContext = createContext<[NavigationTab, Dispatch<SetStateAction<NavigationTab>>]>(['home', () => {}])