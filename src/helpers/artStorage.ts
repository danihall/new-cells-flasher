import { STORAGE_NAME, LAST_ART_NAME } from "../constants";
import { TCells } from "../custom_types/cells";
import { IArt, IArtToDelete, TStoredArts } from "../custom_types/stored-arts";

export interface IProcess {
  ok: boolean;
  text: string;
}

let storage = localStorage.getItem(STORAGE_NAME);

if (!storage) {
  localStorage.setItem(STORAGE_NAME, "[]");
  storage = localStorage.getItem(STORAGE_NAME);
}

const art_storage_is_available = !!storage;
const art_storage: TStoredArts = storage ? JSON.parse(storage) : null;

const registerArtStorage = () => {
  try {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(art_storage));
  } catch (reason) {
    return reason;
  }
};

/**
 * Promise is used to streamline aggregation of Object returned when an error occurs.
 * Technically, there is absolutely no need in the context of the project
 * to use an async method to deal with registering persistent memory,
 * but it's still more practical.
 */
const addInArtStorage = (new_art: IArt): Promise<IProcess> => {
  return new Promise<IProcess>((resolve, reject) => {
    if (art_storage && art_storage.find((art) => art.name === new_art.name)) {
      return reject(`There is already an art named "${new_art.name}"!`);
    }

    if (new_art.cells.every((cell) => !cell)) {
      return reject(`Every cells in "${new_art.name}" are empty!`);
    }

    art_storage.push(new_art);
    registerArtStorage();
    resolve({
      ok: true,
      text: `"${new_art.name}" wa successfully registered.`,
    });
  }).catch((reason) => ({ ok: false, text: reason.toString() }));
};

const saveLastArt = (last_art: TCells): IProcess => {
  try {
    localStorage.setItem(LAST_ART_NAME, JSON.stringify(last_art));
  } catch (reason) {
    return { ok: false, text: reason as string };
  }

  return { ok: true, text: "Art state saved in memory." };
};

const deleteArt = ({ entry_name }: IArtToDelete): Promise<IProcess> => {
  return new Promise<IProcess>((resolve) => {
    const art_to_delete_index = art_storage.findIndex(
      (art) => art.name === entry_name
    );

    art_storage.splice(art_to_delete_index, 1);
    registerArtStorage();
    resolve({ ok: true, text: `"${entry_name}" was deleted.` });
  }).catch((reason) => ({ ok: false, text: reason.toString() }));
};

const getStoredArts = () => art_storage;
const getLastArt = (): TCells | null => {
  const last_saved_art = localStorage.getItem(LAST_ART_NAME);
  if (last_saved_art) {
    return JSON.parse(last_saved_art);
  }
  return null;
};

export {
  art_storage_is_available,
  addInArtStorage,
  getStoredArts,
  getLastArt,
  saveLastArt,
  deleteArt,
};
