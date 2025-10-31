import React from "react";
import useFetch from "./UseFetch";

const FetchYogaData = () => {
  const [data] = useFetch("https://api.npoint.io/4459a9a10e43812e1152");
  console.log("data: ", data);

  return (
    <>
      <h1 className="usefetch_heading">Use Fetch Custom Hook</h1>
      <ul className="list_data_main">
        {data &&
          data.map((e) => (
            <>
              <li key={data.index} className="list_data">
                <h3>{e.name}</h3>
                <p>
                  <strong>Benefits: </strong>
                  {e.benefits}
                </p>
                <p>
                  <strong>Time Duration: </strong>
                  {e.time_duration}
                </p>
              </li>
            </>
          ))}
      </ul>
    </>
  );
};

export default FetchYogaData;
