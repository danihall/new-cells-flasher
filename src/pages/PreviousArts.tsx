import { useLoaderData } from "react-router-dom";

import RegisteredArts from "../components/RegisteredArts/RegisteredArts";
import { IArt } from "../helpers/artStorage";

const PreviousArts = (): JSX.Element => {
  const storedArts: Array<IArt> | null = useLoaderData() as Array<IArt> | null;

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
