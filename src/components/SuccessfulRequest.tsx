import { Prediction } from "@/types";
import { FC } from "react";

interface Props {
  data: null | Prediction;
}

const SuccessfulRequest: FC<Props> = ({ data }) => {
  return (
    <div>
      {data && (
        <div className="text-xl">
          <p className="text-center italic font-extrabold">{data.url}</p>
          <p>
            is a{" "}
            {data.is_phising === 0 ? (
              <span className="font-extrabold text-green-500">legitimate</span>
            ) : (
              <span className="font extrabold text-red-500">phising</span>
            )}{" "}
            site
          </p>
          <p>
            It is {data.probability.toFixed(2)}% probable that it is a phising
            site.
          </p>
        </div>
      )}
    </div>
  );
};

export default SuccessfulRequest;
