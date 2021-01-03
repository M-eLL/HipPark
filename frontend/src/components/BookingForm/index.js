import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { oneSpot } from "../../store/spots";
import { bookings, deleteBookings, addBookings } from "../../store/bookings";
// import { addBookings } from "../../store/bookings";
import { editBookings } from "../../store/bookings";

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

  const editBookingHandler = () => {
    console.log(spotId);
    dispatch(editBookings(spotId, user.id));
    history.push("/bookings");
  };

  useEffect(() => {
    dispatch(oneSpot());
    dispatch(bookings(1));
  }, [dispatch]);
  const userBookings = useSelector((state) => state.bookings);
  const [opening, setOpening] = useState("");

  return (
    <div className="booking-form">
      {loggedInUser && (
        <>
          <div>
            {/* {!userBookings && ( */}
            <>
              <h3>book spot?</h3>
              <button onClick={addBookingHandler}>add booking</button>
            </>
            {/* )} */}
          </div>
          {/* {userBookings && ( */}
          <div>
            <div>
              <div>
                <h3>edit booking</h3>
                <select
                  name="opening"
                  onChange={(e) => {
                    setOpening(e.target.value);
                  }}
                  value={opening}
                >
                  <option value="" disabled>
                    choose a date
                  </option>
                  {userBookings.map((booking) => {
                    return <option>{booking.Spot.name}</option>;
                  })}
                </select>
                <button onClick={editBookingHandler}>switch booking</button>
              </div>
            </div>
            <div>
              <h3>delete booking?</h3>
              <button onClick={deleteHandler}>delete</button>
            </div>
          </div>
          {/* )} */}
        </>
      )}
    </div>
  );
};

export default BookingForm;
