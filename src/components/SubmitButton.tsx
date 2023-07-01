import { FC } from "react";
import Spinner from "./Spinner";

interface Props {
  onClick: () => {};
  disabled: boolean;
  loading: boolean;
  success: boolean;
  fail: boolean;
}

const SubmitButton: FC<Props> = ({
  onClick,
  disabled,
  success,
  fail,
  loading,
}) => {
  const buttonLabel = success
    ? "Message sent successfully"
    : fail
    ? "Message failed to be sent"
    : "Send message";
  return (
    <>
      {!loading ? (
        <button
          disabled={disabled}
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
