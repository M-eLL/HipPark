import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookings } from "../../store/bookings";
import { Link, Route, useParams } from "react-router-dom";

const Booking = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookings(1));
  }, []);
  const userBookings = useSelector((state) => state.bookings);
  console.log(userBookings);

  return (
    <div className="bookings">
      <h2>Bookings HEEEEERE</h2>
      <ul>
        {userBookings.map((booking) => (
          <div key={booking.id}>
            <Link to={`/bookings/${booking.id}`}>{booking.spotId}</Link>
          </div>
        ))}
      </ul>
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
