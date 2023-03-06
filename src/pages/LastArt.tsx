import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";

import ArtFooterLayout from "../components/ArtFooterLayout/ArtFooterLayout";
import ArtMainLayout from "../components/ArtMainLayout/ArtMainLayout";
import ArtRegisterer from "../components/ArtRegisterer/ArtRegisterer";
import ButtonReset from "../components/ButtonReset/ButtonReset";
import { Cells } from "../components/CellsController/CellsController";
import Lines from "../components/Lines/Lines";
import Timer from "../components/Timer/Timer";
import { TCells } from "../custom_types/cells";
import { art_storage_is_available } from "../helpers/artStorage";
import { setCountdownReached } from "../store/features/countdownIsReached";
import { drawingIsDone } from "../store/features/linesAreDrawn";
import { setNewRoundInProgress } from "../store/features/newRoundInProgress";

const LastArt = (): JSX.Element => {
  const last_art: TCells | null = useLoaderData() as TCells | null;

  if (last_art) {
    const dispatch = useDispatch();
    const cells_per_row = last_art ? Math.sqrt(last_art.length) : 0;

    useEffect(() => {
      dispatch(setNewRoundInProgress());
      dispatch(setCountdownReached(false));
      dispatch(drawingIsDone(true));
    }, []);

    return (
      <>
        <ArtMainLayout>
          <Cells cellsPerRow={cells_per_row} forceCellsArray={last_art} />
          <Lines shouldAnimate={false} forceCellsPerRow={cells_per_row} />
        </ArtMainLayout>

        <ArtFooterLayout>
          <Timer />
          <div>
            <ButtonReset resetAllCells={false} />
            {art_storage_is_available ? <ArtRegisterer /> : null}
          </div>
        </ArtFooterLayout>
      </>
    );
  }

  return <p>There are no last art saved!</p>;
};

export default LastArt;
