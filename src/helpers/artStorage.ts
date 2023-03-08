import { STORAGE_NAME, LAST_ART_NAME } from "../constants";
import { TCells } from "../custom_types/cells";
import { IArt, IArtToDelete, TStoredArts } from "../custom_types/stored-arts";

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
    console.error(reason);
  }
};

const addInArtStorage = (new_art: IArt) => {
  if (art_storage?.find((art) => art.name === new_art.name)) {
    console.error(`There is already an art named ${new_art.name}`);
    return;
  }

  art_storage?.push(new_art);

  registerArtStorage();
};

const getStoredArts = () => art_storage;

const saveLastArt = (last_art: TCells) => {
  try {
    localStorage.setItem(LAST_ART_NAME, JSON.stringify(last_art));
  } catch (reason) {
    console.error(reason);
  }
};

const getLastArt = (): TCells | null => {
  const last_saved_art = localStorage.getItem(LAST_ART_NAME);
  if (last_saved_art) {
    return JSON.parse(last_saved_art);
  }
  return null;
};

const deleteArt = ({ entry_name }: IArtToDelete) => {
  const art_to_delete_index = art_storage.findIndex(
    (art) => art.name === entry_name
  );

  art_storage.splice(art_to_delete_index, 1);
  registerArtStorage();

  return art_storage;
};

export {
  art_storage_is_available,
  addInArtStorage,
  getStoredArts,
  getLastArt,
  saveLastArt,
  deleteArt,
};
