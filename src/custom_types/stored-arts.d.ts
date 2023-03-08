import { TCells } from "./cells";

export interface IArt {
  name: string;
  date: string;
  description?: string;
  cells: TCells;
}

export interface IArtToDelete {
  [entry_name: string]: FormDataEntryValue;
}

export type TStoredArts = Array<IArt>;
