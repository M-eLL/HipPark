import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { spot } from "../../store/spot";
import { Link, Route, useParams } from "react-router-dom";

const Spot = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();

  useEffect(() => {
    dispatch(spot());
  }, []);

  const userSpots = [
    useSelector((state) =>
      state.spot.find((ele) => {
        return ele.id == spotId;
      })
    ),
  ];
  // inefficient - should be using a single resource route
  console.log(userSpots);

  const loggedInUser = useSelector((state) => {
    console.log(state);
    return state.session.user;
  });

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
        // <div className= "spot-container" key={spot.id}>
        //   {/* <Link to={`/spots/${spot.id}`}>{spot.name}</Link> */}
        //   <h3>{spot.name}</h3>
        //   <p>{spot.description}</p>
        //   <img className="spot-image" src={spot.imageLink} />
        // </div>
        <Link to={`/spots/${spot.id}`}>
          <div className="spot-container" key={spot.id}>
            <h2>{spot.name}</h2>
            <p>{spot.description}</p>
            <img className="spot-image" src={spot.imageLink} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Spot;
