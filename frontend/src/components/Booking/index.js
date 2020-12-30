import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookings } from "../../store/bookings";
import { NavLink, Route, useParams } from "react-router-dom";

const Booking = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookings(1));
  }, []);
  const userBookings = useSelector((state) => state.bookings);
  console.log(userBookings);

  return (
    <div>
      {userBookings.map(booking=>{
          return (
              <div>{booking.spotId}</div>
          )
      })}
    </div>
  );
};

export default Booking;
