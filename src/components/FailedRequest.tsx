import { FC } from "react";

interface Props {
  message?: string;
  code: number;
}

const FailedRequest: FC<Props> = ({ message, code }) => {
  return (
    <div>
      {message ? (
        <div> {message} </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p>There was an error sending the request. </p>
          <p className="italic bold">That`s all we know</p>
          <p className="text-xs">{code}</p>
        </div>
      )}
    </div>
  );
};

export default FailedRequest;
