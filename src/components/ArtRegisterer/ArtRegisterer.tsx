import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import { useStore, useSelector } from "react-redux";

import { IArt } from "../../custom_types/stored-arts";
import { addInArtStorage, registerArtStorage } from "../../helpers/artStorage";
import { selectCountdown } from "../../store/features/countdownIsReached";
import { RootState } from "../../store/store";
import Button from "../Button/Button";

const ArtRegisterer = (): JSX.Element => {
  const countdown_is_reached = useSelector(selectCountdown);
  const [value, setValue] = useState("");
  const store = useStore();

  const dialog_form = useRef<HTMLDialogElement>(null);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  /**
   * event.preventDefault() is not needed, because the form has the attribute [method="dialog"]
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
   */
  const registerArt = (event: FormEvent<HTMLFormElement>) => {
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
      <Button
        disabled={!countdown_is_reached}
        onClick={() => dialog_form.current?.showModal()}
      >
        Register Art
      </Button>

      <dialog id="dialog-form" ref={dialog_form}>
        <form method="dialog" onSubmit={registerArt}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="type any name for this pixel art"
              value={value}
              onChange={handleChange}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              placeholder="type an optional description"
            />
          </div>

          <div>
            <Button type="button" onClick={() => dialog_form.current?.close()}>
              Cancel
            </Button>
            <Button type="submit">Validate Art</Button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ArtRegisterer;
