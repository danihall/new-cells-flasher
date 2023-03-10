import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useSubmit } from "react-router-dom";

import rootCss from "../../index.module.scss";
import { selectCountdown } from "../../store/features/countdownIsReached";
import Button from "../Button/Button";

import css from "./ArtRegisterer.module.scss";

const ArtRegisterer = (): JSX.Element => {
  const countdown_is_reached = useSelector(selectCountdown);
  const [value, setValue] = useState("");
  const submit = useSubmit();

  const dialog_form = useRef<HTMLDialogElement>(null);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const registerArt = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(event.currentTarget);
    dialog_form.current?.close();
  };

  return (
    <>
      <Button
        disabled={!countdown_is_reached}
        onClick={() => dialog_form.current?.showModal()}
      >
        Register Art
      </Button>

      <dialog className={css.dialog} id="dialog-form" ref={dialog_form}>
        <form method="post" onSubmit={registerArt}>
          <div>
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
            </div>

            <div className={rootCss["margin-top"]}>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                placeholder="type an optional description"
              />
            </div>
          </div>

          <div className={rootCss["margin-top"]}>
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
