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

  const loggedInUser = useSelector((state) => {
    console.log(state);
    return state.session.user;
  });

  // const {spotId}= useParams()
  // const indSpot = userSpots.find(indSpot=>indSpot.id === spotId)

  return (
    <div className="spots">
      <div>
        {loggedInUser && (
          <div>
            <h1>Hey {loggedInUser.username}, let's find some spots!</h1>
            
          </div>
        )}
      </div>
      {userSpots.map((spot) => (
        <div className= "spot-container" key={spot.id}>
          {/* <Link to={`/spots/${spot.id}`}>{spot.name}</Link> */}
          <h3>{spot.name}</h3>
          <p>{spot.description}</p>
          <img className="spot-image" src={spot.imageLink} />
        </div>
      ))}
    </div>
  );
};

export default Spot;

