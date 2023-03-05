import { TCells } from "./cells";

export interface IArt {
  name: string;
  date: string;
  description?: string;
  cells: TCells;
}

export type TStoredArts = Array<IArt> | null;
