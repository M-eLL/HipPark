import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookings } from "../../store/bookings";

const Booking = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookings(1));
  }, []);
  const userBookings = useSelector((state) => state.bookings);
  console.log(userBookings);

  return <h1>i am going crazy</h1>;
};

export default Booking;
