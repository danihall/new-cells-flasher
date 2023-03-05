import ArtFooterLayout from "../components/ArtFooterLayout/ArtFooterLayout";
import ArtMainLayout from "../components/ArtMainLayout/ArtMainLayout";
import ArtsRegisterer from "../components/ArtRegisterer/ArtRegisterer";
import ButtonReset from "../components/ButtonReset/ButtonReset";
import CellsContainer from "../components/CellsContainer/CellsContainer";
import InputCellsCount from "../components/InputCellsCount/InputCellsCount";
import Lines from "../components/Lines/Lines";
import Timer from "../components/Timer/Timer";
import { art_storage_is_available } from "../helpers/artStorage";

const NewArt = () => {
  return (
    <>
      <ArtMainLayout>
        <CellsContainer />
        <Lines />
      </ArtMainLayout>

      <ArtFooterLayout>
        <InputCellsCount />
        <Timer />
        <div>
          <ButtonReset />
          {art_storage_is_available ? <ArtsRegisterer /> : null}
        </div>
      </ArtFooterLayout>
    </>
  );
};

export default NewArt;
