import { FormEvent } from "react";
import { useActionData, useSubmit } from "react-router-dom";

import { TStoredArts } from "../../custom_types/stored-arts";
import { IProcess } from "../../helpers/artStorage";
import {
  formatDate,
  readable_format,
  datetime_format,
} from "../../helpers/formatDate";
import rootCss from "../../index.module.scss";
import ArtMainLayout from "../ArtMainLayout/ArtMainLayout";
import Button from "../Button/Button";
import { Cells } from "../CellsController/CellsController";
import Lines from "../Lines/Lines";
import Separator from "../Separator/Separator";
import ToastMessage from "../ToastMessage/ToastMessage";

import css from "./RegisteredArts.module.scss";

const RegisteredArts = ({
  storedArts,
}: {
  storedArts: TStoredArts;
}): JSX.Element => {
  const art_deleted: IProcess = useActionData() as IProcess;
  const className = [css["stored-art"], rootCss["margin-top"]].join(" ");
  const submit = useSubmit();

  const deleteArt = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(event.currentTarget);
  };

  return (
    <>
      {storedArts.map((art, index) => {
        const { name, cells, date, description } = art;
        const cells_per_row = Math.sqrt(cells.length);

        return (
          <div className={className} key={name}>
            {index > 0 ? <Separator /> : null}
            <h2>{name}</h2>
            <time dateTime={formatDate(date, datetime_format)}>
              {formatDate(date, readable_format)}
            </time>
            {description ? <p>{description}</p> : null}

            <ArtMainLayout>
              <Cells
                cellsPerRow={cells_per_row}
                forceCellsArray={cells}
                isPlayable={false}
              />
              <Lines shouldAnimate={false} forceCellsPerRow={cells_per_row} />
            </ArtMainLayout>

            <form onSubmit={deleteArt} method="delete">
              {/**
               * Cannot use button value when submitting form because of event.preventDefault().
               * So a <input type="hidden"> is used. A single <input type="submit"> could have been used instead but oh well.
               */}
              <input type="hidden" name="entry_name" value={name} />
              <Button type="submit" name={name}>
                Delete Art
              </Button>
            </form>
          </div>
        );
      })}
      {art_deleted ? (
        <ToastMessage
          type={art_deleted.ok ? "success" : "error"}
          text={art_deleted.text}
        />
      ) : null}
    </>
  );
};

export default RegisteredArts;
