import { useLoaderData } from "react-router-dom";

import RegisteredArts from "../components/RegisteredArts/RegisteredArts";
import { TStoredArts } from "../custom_types/stored-arts";

const PreviousArts = (): JSX.Element => {
  const storedArts: TStoredArts = useLoaderData() as TStoredArts;

  return (
    <>
      <h1>previous game</h1>
      {storedArts && storedArts.length ? (
        <RegisteredArts storedArts={storedArts} />
      ) : (
        <p>There are no stored Arts!</p>
      )}
    </>
  );
};

export default PreviousArts;
