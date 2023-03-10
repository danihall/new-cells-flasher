import { useLoaderData } from "react-router-dom";

import Paragraph from "../components/Paragraph/Paragraph";
import RegisteredArts from "../components/RegisteredArts/RegisteredArts";
import Title from "../components/Title/Title";
import ToastMessage from "../components/ToastMessage/ToastMessage";
import { TStoredArts } from "../custom_types/stored-arts";

const PreviousArts = (): JSX.Element => {
  const stored_arts: TStoredArts | null = useLoaderData() as TStoredArts | null;

  return (
    <>
      <Title>Previous Arts</Title>
      {stored_arts && stored_arts.length ? (
        <RegisteredArts storedArts={stored_arts} />
      ) : (
        <>
          <Paragraph>There are no stored Arts!</Paragraph>
          <ToastMessage type="success" text="All stored Arts were deleted!" />
        </>
      )}
    </>
  );
};

export default PreviousArts;
