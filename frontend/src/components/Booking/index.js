import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { oneSpot } from "../../store/spots";
import { bookings } from "../../store/bookings";
import { Link, Route, useParams } from "react-router-dom";

const Booking = () => {
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => {
    console.log(state);
    return state.session.user;
  });

  useEffect(() => {
    dispatch(oneSpot());
    dispatch(bookings(1));
  }, [dispatch]);
  const userBookings = useSelector((state) => state.bookings);
  // console.log(userBookings);

  return (
    <div className="bookings">
      <div>
        {loggedInUser && (
          <div>
            <h3>Hey {loggedInUser.username}, here are your bookings!</h3>
            {userBookings.map((booking) => (
              <div key={booking.id}>
                <Link to={`/spots/${booking.spotId}`}>{booking.spotId}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    // <div>
    //   <NavLink to="/" exact> Home</NavLink>
    //   {userBookings.map((booking) => {
    //     return <div>{booking.spotId}</div>;
    //   })}
    // </div>

    // <li key={booking.id}>
    //         <NavLink to={`/users/${user.id}/bookings`}>{booking.spotId}</NavLink>
    //       </li>
  );
};

export default Booking;
