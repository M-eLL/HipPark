import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteBookings } from "../../store/bookings";

const BookingForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const { spotId } = useParams();

  const deleteHandler = () => {
    console.log(spotId);
    dispatch(deleteBookings(spotId, user.id));
    history.push("/bookings");
  };

  return (
    <form className="booking-delete-form">
      <h1>delete booking?</h1>
      <button onClick={deleteHandler}>delete</button>
    </form>
  );
};

export default BookingForm;
