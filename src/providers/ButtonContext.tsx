import {createContext, Dispatch, SetStateAction} from "react";
import {ButtonAction} from "../shared/types";

export const ButtonContext = createContext<[ButtonAction, Dispatch<SetStateAction<ButtonAction>>]>(['hidden', () => {}])