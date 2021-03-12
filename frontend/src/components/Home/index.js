import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allSpots } from "../../store/spots";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allSpots());
  }, []);

  const userSpots = useSelector((state) => Array.from(state.spots));
  console.log("USER SPOTS:", userSpots);

  if (!userSpots) return null;
  return (
    <div className="spots">
      <div id="homepage-header">
        <h1>Welcome to HipPark!</h1>
        <div id="sub-header">
          <p>Discover parking to suit your lifestyle</p>
        </div>
      </div>
      <div>
        {userSpots.map((spot) => (
          <Link
            className="spot-container"
            key={spot.id}
            to={`/spots/${spot.id}`}
          >
            <h3>{spot.name}</h3>
            <img className="spot-image" src={spot.imageLink} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
