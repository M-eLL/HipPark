import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteBookings } from "../../store/bookings";
import { addBookings } from "../../store/bookings";

const BookingForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const { spotId } = useParams();

  const loggedInUser = useSelector((state) => state.session.user);

  const deleteHandler = () => {
    console.log(spotId);
    dispatch(deleteBookings(spotId, user.id));
    history.push("/bookings");
  };

  const addBookingHandler = () => {
    console.log(spotId);
    dispatch(addBookings(spotId, user.id));
    history.push("/bookings");
  };

  return (
    <form className="booking-form">
      {loggedInUser && (
        <>
          <div>
            <h1>delete booking?</h1>
            <button onClick={deleteHandler}>delete</button>
          </div>
          <div>
            <h1>book spot?</h1>
            <button onClick={addBookingHandler}>add booking</button>
          </div>
        </>
      )}
    </form>
  );
};

export default BookingForm;
