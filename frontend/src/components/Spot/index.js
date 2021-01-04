import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { oneSpot } from "../../store/spots";
import { Link, useParams } from "react-router-dom";

const Spots = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();

  useEffect(() => {
    dispatch(oneSpot());
  }, [dispatch]);

  const userSpots = useSelector((state) => state.spots.userSpots);

  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  return (
    <div className="spots">
      <div>
        {userSpots && (
          <div>
            <h1>More information about {userSpots[spotId].name}:</h1>
            {userSpots && (
              <>
                <div>
                  <p>{userSpots[spotId].description}</p>
                </div>
                <div class="spot-container">
                  <img
                    className="spot-image"
                    src={userSpots[spotId].imageLink}
                  />
                  <h3>${userSpots[spotId].price}/day</h3>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Spots;
