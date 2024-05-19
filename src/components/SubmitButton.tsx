import { FC } from "react";
import Spinner from "./Spinner";

interface Props {
  onClick: () => {};
  loading: boolean;
}

const SubmitButton: FC<Props> = ({
  onClick,
  loading,
}) => {
  const buttonLabel = "Verify"
  return (
    <>
      {!loading ? (
        <button
          disabled={loading}
          onClick={onClick}
          className="bg-blue-600 hover:bg-blue-500 text-2xl p-1 border-1 rounded-sm disabled:cursor-not-allowed disabled:bg-blue-600"
        >
          {buttonLabel}
        </button>
      ) : (
        <button className="bg-blue-600 p-1 flex flex-col items-center" disabled>
          <Spinner />
        </button>
      )}
    </>
  );
};

export default SubmitButton;
