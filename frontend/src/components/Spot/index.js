import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { spot } from "../../store/spot";
import { Link, useParams } from "react-router-dom";

const Spot = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();

  useEffect(() => {
    dispatch(spot());
  }, [dispatch]);

  const userSpots = useSelector((state) => state.spot.userSpots);

  const loggedInUser = useSelector((state) => {
    console.log(state);
    return state.session.user;
  });

  // useSelector((state) =>
  //   state.spot.find((ele) => {
  //     return ele.id == spotId;
  //   })
  // ),

  // inefficient - should be using a single resource route

  return (
    <div className="spots">
      <div>
        {loggedInUser && (
          <div>
            <h1>Hey {loggedInUser.username}, let's find some spots!</h1>
            {userSpots && (
              <div>
                <h3>{userSpots[spotId].name}</h3>
              </div>
            )}
          </div>
        )}
      </div>
      {/* until userspots exists, dont render */}
      {/* {userSpots && (
        <div>
          <h3>{userSpots[spotId].name}</h3>
        </div>
      )} */}
      {/* {userSpots &&
        userSpots.map((spot) => (
          <Link to={`/spots/${spot.id}`}>
            <div className="spot-container" key={spot.id}>
              <h2>{spot.name}</h2>
              <p>{spot.description}</p>
              <img className="spot-image" src={spot.imageLink} />
            </div>
          </Link>
        ))} */}
    </div>
  );
};

export default Spot;
