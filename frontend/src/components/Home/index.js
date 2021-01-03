
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allSpots } from "../../store/spots";
import { Link, Route, useParams } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allSpots());
  }, []);
//   const userSpots = useSelector((state) => state.spots);
  const userSpots = useSelector((state) => Array.from(state.spots));
  console.log("USER SPOTS:", userSpots);

  if (!userSpots) return null;
  return (
    <div className="spots">
      <h1>these are SPOTSSSSSSS</h1>
      <div>
        {userSpots.map((spot) => (
          <Link class="spot-container" key={spot.id} to={`/spots/${spot.id}`}>
            {/* <Link to={`/spots/${spot.id}`}>{spot.name}</Link> */}
            <h3>{spot.name}</h3>
            <img className="spot-image" src={spot.imageLink} />
            {/* <p>{spot.description}</p> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
