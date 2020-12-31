import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { spot } from "../../store/spot";
import { Link, Route, useParams } from "react-router-dom";

const Spot = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(spot());
  }, []);
  const userSpots = useSelector((state) => state.spot);
  console.log(userSpots);

  // const {spotId}= useParams()
  // const indSpot = userSpots.find(indSpot=>indSpot.id === spotId)

  return (
    <div className="spots">
      <h1>SPOTSSSSSSS</h1>
      <div>
        {userSpots.map((spot) => (
          <div key={spot.id}>
            {/* <Link to={`/spots/${spot.id}`}>{spot.name}</Link> */}
            <h3>{spot.name}</h3>
            <img className="spot-image" src={spot.imageLink} />
            <p>{spot.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spot;
