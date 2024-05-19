import { Prediction } from "@/types";
import { FC } from "react";

interface Props {
  data: null | Prediction;
}

const SuccessfulRequest: FC<Props> = ({ data }) => {
  return (
    <div>
      {data && (
        <div>
          <p>Our model has determined that</p>
          <p>{data.url}</p>
          <p>is a {data.is_phising === 0 ? "legitimate" : "phising"} site</p>
          <p>It is {data.probability.toFixed(3)}% probable that is a phising site.</p>
        </div>
      )}
    </div>
  );
};

export default SuccessfulRequest;
