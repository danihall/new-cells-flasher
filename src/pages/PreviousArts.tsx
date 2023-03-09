import { useLoaderData } from "react-router-dom";

import RegisteredArts from "../components/RegisteredArts/RegisteredArts";
import ToastMessage from "../components/ToastMessage/ToastMessage";
import { TStoredArts } from "../custom_types/stored-arts";

const PreviousArts = (): JSX.Element => {
  const stored_arts: TStoredArts | null = useLoaderData() as TStoredArts | null;

  return (
    <>
      <h1>previous arts</h1>
      {stored_arts && stored_arts.length ? (
        <RegisteredArts storedArts={stored_arts} />
      ) : (
        <>
          <p>There are no stored Arts!</p>
          <ToastMessage type="success" text="All stored Arts were deleted!" />
        </>
      )}
    </>
  );
};

export default PreviousArts;
