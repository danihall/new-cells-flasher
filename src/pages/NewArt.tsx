import { useActionData } from "react-router-dom";

import ArtFooterLayout from "../components/ArtFooterLayout/ArtFooterLayout";
import ArtMainLayout from "../components/ArtMainLayout/ArtMainLayout";
import ArtsRegisterer from "../components/ArtRegisterer/ArtRegisterer";
import ButtonReset from "../components/ButtonReset/ButtonReset";
import CellsController from "../components/CellsController/CellsController";
import InputCellsCount from "../components/InputCellsCount/InputCellsCount";
import Lines from "../components/Lines/Lines";
import Timer from "../components/Timer/Timer";
import Title from "../components/Title/Title";
import ToastMessage from "../components/ToastMessage/ToastMessage";
import { IProcess, art_storage_is_available } from "../helpers/artStorage";

const NewArt = () => {
  const art_added: IProcess = useActionData() as IProcess;

  return (
    <>
      <Title>New Art</Title>

      <ArtMainLayout>
        <CellsController />
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

      {art_added ? (
        <ToastMessage
          type={art_added.ok ? "success" : "error"}
          text={art_added.text}
        />
      ) : null}
    </>
  );
};

export default NewArt;
