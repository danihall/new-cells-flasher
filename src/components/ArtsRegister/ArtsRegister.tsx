import { IArt } from "../../helpers/artStorage";
import ArtMainLayout from "../ArtMainLayout/ArtMainLayout";
import { Cells } from "../CellsContainer/CellsContainer";
import Lines from "../Lines/Lines";

import css from "./ArtsRegister.module.scss";

interface IArtsRegisterProps {
  storedArts: Array<IArt>;
}

const ArtsRegister = ({ storedArts }: IArtsRegisterProps): JSX.Element => {
  return (
    <>
      {storedArts.map((art) => {
        const { name, cells, date, description } = art;
        const cells_per_row = Math.sqrt(cells.length);

        return (
          <div className={css["stored-art"]} key={name}>
            <h2>{name}</h2>
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

export default ArtsRegister;
