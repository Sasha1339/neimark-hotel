import {createContext, Dispatch, SetStateAction} from "react";
import {HeaderAction} from "../shared/types";

export const HeaderContext = createContext<[HeaderAction, Dispatch<SetStateAction<HeaderAction>>]>(['hidden', () => {}])