import { IArt } from "../../custom_types/stored-arts";
import {
  formatDate,
  readable_format,
  datetime_format,
} from "../../helpers/formatDate";
import ArtMainLayout from "../ArtMainLayout/ArtMainLayout";
import { Cells } from "../CellsContainer/CellsContainer";
import Lines from "../Lines/Lines";

import css from "./RegisteredArts.module.scss";

interface IRegisteredArtsProps {
  storedArts: Array<IArt>;
}

const RegisteredArts = ({ storedArts }: IRegisteredArtsProps): JSX.Element => {
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
              <Cells cellsPerRow={cells_per_row} cellsArray={cells} />
              <Lines shouldAnimate={false} forceCellsPerRow={cells_per_row} />
            </ArtMainLayout>
          </div>
        );
      })}
    </>
  );
};

export default RegisteredArts;
