import {createContext, Dispatch, SetStateAction} from "react";
import {HeaderAction} from "../shared/types";

export const LocationContext = createContext<[string | null, Dispatch<SetStateAction<string | null>>]>([null, () => {}])