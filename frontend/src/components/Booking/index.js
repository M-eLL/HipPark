import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { oneSpot } from "../../store/spots";
import { bookings } from "../../store/bookings";
import { Link, Route, useParams } from "react-router-dom";

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
  console.log(userBookings);

  return (
    <div className="bookings">
      <div>
        {loggedInUser && (
          <div>
            <h3>Hey {loggedInUser.username}, here are your bookings!</h3>
            {userBookings.map((booking) => (
              <div className="user-bookings" key={booking.id}>
                <Link to={`/spots/${booking.spotId}`}>
                  {booking.Spot && <h1>{booking.Spot.Location.city}</h1>}
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
