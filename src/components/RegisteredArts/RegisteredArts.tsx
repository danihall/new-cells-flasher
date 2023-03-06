import { MouseEvent } from "react";

import { TStoredArts } from "../../custom_types/stored-arts";
import {
  formatDate,
  readable_format,
  datetime_format,
} from "../../helpers/formatDate";
import ArtMainLayout from "../ArtMainLayout/ArtMainLayout";
import Button from "../Button/Button";
import { Cells } from "../CellsController/CellsController";
import Lines from "../Lines/Lines";

import css from "./RegisteredArts.module.scss";

const RegisteredArts = ({
  storedArts,
}: {
  storedArts: TStoredArts;
}): JSX.Element => {
  const deleteArt = (event: MouseEvent<HTMLButtonElement>) => {
    console.log((event.target as HTMLButtonElement).name, event.type);
  };

  return (
    <>
      {storedArts.map((art) => {
        const { name, cells, date, description } = art;
        const cells_per_row = Math.sqrt(cells.length);

        return (
          <div className={css["stored-art"]} key={name}>
            <h2>{name}</h2>
            <time dateTime={formatDate(date, datetime_format)}>
              {formatDate(date, readable_format)}
            </time>
            {description ? <p>{description}</p> : null}

            <ArtMainLayout>
              <Cells cellsPerRow={cells_per_row} forceCellsArray={cells} />
              <Lines shouldAnimate={false} forceCellsPerRow={cells_per_row} />
            </ArtMainLayout>

            <Button onClick={deleteArt} name={name}>
              Delete Art
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default RegisteredArts;
