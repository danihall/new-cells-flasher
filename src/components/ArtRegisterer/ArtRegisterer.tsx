import { FormEvent, useRef } from "react";
import { useStore } from "react-redux";

import {
  IArt,
  addInArtStorage,
  registerArtStorage,
} from "../../helpers/artStorage";
import { RootState } from "../../store/store";

const ArtRegisterer = (): JSX.Element => {
  const store = useStore();
  const dialog_form = useRef<HTMLDialogElement>(null);

  /**
   * event.preventDefault() is not needed, because the form has the attribute [method="dialog"]
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const current_state = store.getState() as RootState;

    const new_art = {
      ...Object.fromEntries(new FormData(event.currentTarget)),
      date: new Date().toLocaleDateString(),
      cells: current_state.cellsState.cells,
    } as IArt;

    addInArtStorage(new_art);
    registerArtStorage();
  };

  return (
    <>
      <button onClick={() => dialog_form.current?.showModal()}>
        Register Art
      </button>

      <dialog id="dialog-form" ref={dialog_form}>
        <form method="dialog" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="type any name for this pixel art"
              required
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              placeholder="type an optional description"
            />
          </div>

          <div>
            <button type="button" onClick={() => dialog_form.current?.close()}>
              Cancel
            </button>
            <button type="submit">Register Art</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ArtRegisterer;
