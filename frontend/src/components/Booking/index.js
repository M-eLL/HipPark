import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { oneSpot } from "../../store/spots";
import { bookings } from "../../store/bookings";
import { Link } from "react-router-dom";

const Booking = () => {
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  useEffect(() => {
    dispatch(oneSpot());
    dispatch(bookings(1));
  }, [dispatch]);

  const userBookings = useSelector((state) => state.bookings);
  useEffect(() => {}, [userBookings]);

  return (
    <div>
      <div>
        {loggedInUser && (
          <div>
            <h1>Hey {loggedInUser.username}, here are your bookings!</h1>
            {userBookings.map((booking) => (
              <div className="spots" key={booking.id}>
                <Link class="spot-container" to={`/spots/${booking.spotId}`}>
                  {booking.Spot && (
                    <div>
                      <h3>{booking.Spot.name}</h3>
                      <h3>
                        - {booking.Spot.Location.city},{" "}
                        {booking.Spot.Location.state}
                      </h3>
                      <img
                        className="spot-image"
                        src={booking.Spot.imageLink}
                      />
                      {booking.startDate} - {booking.endDate}
                      <div className="nickname">
                        {booking.nickname && <p>{booking.nickname}</p>}
                      </div>
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
