import { Imprimivel } from "../utils/imprimivel";
import { IComparavel } from "./comparavel";

export interface IModelo<T> extends Imprimivel, IComparavel<T> {};