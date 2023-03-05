import { STORAGE_NAME } from "../constants";
import { IArt, TStoredArts } from "../custom_types/stored-arts";

let storage = localStorage.getItem(STORAGE_NAME);

if (!storage) {
  localStorage.setItem(STORAGE_NAME, "[]");
  storage = localStorage.getItem(STORAGE_NAME);
}

const art_storage_is_available = !!storage;
const art_storage: TStoredArts = storage ? JSON.parse(storage) : null;

const addInArtStorage = (new_art: IArt) => {
  if (art_storage?.find((art) => art.name === new_art.name)) {
    console.error(`There is already an art named ${new_art.name}`);
    return;
  }
  art_storage?.push(new_art);
};

const registerArtStorage = () => {
  try {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(art_storage));
  } catch (reason) {
    console.error(reason);
  }
};

const getStoredArts = () => art_storage;

export {
  art_storage_is_available,
  addInArtStorage,
  registerArtStorage,
  getStoredArts,
};
