import { useSelector } from "react-redux";
import Activity from "./Activity";

const Interface = () => {
  const apiData = useSelector((state) => state.apiData);

  console.log(apiData);

  const filteredData = apiData.filter((activity) => {
      return activity.name.includes("Ride")
  })

  console.log(filteredData)

  return (
    <>
      <h2>Interface</h2>

      {/* {filteredData.length ? "yes" : "no"} */}
      {filteredData.map((activity, index) => {

        return (
          <>
            <Activity key={index} activity={activity}/>
          </>
        );
      })}
    </>
  );
};

export default Interface;
